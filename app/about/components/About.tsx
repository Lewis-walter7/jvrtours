"use client";

import useAboutUsModal from "@/app/hooks/useAboutUsModal";
import useOurMissionModal from "@/app/hooks/useOurMissionModal";
import useWhyChooseUsModal from "@/app/hooks/useWhyChooseUsModal";
import Image from "next/image";
import { useState } from "react";


type TabKey = "about" | "why" | "mission";

const About = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("about");
  const whyChooseUsModal = useWhyChooseUsModal()
  const aboutMOdal = useAboutUsModal()
  const ourMissionModal = useOurMissionModal()

  const tabContent: Record<TabKey, string> = {
    about:
      "JVR Tours Company Ltd is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world’s wonders with you.",
    why:
      "We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way.",
    mission:
      "Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry.",
  };

  const handleClick = (tab: TabKey) => {
      if(activeTab === "about") {
        aboutMOdal.onOpen()
      }else if(activeTab === "why") {
        whyChooseUsModal.onOpen()
      }else {
        ourMissionModal.onOpen()
      }
  }

  return (
    <section className="flex flex-col md:flex-row mt-6 items-center w-[80%] mx-auto justify-center px-6 py-10 bg-white">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <Image
          src="/flamingo.png"
          alt="Flamingos in lake"
          width={500}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 md:pl-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Discover New Horizons
        </h2>

        {/* Tabs */}
        <div className="flex space-x-4 text-sm font-medium mb-4">
          {(["about", "why", "mission"] as TabKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "text-teal-500 border-b-2 border-teal-500"
                  : "text-gray-400"
              } pb-1 transition-colors`}
            >
              {tab === "about"
                ? "ABOUT US"
                : tab === "why"
                ? "WHY CHOOSE US"
                : "OUR MISSION"}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <p className="text-gray-700 mb-6">{tabContent[activeTab]}</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition">
            Get in Touch
          </button>
          <button className="border border-gray-400 px-6 py-2 rounded text-gray-700 hover:bg-gray-100 transition"
            onClick={() => handleClick(activeTab)}
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
