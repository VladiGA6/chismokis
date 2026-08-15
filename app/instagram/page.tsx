import type { Metadata } from "next";
import InstagramPage from "@/templates/InstagramPage";

export const metadata: Metadata = {
    title: "Instagram — chokis_mx",
    description:
        "Mockup del perfil de Instagram de chokis_mx con seis posts en formato 4:5.",
};

export default function Page() {
    return <InstagramPage />;
}
