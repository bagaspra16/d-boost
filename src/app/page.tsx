import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ContactHeader from "@/components/ContactHeader";
import Pricing from "@/components/Pricing/Pricing";
import PricingHeader from "@/components/Pricing/PricingHeader";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import Features from "@/components/Features";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Container>
        <Benefits />

        <Section id="pricing">
          <PricingHeader />
          <Pricing />
        </Section>

        <Section id="contact">
          <ContactHeader />
          <Contact />
        </Section>

        <FAQ />

        <Features />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
