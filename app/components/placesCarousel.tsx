"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Place } from "../models/place";
import useInfoModal from "../hooks/useInfoModal";
import { usePlaceStore } from "../hooks/usePlaceStore";
import { useRouter } from "next/navigation";

interface PlacesCarouselProps {
  places: Place[];
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 3,
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

export default function PlacesCarousel({ places }: PlacesCarouselProps) {
  

  const infoModal = useInfoModal();
  const { setSelectedPlace } = usePlaceStore();

  const handleReadMore = (place: Place) => {
    setSelectedPlace(place);
  };
  const router = useRouter();

  return (
    <Slider {...settings}>
      {places.map((place) => (
        <div key={place.name} className="px-2 min-h-100">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={place.imageUrl}
              alt={place.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{place.name}</h2>
              <p className="mt-2 text-gray-600">{place.description}</p>
              <div className="mt-4 flex items-center w-full">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(place.rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">{place.rating.toFixed(1)}</span>
                <button className="ml-auto cursor-pointer bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
                  onClick={() => {
                    handleReadMore(place);
                    router.push(place.readMoreUrl)
                    }
                  }
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}