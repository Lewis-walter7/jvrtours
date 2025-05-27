'use client';

import React, { useEffect } from 'react';
import { newsArticles, NewsArticle } from '../data'; // Import data and type
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const ArticlePage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const articleId = params.id as string;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const article = newsArticles.find(art => art.id === articleId);

  if (!article) {
    return (
      <div className="pt-20 pb-20 min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Article Not Found</h1>
        <p className="text-gray-700 mb-8">
          The news article you are looking for does not exist or may have been moved.
        </p>
        <button
          onClick={() => router.push('/news')}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to News
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="relative w-full h-64 md:h-80 lg:h-96" data-aos="fade-in">
          <Image
            src={article.imageUrl}
            alt={article.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <article className="p-6 md:p-8 lg:p-10">
          <div className="mb-4" data-aos="fade-up">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4" data-aos="fade-up" data-aos-delay="100">
            {article.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-6" data-aos="fade-up" data-aos-delay="200">
            <span>By {article.author}</span>
            <span className="mx-2">|</span>
            <span>{article.date}</span>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed" // Tailwind Typography for styling HTML content
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
            data-aos="fade-up"
            data-aos-delay="300"
          />

          <div className="mt-10 pt-6 border-t border-gray-200" data-aos="fade-up" data-aos-delay="400">
            <button
              onClick={() => router.back()}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors group flex items-center"
            >
              <span className="mr-1 transition-transform duration-200 group-hover:-translate-x-1">&larr;</span>
              Back to News
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;