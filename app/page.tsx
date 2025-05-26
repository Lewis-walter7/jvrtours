'use client';

import { useState } from "react";
import AccordionLayout from "./components/accordionlayout";
import Hero from "./components/hero";
import { accordionData } from "./lib/data";
import PlacesPage from "./components/places";
import CTASection from "./components/CTAsection";
import InfoModal from "./components/modal/InfoModal";
import GetQuote from "./components/modal/getQuote";
import Review from "./components/reviews/review";
import ReviewModal from "./components/modal/ReviewModal";


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
        <Hero />
        <PlacesPage />
        <Review />
        <AccordionLayout 
          handleClick={handleClick}
          isSomeActive={isSomeActive}
          data={accordionData}
          turn={active}
          setTurn={setActive}
        />
        <ReviewModal />
        <InfoModal />
        <GetQuote />
        <CTASection />
    </div>
  );
}
