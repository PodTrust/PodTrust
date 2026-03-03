import HomeSection from "./components/HomeSection";
import BuiltFor from "./components/BuiltFor";
import AboutSection from "./components/AboutSection";
import HowItWorks from "./components/HowItWorks";
import StartDealSection from "./components/StartDealSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Page() {
    return (
        <main>
            <HomeSection />
            <BuiltFor />
            <AboutSection />
            <HowItWorks />
            <StartDealSection />
            <Testimonials />
            <Footer />
        </main>
    )
}