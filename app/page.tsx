import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CoursesSection from "@/components/sections/CoursesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BrandMarquee from "@/components/sections/BrandMarquee";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import BlogSection from "@/components/sections/BlogSection";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CoursesSection />
        <WhyChooseUs />
        <BrandMarquee />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
