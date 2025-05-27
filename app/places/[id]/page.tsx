'use client'

import Head from 'next/head'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { places } from '@/app/db/places'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



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

export default function PlacePage() {
    const params = useParams();
    const placeId = params.id as string;

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, [])
    
      const place = places.find(place => place.id === placeId);

  if (!place) {
    return <div className="p-8 text-center text-red-500">Place not found.</div>
  }

  return (
    <div className="min-h-screen w-[80%] mx-auto mt-20 text-start bg-white shadow-md">
      <Head>
        <title>{place.name} | Travel Guide</title>
        <meta name="description" content={place.description}/>
      </Head>
      <div>
        <h1 className="text-3xl font-bold mb-2 text-center">{place.name}</h1>
        <p className="text-lg text-center mb-4" dangerouslySetInnerHTML={{ __html: place.description }} />
        {/* <p className="text-lg text-center mb-4">{place.description}</p> */}
      </div>

      <Slider {...settings}>
        {place.imageUrls.map((imageUrl, index) => (
          <div key={index}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <Image 
                src={imageUrl} 
                alt={place.name} 
                width={500}
                height={400}
                className="w-full h-[300px] mx-2 object-cover"
            />
          </div>
        ))}
      </Slider>
  
      <div className="max-w-5xl mx-auto px-4 py-12" data-aos="fade-up">
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: place.fullContent }}/>
      </div>
    </div>
  );
}
