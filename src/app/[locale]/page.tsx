import { HeroSection } from "@/components/home/HeroSection";
import { RestaurantOfMonth } from "@/components/home/RestaurantOfMonth";
import { StatsSection } from "@/components/home/StatsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RestaurantOfMonth />
      <StatsSection />
      <HowItWorks />
      <Testimonials />
      <NewsletterSection />
    </>
  );
}
