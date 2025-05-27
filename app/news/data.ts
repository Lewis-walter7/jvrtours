export interface NewsArticle {
  id: string;
  title: string;
  snippet: string;
  imageUrl: string;
  date: string;
  category: string;
  author: string;
  readMoreUrl: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'New Luxury Hotel Opens in Downtown',
    snippet: 'Experience unparalleled luxury and comfort at the newly opened "The Grand Celestial Hotel" located in the heart of the city.',
    imageUrl: '/hotels/one.png',
    date: 'October 26, 2023',
    category: 'Hotels',
    author: 'Jane Doe',
    readMoreUrl: '#news-article-1',
  },
  {
    id: '2',
    title: 'Top 5 Travel Destinations for Winter 2023',
    snippet: 'Discover breathtaking winter wonderlands. Our experts have curated a list of the top 5 must-visit destinations this winter.',
    imageUrl: '/hotels/one.png',
    date: 'October 24, 2023',
    category: 'Travel Tips',
    author: 'John Smith',
    readMoreUrl: '#news-article-2',
  },
  {
    id: '3',
    title: 'Sustainable Tourism: Traveling Responsibly',
    snippet: 'Learn how you can make a positive impact on the environment and local communities while exploring the world.',
    imageUrl: '/hotels/one.png',
    date: 'October 22, 2023',
    category: 'Guides',
    author: 'Alice Green',
    readMoreUrl: '#news-article-3',
  },
  {
    id: '4',
    title: 'Airline Announces New Routes to Exotic Locations',
    snippet: 'Global Airways has just announced an expansion of its routes, connecting more cities to sought-after exotic destinations.',
    imageUrl: '/hotels/one.png',
    date: 'October 20, 2023',
    category: 'Airlines',
    author: 'Robert Brown',
    readMoreUrl: '#news-article-4',
  },
  {
    id: '5',
    title: 'The Ultimate Guide to Packing Light',
    snippet: 'Say goodbye to hefty luggage fees. Master the art of packing light with our comprehensive guide for your next adventure.',
    imageUrl: '/hotels/one.png',
    date: 'October 18, 2023',
    category: 'Travel Tips',
    author: 'Emily White',
    readMoreUrl: '#news-article-5',
  },
];