import { HeroSection } from "@/components/hero-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { SocialProof } from "@/components/social-proof";
import { BentoSection } from "@/components/bento-section";
import { LargeTestimonial } from "@/components/large-testimonial";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialGridSection } from "@/components/testimonial-grid-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { AnimatedSection } from "@/components/animated-section";
import FeaturesSection from "@/components/FeaturesSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          <AnimatedSection>
            <HeroSection />
          </AnimatedSection>
          {/* Dashboard Preview Wrapper */}
          <div className="z-30">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>
        <AnimatedSection delay={0.1}>
          <SocialProof />
        </AnimatedSection>
        <AnimatedSection
          id="features-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-16"
          delay={0.2}
        >
          <BentoSection />
        </AnimatedSection>
        {/* <AnimatedSection
          id="features-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-16"
          delay={0.2}
        >
          <FeaturesSection />
        </AnimatedSection> */}
        <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <LargeTestimonial />
        </AnimatedSection>

        <AnimatedSection
          id="pricing-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <PricingSection />
        </AnimatedSection>
        <AnimatedSection
          id="testimonials-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <TestimonialGridSection />
        </AnimatedSection>
        <AnimatedSection
          id="faq-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <CTASection />
        </AnimatedSection>
      </div>
    </div>
  );
}
