'use client'

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { newsArticles, NewsArticle } from './data';

const NewsPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="pt-20 pb-20 bg-gray-50">
      <div className="w-[90%] sm:w-[80%] mx-auto mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-950 font-bold">
          Latest News & Updates
        </h1>
        <p className="mt-4 text-gray-700 sm:text-lg text-base font-medium">
          Stay informed with the latest happenings in the travel world.
        </p>
      </div>

      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {newsArticles.map((article, index) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="relative w-full h-56"> {/* Increased height for better image display */}
              <Image
                src={article.imageUrl}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                  {article.category}
                </span>
                <h2 className="text-xl font-semibold text-blue-950 hover:text-blue-700 transition-colors duration-200 mb-2">
                  <a href={article.readMoreUrl} className="hover:underline">
                    {article.title}
                  </a>
                </h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.snippet}
                </p>
              </div>
              <div className="mt-auto">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <span>By {article.author}</span>
                  <span className="mx-2">|</span>
                  <span>{article.date}</span>
                </div>
                <a
                  href={article.readMoreUrl}
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 group"
                >
                  Read More
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {newsArticles.length === 0 && (
        <div className="w-[80%] mx-auto text-center py-10">
          <p className="text-gray-600 text-lg">No news articles available at the moment. Please check back later.</p>
        </div>
      )}
    </div>
  );
};

export default NewsPage;