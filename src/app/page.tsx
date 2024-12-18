import Hero from "@/components/custum/Hero";
import BestChefs from "../components/custum/BestChefs"
import React from "react";
import BestCusines from "@/components/custum/BestCusines";

export default function Home() {
  return (
  <main >
    <Hero/>
    <BestChefs/>
    <BestCusines/>
  </main>
  );
}
