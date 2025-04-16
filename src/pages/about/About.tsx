import { AboutUs } from "@/components/AboutUs";
import { HotelsFeatures } from "@/components/HotelsFeatures";
import React from "react";
import { OurStaf } from "./OurStaf";

export const About = () => {
  return (
    <>
      <section>
        <div
          className="w-full h-screen bg-center flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage:
              "url('https://www.fiftygrande.com/wp-content/uploads/2021/06/IconicHero-1-1500x773.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="text-xl font-semibold mb-4">SUITES HOTEL & RESORT</p>
          <h1 className="text-6xl font-bold font-mono text-center">About Us</h1>
        </div>
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <OurStaf />
      </section>
      <section>
        <HotelsFeatures />
      </section>
    </>
  );
};
