import Image from "next/image";
import { ContainerScroll } from "@/components/landing/ContainerScroll";
import Navbar from "@/components/landing/Navbar";
import { MovingCards } from "@/components/landing/MovingClients";
import { clients, quantities } from "@/lib/constants";
import { TooltipReviews } from "@/components/landing/TooltipReviews";
import { HeroParallax } from "@/components/landing/HeroParallax";
import { StickyScroll } from "@/components/landing/StickyScroll";
import { StickyScroll2 } from "@/components/landing/StickyScroll2";
import { PopulatedBentoGrid } from "@/components/landing/PopulatedBentoGrid";
import PricingCards from "@/components/landing/PricingCards";
import { FAQs } from "@/components/landing/FAQs";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import { FeaturesSection } from "@/components/landing/FeatureSection";
import { WorldMapDemo } from "@/components/landing/WorldMapDemo";

export default function Home() {
  return (
    <main className="">
      {/* <div className="flex items-center justify-center bg-black w-full h-6">
        <p className="font-dm text-center text-sm text-white">
          Get 3 Free Bullets when you sign up today!
        </p>
      </div> */}
      <Navbar />
      <section className="my_grid antialiased w-full bg-none rounded-md !overflow-visible relative flex flex-col items-center">
        <Hero />
      </section>

      <section className="my_grid antialiased !overflow-visible relative flex flex-col">
        <div className="w-full pt-8">
          <TooltipReviews />
        </div>
      </section>

      <section className="my_grid antialiased">
        <div className="pt-28">
          <PopulatedBentoGrid />
        </div>
      </section>

      <section className="my_grid antialiased">
        <div className="px-20">
          <ContainerScroll />
        </div>
      </section>

      <section className="my_grid antialiased">
        <div className="px-20 pt-0">
          <StickyScroll2 />
        </div>
      </section>

      <section className="my_grid antialiased">
        <div className="px-20 pt-24">
          <FeaturesSection />
        </div>
      </section>

      <section className="my_grid antialiased">
        <div className="px-20 pt-24">
          <StickyScroll />
        </div>
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
