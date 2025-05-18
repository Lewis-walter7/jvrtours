"use client";

import Image from "next/image";
import db from "../db/testimonial.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from "../models/testimonial";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <Slider {...settings}>
      {db.testimonial.map((tm: testimonial, i: number) => {
        return (
          <aside key={i} className="p-2">
            <div className="p-8 rounded-lg bg-darkGray bg-opacity-10 shadow-md flex flex-col items-center justify-center">
              <p className="text-md text-darkGray text-center mt-6 mb-8">
                {tm.message}
              </p>
              {/* <Image
                src={`/${tm.img}`}
                alt={tm.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              /> */}
              <h3 className="text-center text-lg text-black">
                {tm.name}
                <br />
                <small className="text-green font-medium text-sm">
                  {tm.location}
                </small>
              </h3>
            </div>
          </aside>
        );
      })}
    </Slider>
  );
};

export default Testimonials;
