import { ContainerScroll } from "@/components/landing/ContainerScroll";
import Navbar from "@/components/landing/Navbar";
import { TooltipReviews } from "@/components/landing/TooltipReviews";
import { StickyScroll } from "@/components/landing/StickyScroll";
import { StickyScroll2 } from "@/components/landing/StickyScroll2";
import { PopulatedBentoGrid } from "@/components/landing/PopulatedBentoGrid";
import PricingCards from "@/components/landing/PricingCards";
import { FAQs } from "@/components/landing/FAQs";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import { FeaturesSection } from "@/components/landing/FeatureSection";
import PricingComparison from "@/components/landing/PricingComparison";

export default function Home() {
  return (
    <main className="">
      {/* <div className="flex items-center justify-center bg-black w-full h-6">
        <p className="font-dm text-center text-sm text-white">
          Get 3 Free Drops when you sign up today!
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
        <div className="pt-28 pb-32">
          <PopulatedBentoGrid />
        </div>
      </section>

      {/* <section className="my_grid antialiased">
        <div className="hidden md:flex px-20">
          <ContainerScroll>
            <img src="FullApp.png" className="mt-6" />
          </ContainerScroll>
        </div>
      </section> */}

      <section className="my_grid antialiased">
        <div
          style={{
            position: "relative",
            boxSizing: "content-box",
            maxHeight: "80vh",
            maxHeight: "80svh",
            width: "100%",
            aspectRatio: "2.280534351145038",
            padding: "40px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <iframe
            src="https://app.supademo.com/embed/cm5ed156f4bypvlryts7a98w5?embed_v=2"
            loading="lazy"
            title="DropFast Demo"
            allow="clipboard-write"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            style={{
              position: "absolute",
              width: "90%",
              height: "90%",
            }}
          />
        </div>
      </section>

      <section className="my_grid antialiased">
        <div className="px-4 md:px-20 pt-8 md:pt-28">
          <StickyScroll2 />
        </div>
      </section>

      <section className="my_grid antialiased">
        <div className="px-6 md:px-20 pt-48 md:pt-24">
          <FeaturesSection />
        </div>
      </section>

      <section className="my_grid antialiased">
        <div className="px-6 md:px-20 pt-48 md:pt-24 pb-12">
          <PricingComparison />
        </div>
      </section>

      <section className="my_grid antialiased">
        <div className="px-4 md:px-20 pt-0 md:pt-24 pb-16">
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
