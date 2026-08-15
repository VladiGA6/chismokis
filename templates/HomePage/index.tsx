import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageHero from "@/components/PackageHero";
import QuestionMasonry from "@/components/QuestionMasonry";
import PrizeSection from "@/components/PrizeSection";

const HomePage = () => {
    return (
        <div className="relative flex min-h-screen flex-col bg-[#001789]">
            <div className="absolute inset-x-0 top-0 z-40 mx-auto w-full max-w-[1100px] px-4">
                <Header />
            </div>
            <PackageHero />
            <div className="mx-auto w-full max-w-[1100px] px-4">
                <QuestionMasonry />
                <PrizeSection />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
