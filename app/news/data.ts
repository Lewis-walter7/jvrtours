export interface NewsArticle {
  id: string;
  title: string;
  snippet: string;
  imageUrl: string;
  fullContent: string; // Added full content field
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
    readMoreUrl: '/news/1',
    fullContent: `
      <p>The city's skyline has a new star: <strong>The Grand Celestial Hotel</strong>. Officially opening its doors yesterday, this establishment promises to redefine luxury for business and leisure travelers alike. Located in the bustling heart of downtown, it offers easy access to major attractions and business hubs.</p>
      <p class="mt-4">Featuring 300 exquisitely designed rooms and suites, each offers panoramic city views, state-of-the-art amenities, and bespoke services. Guests can indulge in a variety of culinary experiences at its three signature restaurants, including a rooftop bar with breathtaking vistas.</p>
      <p class="mt-4">"Our vision was to create an oasis of tranquility and opulence amidst the vibrant city life," said the General Manager during the grand opening. "We are committed to providing an unforgettable experience for every guest."</p>
      <p class="mt-4">The hotel also boasts a world-class spa, a modern fitness center, and extensive event spaces perfect for conferences and social gatherings. Early reviews are already praising its impeccable service and stunning architecture.</p>
    `,
  },
  {
    id: '2',
    title: 'Top 5 Travel Destinations for Winter 2025',
    snippet: 'Discover breathtaking winter wonderlands. Our experts have curated a list of the top 5 must-visit destinations this winter.',
    imageUrl: '/hotels/travel.png',
    date: 'October 24, 2023',
    category: 'Travel Tips',
    author: 'John Smith',
    readMoreUrl: '/news/2',
    fullContent: `
        <p>As the year winds down and cooler months approach, why not embrace the warmth and wonder of East Africa? Our travel experts have selected the top 5 East African destinations that promise a memorable escape filled with nature, culture, and luxury this winter.</p>
            <ol class="list-decimal list-inside mt-4 space-y-2">
                <li><strong>Maasai Mara, Kenya:</strong> Witness the Great Migration, enjoy luxury tented safaris, and experience breathtaking savannah landscapes teeming with wildlife.</li>
                <li><strong>Zanzibar, Tanzania:</strong> Relax on pristine white-sand beaches, explore the historic Stone Town, and enjoy spice tours in this Indian Ocean paradise.</li>
                <li><strong>Volcanoes National Park, Rwanda:</strong> Trek through misty mountains to encounter majestic mountain gorillas and soak in the lush rainforest scenery.</li>
                <li><strong>Bwindi Impenetrable Forest, Uganda:</strong> A UNESCO World Heritage Site offering life-changing gorilla trekking experiences and rich biodiversity.</li>
                <li><strong>Serengeti National Park, Tanzania:</strong> Discover endless plains, luxurious safari lodges, and iconic African wildlife under vast, starry skies.</li>
            </ol>
        <p class="mt-4">Whether you're drawn by wildlife, beaches, or cultural heritage, East Africa offers a truly unforgettable winter retreat filled with adventure and serenity.</p>
`

  },
  {
    id: '3',
    title: 'Sustainable Tourism: Traveling Responsibly',
    snippet: 'Learn how you can make a positive impact on the environment and local communities while exploring the world.',
    imageUrl: '/hotels/sustainable.jpeg',
    date: 'October 22, 2023',
    category: 'Guides',
    author: 'Alice Green',
    readMoreUrl: '/news/3',
    fullContent: `
      <p>Travel is a powerful way to broaden our horizons, but it's crucial to do so responsibly. Sustainable tourism focuses on minimizing negative impacts and maximizing positive contributions to the environment, local economies, and cultures.</p>
      <h3 class="text-lg font-semibold mt-4 mb-2">Key Principles of Sustainable Travel:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Respect Local Cultures:</strong> Learn about local customs and traditions. Dress modestly where appropriate and always ask for permission before taking photos of people.</li>
        <li><strong>Support Local Economies:</strong> Choose locally-owned accommodations, restaurants, and tour operators. Buy souvenirs from local artisans.</li>
        <li><strong>Protect the Environment:</strong> Reduce your plastic consumption, conserve water and energy, stay on marked trails, and never disturb wildlife.</li>
        <li><strong>Choose Eco-Friendly Options:</strong> Opt for accommodations and tour operators with recognized eco-certifications. Consider offsetting your carbon footprint.</li>
      </ul>
      <p class="mt-4">By making conscious choices, we can ensure that future generations can also enjoy the wonders of our planet. Every small step contributes to a larger positive impact.</p>
    `,
  },
  {
    id: '4',
    title: 'Airline Announces New Routes to Exotic Locations',
    snippet: 'Global Airways has just announced an expansion of its routes, connecting more cities to sought-after exotic destinations.',
    imageUrl: '/hotels/airlines.png',
    date: 'October 20, 2023',
    category: 'Airlines',
    author: 'Robert Brown',
    readMoreUrl: '/news/4',
    fullContent: `
      <p>Exciting news for globetrotters! <strong>Global Airways</strong> today unveiled a significant expansion of its international network, introducing new direct flights to several highly anticipated exotic destinations. This move aims to cater to the growing demand for unique travel experiences.</p>
      <p class="mt-4">The new routes, set to launch in early 2024, include direct flights from major hubs to destinations such as Malé (Maldives), Reykjavik (Iceland), and Cusco (Peru). "We are thrilled to connect our passengers to these incredible parts of the world," said the CEO of Global Airways. "These new routes reflect our commitment to providing diverse travel options and world-class service."</p>
      <p class="mt-4">The airline will be utilizing its newer, more fuel-efficient aircraft for these long-haul flights, emphasizing a commitment to reducing its carbon footprint. Tickets for these new routes are expected to go on sale next month, with introductory offers available for early bookings.</p>
    `,
  },
  {
    id: '5',
    title: 'The Ultimate Guide to Packing Light',
    snippet: 'Say goodbye to hefty luggage fees. Master the art of packing light with our comprehensive guide for your next adventure.',
    imageUrl: '/hotels/packing.jpg',
    date: 'October 18, 2023',
    category: 'Travel Tips',
    author: 'Emily White',
    readMoreUrl: '/news/5',
    fullContent: `
      <p>Tired of lugging heavy suitcases and paying excess baggage fees? Packing light is an art that can transform your travel experience, making it more enjoyable and less stressful. Here's our ultimate guide:</p>
      <h3 class="text-lg font-semibold mt-4 mb-2">Core Principles:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Choose Versatile Clothing:</strong> Opt for items that can be mixed and matched to create multiple outfits. Neutral colors are your friend.</li>
        <li><strong>Roll, Don't Fold:</strong> Rolling clothes saves space and can reduce wrinkles.</li>
        <li><strong>Use Packing Cubes:</strong> These help compress clothing and keep your suitcase organized.</li>
        <li><strong>Wear Your Heaviest Items:</strong> Wear bulky items like boots and jackets on the plane.</li>
        <li><strong>Solid Toiletries:</strong> Consider solid shampoo, conditioner, and soap bars to avoid liquid restrictions and potential spills.</li>
        <li><strong>Limit "Just In Case" Items:</strong> Be realistic about what you'll actually need. Most essentials can be purchased at your destination if necessary.</li>
      </ul>
      <p class="mt-4">By adopting these strategies, you'll not only save money on baggage fees but also enjoy greater mobility and flexibility during your travels. Happy packing!</p>
    `,
  },
];