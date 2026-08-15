"use client";

import { useSyncExternalStore } from "react";

export type AuthProvider = "google" | "facebook" | "email";

export type SessionUser = {
    handle: string;
    provider: AuthProvider;
};

export type SavedComment = {
    id: string;
    content: string;
    questionId: string;
    questionTitle: string;
    createdAt: number;
    parentId?: string;
};

type SessionState = {
    user: SessionUser | null;
    comments: SavedComment[];
};

const SESSION_KEY = "chismokis.session";
const COMMENTS_KEY = "chismokis.comments";

const emptyState: SessionState = { user: null, comments: [] };

const listeners = new Set<() => void>();

let snapshot: SessionState = emptyState;

const emit = () => {
    listeners.forEach((listener) => listener());
};

const readJson = <T,>(key: string, fallback: T): T => {
    try {
        const raw = window.localStorage.getItem(key);
        return raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
        return fallback;
    }
};

const readStored = (): SessionState => ({
    user: readJson<SessionUser | null>(SESSION_KEY, null),
    comments: readJson<SavedComment[]>(COMMENTS_KEY, []),
});

const sameState = (a: SessionState, b: SessionState) =>
    a.user?.handle === b.user?.handle &&
    a.user?.provider === b.user?.provider &&
    a.comments.length === b.comments.length &&
    a.comments.every(
        (item, index) =>
            item.id === b.comments[index]?.id &&
            item.content === b.comments[index]?.content,
    );

const hydrate = () => {
    if (typeof window === "undefined") return;
    const next = readStored();
    if (sameState(snapshot, next)) return;
    snapshot = next;
    emit();
};

const persist = (next: SessionState) => {
    snapshot = next;
    try {
        if (next.user) {
            window.localStorage.setItem(SESSION_KEY, JSON.stringify(next.user));
        } else {
            window.localStorage.removeItem(SESSION_KEY);
        }
        window.localStorage.setItem(COMMENTS_KEY, JSON.stringify(next.comments));
    } catch {
        // ignore quota / private mode
    }
    emit();
};

const subscribe = (listener: () => void) => {
    listeners.add(listener);
    hydrate();
    return () => listeners.delete(listener);
};

const getSnapshot = () => snapshot;

const getServerSnapshot = () => emptyState;

const makeHandle = () =>
    `cookie_not_found_404_${Math.floor(100000 + Math.random() * 900000)}`;

export const login = (provider: AuthProvider) => {
    hydrate();
    if (snapshot.user) return snapshot.user;
    const user: SessionUser = { handle: makeHandle(), provider };
    persist({ ...snapshot, user });
    return user;
};

export const logout = () => {
    hydrate();
    persist({ user: null, comments: [] });
};

export const addSavedComment = (
    input: Omit<SavedComment, "id" | "createdAt"> & { id?: string },
): SavedComment => {
    hydrate();
    const comment: SavedComment = {
        id: input.id ?? `local-${Date.now()}`,
        content: input.content,
        questionId: input.questionId,
        questionTitle: input.questionTitle,
        parentId: input.parentId,
        createdAt: Date.now(),
    };
    persist({ ...snapshot, comments: [comment, ...snapshot.comments] });
    return comment;
};

export const useSession = () =>
    useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

export const formatCommentTime = (createdAt: number) => {
    const mins = Math.floor((Date.now() - createdAt) / 60_000);
    if (mins < 1) return "ahora";
    if (mins < 60) return `${mins}m`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h`;
    return `${Math.floor(hours / 24)}d`;
};
