import Header from "@/components/layout/header/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import ForPatients from "@/components/landing/ForPatients";
import ForDoctors from "@/components/landing/ForDoctors";
import Features from "@/components/landing/Features";
import Footer from "@/components/layout/footer/Footer";
// import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <ForPatients />
      <ForDoctors />
      <Features />
      <Footer />
      {/* <CTA /> */}
    </>
  );
}
