import type { Metadata } from "next";
import ProfilePage from "@/templates/ProfilePage";

export const metadata: Metadata = {
    title: "Perfil • Chismokis",
    description:
        "Tu rincón anónimo: la recopilación de tus respuestas y la opción de cerrar sesión.",
};

export default function Page() {
    return <ProfilePage />;
}
