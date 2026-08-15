"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PassCard from "@/components/PassCard";
import { easeOutSoft } from "@/lib/motion";

const PassPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-[#001789]">
            <div className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col px-4 pb-10">
                <Header />
                <main className="flex flex-1 flex-col items-center justify-center">
                    <PassCard />
                    <motion.p
                        className="mt-10 text-center text-[1.125rem] font-medium text-white"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.35, ease: easeOutSoft }}
                    >
                        Toca la card para voltearla.
                    </motion.p>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default PassPage;
