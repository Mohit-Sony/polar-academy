import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ResultsSection from "@/components/sections/ResultsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CoursesSection from "@/components/sections/CoursesSection";
import TeamSection from "@/components/sections/TeamSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ResultsSection />
        <FeaturesSection />
        <CoursesSection />
        <TeamSection />
        {/* <WhyChooseUs /> */}

        <CTABanner />
                <FAQSection />
      </main>
      <Footer />
    </>
  );
}
