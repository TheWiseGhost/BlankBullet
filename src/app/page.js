import Image from "next/image";
import { ContainerScroll } from "@/components/landing/ContainerScroll";
import Navbar from "@/components/landing/Navbar";
import { MovingCards } from "@/components/landing/MovingClients";
import { clients, products } from "@/lib/constants";
import { TooltipReviews } from "@/components/landing/TooltipReviews";
import { HeroParallax } from "@/components/landing/HeroParallax";
import { StickyScroll } from "@/components/landing/StickyScroll";
import { PopulatedBentoGrid } from "@/components/landing/PopulatedBentoGrid";
import PricingCards from "@/components/landing/PricingCards";
import { FAQs } from "@/components/landing/FAQs";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="my_grid antialiased min-h-screen w-full bg-none rounded-md !overflow-visible relative flex flex-col items-center">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24"></div>
        <Hero />
      </section>

      <div className="my_grid antialiased">
        <section className="h-20 w-full mt-[-30px]">
          <TooltipReviews />
        </section>
        <section className="h-60 pt-24 w-full bg-none">
          <MovingCards items={clients} />
        </section>
      </div>
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <StickyScroll />
      <section className="py-12">
        <PopulatedBentoGrid />
      </section>
      <section className="pb-24">
        <PricingCards />
      </section>
      <section className="py-12">
        <FAQs />
      </section>
      <Footer />
    </main>
  );
}
