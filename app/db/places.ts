import { Place } from "../models/place";


export const places: Place[] = [
  {
    id: '1',
    name: 'Masai Mara Migration Safari (4 Days)',
    description:
      `Witness the legendary Great Migration, spot the Big Five, and <br /> enjoy sundowners in the heart of Kenya's most famous reserve.`,
    imageUrl: '/maasaimara.png',
    rating: 4.8,
    readMoreUrl: '/places/1',
    imageUrls: ['/amboselli/amboselli.png', '/amboselli/amboselli1.jpg', '/amboselli/amboselli2.jpg'],
    fullContent: `
  <p class="mt-4 text-lg leading-relaxed">
    The <strong>Masai Mara National Reserve</strong> in Kenya is a world-renowned safari destination, offering visitors an unparalleled opportunity to witness African wildlife in its most raw and majestic form. It’s most famous for the <em>Great Migration</em>, an annual event where over 1.5 million wildebeest, zebras, and gazelles thunder across the Mara River in search of greener pastures.
  </p>
  
  <p class="mt-4 text-lg leading-relaxed">
    This 4-day luxury safari immerses you in the heart of the savannah. Your journey begins with a scenic drive or chartered flight from Nairobi, leading straight into the golden plains teeming with wildlife. On arrival, you’ll be welcomed into a luxury tented camp complete with en-suite bathrooms, gourmet dining, and evening bonfires under the stars.
  </p>
  
  <h3 class="text-xl font-semibold mt-6 mb-2">Safari Highlights</h3>
  <ul class="list-disc list-inside space-y-1 text-lg">
    <li>Witness the Great Migration from July to October — a once-in-a-lifetime spectacle.</li>
    <li>Daily game drives in open 4x4 vehicles, guided by expert local rangers.</li>
    <li>Opportunities to spot the <strong>Big Five</strong>: lion, elephant, buffalo, rhino, and leopard.</li>
    <li>Sundowner cocktails with panoramic views of the Mara’s vast landscape.</li>
    <li>Optional hot-air balloon safari over the plains at sunrise.</li>
  </ul>

  <p class="mt-4 text-lg leading-relaxed">
    The Masai Mara is also home to over 470 bird species and countless predators, including cheetahs and hyenas. Photographers and wildlife lovers alike will find no shortage of opportunities to capture breathtaking moments in the wild.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Cultural Encounters</h3>
  <p class="text-lg leading-relaxed">
    Beyond the wildlife, you’ll have the chance to interact with the indigenous <strong>Maasai people</strong>. Visit a traditional Maasai village, learn about their customs, dances, and daily life, and even try your hand at traditional spear throwing.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Best Time to Visit</h3>
  <p class="text-lg leading-relaxed">
    The best time to experience the Masai Mara is during the dry season, from <strong>June to October</strong>, when wildlife viewing is at its peak and the Great Migration is underway. However, the reserve offers incredible safari experiences year-round.
  </p>

  <blockquote class="border-l-4 pl-4 italic text-gray-700 mt-6">
    “The Masai Mara is not just a destination — it’s a transformational journey through one of the most stunning natural landscapes on Earth.”
  </blockquote>

  <p class="mt-6 text-lg leading-relaxed">
    Whether you're a first-time visitor or a seasoned traveler, the Masai Mara promises adventure, inspiration, and moments that will stay with you forever.
  </p>
`,

  },
{
    id: '2',
    name: 'Amboseli & Tsavo Combo (5 Days)',
    description:
      "Breathtaking views of Mount Kilimanjaro and red elephants of Tsavo in one scenic adventure. Tsavo boasts vast, rugged terrain and diverse animal species.",
    imageUrl: '/amboselli.png',
    rating: 4.5,
    readMoreUrl: '/places/2',
    imageUrls: ['/amboselli/amboselli.png', '/amboselli/amboselli1.jpg', '/amboselli/amboselli2.jpg'],
   fullContent: `
  <p class="mt-4 text-lg leading-relaxed">
    Embark on a captivating 5-day journey through two of Kenya’s most iconic wildlife destinations. This dual-park adventure blends the contrasting beauty of <strong>Amboseli National Park</strong>—famed for its towering views of <em>Mount Kilimanjaro</em>—with the wild, untamed charm of <strong>Tsavo National Park</strong>, Kenya’s largest and oldest protected area.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Amboseli National Park</h3>
  <p class="text-lg leading-relaxed">
    Amboseli is synonymous with stunning backdrops of Africa’s highest peak and large herds of free-roaming elephants. Game drives across its open plains reveal giraffes, zebras, cheetahs, and a rich variety of birdlife, especially near its seasonal swamps.
  </p>

  <ul class="list-disc list-inside space-y-1 text-lg mt-2">
    <li>Iconic views of Mount Kilimanjaro</li>
    <li>Close encounters with large elephant herds</li>
    <li>Home to lions, cheetahs, and hyenas</li>
    <li>Unique wetlands and acacia woodlands</li>
  </ul>

  <h3 class="text-xl font-semibold mt-6 mb-2">Tsavo National Park</h3>
  <p class="text-lg leading-relaxed">
    Divided into Tsavo East and Tsavo West, this massive park is famous for its vast wilderness, lava flows, and the famous “red elephants” who dust themselves in the park’s iron-rich soil. Explore the <strong>Mzima Springs</strong>, volcanic cones, and spot elusive leopards and rhinos in this rugged landscape.
  </p>

  <ul class="list-disc list-inside space-y-1 text-lg mt-2">
    <li>Red-dusted elephants and expansive savannahs</li>
    <li>Mzima Springs: crystal-clear pools with hippos and crocs</li>
    <li>Volcanic terrain and lava flows in Tsavo West</li>
    <li>Birdwatching with over 500 species</li>
  </ul>

  <h3 class="text-xl font-semibold mt-6 mb-2">Safari Experience</h3>
  <p class="text-lg leading-relaxed">
    Throughout your trip, you’ll enjoy game drives led by experienced guides, delicious local cuisine, and accommodations ranging from cozy safari lodges to luxury tented camps. The changing landscapes offer unique photo opportunities and memorable wildlife encounters.
  </p>

  <blockquote class="border-l-4 pl-4 italic text-gray-700 mt-6">
    “Amboseli gives you Kilimanjaro. Tsavo gives you wilderness. Together, they give you a safari that speaks to the soul.”
  </blockquote>

  <p class="mt-6 text-lg leading-relaxed">
    Whether you’re a seasoned traveler or first-time explorer, this Amboseli & Tsavo safari offers a powerful contrast of Kenya’s ecological wonders—making for a diverse, adventure-filled escape into the wild.
  </p>
`,

},
  {
    id: '3',
    name: 'Nairobi Day Tour',
    description:
      "Perfect for short stays — visit Nairobi National Park, the Giraffe Centre, Elephant Orphanage, and Karen Blixen Museum. Visitors see giraffes against the backdrop of the city skyline.",
    imageUrl: '/nairobipark.png',
    rating: 4.2,
    readMoreUrl: '/places/3',
    imageUrls: ['/nairobinp/nairobi1.jpeg', '/nairobinp/nairobi2.jpeg', '/nairobinp/nairobi3.jpeg', '/nairobinp/nairobi4.jpeg', '/nairobinp/nairobi5.jpeg'],
    fullContent: `
  <p class="mt-4 text-lg leading-relaxed">
    Perfect for travelers with limited time, this immersive full-day tour showcases the best of Nairobi’s natural beauty and cultural landmarks—all in a single unforgettable experience.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Nairobi National Park</h3>
  <p class="text-lg leading-relaxed">
    Start your morning with a game drive through <strong>Nairobi National Park</strong>, where rhinos, lions, giraffes, and zebras roam against the backdrop of the city skyline. It’s the only national park in the world located within a capital city—truly a rare gem.
  </p>

  <ul class="list-disc list-inside space-y-1 text-lg mt-2">
    <li>Black rhinos and big cats near the city center</li>
    <li>Over 400 bird species</li>
    <li>Acacia-dotted plains and riverine forest</li>
  </ul>

  <h3 class="text-xl font-semibold mt-6 mb-2">Giraffe Centre & Elephant Orphanage</h3>
  <p class="text-lg leading-relaxed">
    Continue your tour at the <strong>Giraffe Centre</strong>, where you can hand-feed endangered Rothschild giraffes from an elevated platform. Just nearby, visit the <strong>David Sheldrick Elephant Orphanage</strong>—home to orphaned baby elephants rescued from across Kenya.
  </p>

  <ul class="list-disc list-inside space-y-1 text-lg mt-2">
    <li>Close-up encounters with giraffes and elephants</li>
    <li>Educational talks on wildlife conservation</li>
    <li>Support local rescue and rehabilitation efforts</li>
  </ul>

  <h3 class="text-xl font-semibold mt-6 mb-2">Karen Blixen Museum</h3>
  <p class="text-lg leading-relaxed">
    End your day with a visit to the historic <strong>Karen Blixen Museum</strong>, former home of the famed “Out of Africa” author. Step into the colonial past as you explore her well-preserved farmhouse and beautiful gardens nestled at the foot of the Ngong Hills.
  </p>

  <blockquote class="border-l-4 pl-4 italic text-gray-700 mt-6">
    “A day in Nairobi reveals a world where wild meets urban, and heritage lives on through every encounter.”
  </blockquote>

  <p class="mt-6 text-lg leading-relaxed">
    From wildlife encounters to cultural treasures, this Nairobi day tour is the perfect blend of adventure and history—offering memories that last far longer than a single day.
  </p>
`,

  },
  {
    id: '4',
    name: 'Diani Beach Extension (3–5 Days)',
    description:
      "Unwind after your safari on Kenya's award-winning white-sand beaches with optional snorkeling or dhow cruises. This is a stunning stretch of white sand on Kenya's southern coast.",
    imageUrl: '/diani.png',
    rating: 4.7,
    readMoreUrl: '/places/4',
    imageUrls: ['/diani/diani1.jpeg', '/diani/diani2.jpeg', '/diani/diani3.jpeg', '/diani/diani.png'],
    fullContent: `
  <h3 class="text-2xl font-bold mt-4 mb-3">Tropical Bliss at Diani Beach</h3>

  <p class="text-lg leading-relaxed">
    <strong>Diani Beach</strong> is the perfect retreat after an adventurous safari. Located on Kenya’s southern coast, it features 
    <em>crystal-clear waters, powdery white sand, and lush palm trees</em>—a true slice of paradise.
  </p>

  <h4 class="text-xl font-semibold mt-6 mb-2">Relaxation & Water Adventures</h4>
  <p class="text-lg leading-relaxed">
    Spend your days soaking in the sun, sipping fresh coconut water, and enjoying the serene ambiance. For the more adventurous, the beach offers vibrant coral reefs perfect for snorkeling and scuba diving.
  </p>
  <ul class="list-disc list-inside space-y-1 text-lg mt-2">
    <li>Snorkeling and diving around coral gardens</li>
    <li>Traditional dhow cruises during sunset</li>
    <li>Kite surfing and paddleboarding options</li>
  </ul>

  <h4 class="text-xl font-semibold mt-6 mb-2">Excursions & Wildlife</h4>
  <p class="text-lg leading-relaxed">
    Beyond the beach, take an excursion to the <strong>Colobus Monkey Sanctuary</strong> or enjoy nature walks in the nearby forested areas.
  </p>

  <blockquote class="border-l-4 pl-4 italic text-gray-700 mt-6">
    “Whether you're unwinding with a book or chasing dolphins on the waves, Diani promises tranquility and thrill in equal measure.”
  </blockquote>

  <p class="mt-6 text-lg leading-relaxed">
    With a wide range of accommodations—from luxury resorts to boutique eco-lodges—Diani Beach is perfect for honeymooners, families, and solo travelers alike.
  </p>
`,

},
  {
    id: '5',
    name: 'Cultural Immersion Experience',
    description:
      "Spend a day or two with local Maasai — learn traditions, dance, and craft making in a respectful, guided setting. Get the chance to meet people known for their colorful clothing and beadwork.",
    imageUrl: '/maasai.png',
    rating: 4.3,
    imageUrls: ['/masaai/culture.jpg', '/masaai/maasai.jpeg', '/masaai/maasa2.jpeg', '/masaai/maasai3.jpeg'],
    readMoreUrl: '/places/5',
    fullContent: `
  <h3 class="text-2xl font-bold mt-4 mb-3">Immerse Yourself in Maasai Culture</h3>

  <p class="text-lg leading-relaxed">
    This authentic cultural experience takes you deep into the heart of the <strong>Maasai community</strong>. Under the guidance of local elders and community leaders, you’ll participate in age-old traditions that continue to define the Maasai way of life.
  </p>

  <h4 class="text-xl font-semibold mt-6 mb-2">Hands-On Cultural Experiences</h4>
  <ul class="list-disc list-inside space-y-1 text-lg">
    <li>Join in vibrant traditional dances</li>
    <li>Learn beadwork and craft techniques passed through generations</li>
    <li>Explore the customs, rituals, and values of Maasai society</li>
  </ul>

  <p class="mt-4 text-lg leading-relaxed">
    Your visit is not just educational—it directly supports <strong>community-led tourism</strong> and helps preserve indigenous heritage. All activities are conducted with full cultural sensitivity and mutual respect.
  </p>

  <blockquote class="border-l-4 pl-4 italic text-gray-700 mt-6">
    “Leave with more than photos—take home stories, wisdom, and a genuine connection to one of Africa’s most resilient tribes.”
  </blockquote>

  <p class="mt-6 text-lg leading-relaxed">
    Whether you're a cultural enthusiast or a curious traveler, this enriching encounter will deepen your appreciation for Kenya’s diversity and the enduring legacy of the Maasai people.
  </p>
`,

  }
];
