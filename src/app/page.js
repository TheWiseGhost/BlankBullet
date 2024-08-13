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

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="[background:radial-gradient(125%_55%_at_30%_10%,#000_35%,#223_100%)] antialiased min-h-screen w-full bg-none rounded-md !overflow-visible relative flex flex-col items-center">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24"></div>
        <div className="flex flex-col mt-[-50px] md:mt-[-120px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <h1 className="font-mon text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-bold">
                  Launch Your Course in Just Minutes
                </h1>
              </div>
            }
          >
            <Image
              src={`/temp-banner.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>
      <div className="[background:radial-gradient(455%_55%_at_80%_20%,#223_30%,#223_100%)] antialiased">
        <section className="h-20 w-full bg-none">
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
