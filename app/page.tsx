'use client';

import { useState } from "react";
import AccordionLayout from "./components/accordionlayout";
import Hero from "./components/hero";
import Testimonials from "./components/testimonials";
import { accordionData } from "./lib/data";
import PlacesPage from "./components/places";
import Contact from "./components/contact";
import CTASection from "./components/CTAsection";
import InfoModal from "./components/modal/InfoModal";
import GetQuote from "./components/modal/getQuote";
import Hero2 from "./components/hero2";


export default function Home() {
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false,false])
      : setActive([true, true, true, true, true, true]);
  };
  return (
    <div >
        <Hero2 />
        <PlacesPage />
        <Testimonials />
        <AccordionLayout 
          handleClick={handleClick}
          isSomeActive={isSomeActive}
          data={accordionData}
          turn={active}
          setTurn={setActive}
        />
        <Contact />
        <InfoModal />
        <GetQuote />
        <CTASection />
    </div>
  );
}
