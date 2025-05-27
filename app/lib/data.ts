import { BiGlobe, BiTrip } from "react-icons/bi";
import { RiCustomerService2Line, RiServiceLine} from "react-icons/ri";
import { SiHiltonhotelsandresorts } from "react-icons/si";
import { MdOutlinePriceCheck } from "react-icons/md";



export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/about",
  },
  {
    name: "Services",
    hash: "/services",
  },
  {
    name: "Places",
    hash: "/places",
  },
  {
    name: "Hotels",
    hash: "/hotels",
  },
  {
    name: "News",
    hash: "/news",
  },
] as const;

export type Link = typeof links[number];


export const accordionData = [
  {
    question: "What is included in your safari packages?",
    idx: 0,
    answer:
      "Our packages typically include accommodation, park entry fees, transportation in a safari vehicle, an English-speaking guide, and all meals during the tour. Some packages also include airport transfers and bottled water."
  },
  {
    question: "Do you offer custom or private tours?",
    idx: 1,
    answer:
      "Yes! We specialize in tailor-made tours for individuals, families, and groups. Let us know your preferences, and we’ll create a personalized itinerary."
  },
  {
    question: "When is the best time to visit Kenya?",
    idx: 2,
    answer:
      "The best wildlife viewing is from June to October (dry season), while the Great Migration is usually seen in the Masai Mara between July and September."
  },
  {
    question: "Is it safe to travel in Kenya?",
    idx: 3,
    answer:
      "Yes, Kenya is a popular tourist destination. We prioritize safety, use vetted accommodations, and provide experienced local guides throughout your trip."
  },
  {
    question: "What should I pack for a safari?",
    idx: 4,
    answer:
      "Light, breathable clothing in neutral colors, a hat, sunglasses, sunscreen, comfortable shoes, a camera, binoculars, and personal medication. We’ll send a full packing list before your tour."
  },
  {
    question: "Do you cater to dietary restrictions?",
    idx: 5,
    answer:
      "Absolutely. Please inform us in advance, and we’ll make sure your meals meet your needs."
  },
  {
    question: "Do I need a visa to enter Kenya?",
    idx: 6,
    answer:
      "Yes, most travelers need an eVisa which can be obtained online before arrival. We’ll guide you through the process if needed."
  },
  {
    question: "What type of vehicles do you use?",
    idx: 7,
    answer:
      "We use 4x4 safari vehicles with pop-up roofs for excellent wildlife viewing and photography."
  },
  {
    question: "How do I book a tour?",
    idx: 8,
    answer:
      "You can book directly through our website, contact us by email or phone, or fill out our custom tour request form."
  },
  {
    question: "Is travel insurance required?",
    idx: 9,
    answer:
      "We strongly recommend purchasing comprehensive travel insurance that covers health, trip cancellations, and emergencies."
  }
];

 export const services = [
    {
      icon: BiGlobe,
      title: "Personalized Matching",
      description: "Our unique matching system lets you find just the tour you want for your next holiday.",
    },
    {
      icon: BiTrip,
      title: "Wide Variety of Tours",
      description: "We offer a wide variety of personally picked tours with destinations all over the globe.",
    },
    {
      icon: RiServiceLine,
      title: "Highly Qualified Service",
      description: "Our tour managers are qualified, skilled, and friendly to bring you the best service.",
    },
    {
      icon: RiCustomerService2Line,
      title: "24/7 Support",
      description: "You can always get professional support from our staff 24/7 and ask any question you have.",
    },
    {
      icon: SiHiltonhotelsandresorts,
      title: "Handpicked Hotels",
      description: "Our team offers only the best selection of affordable and luxury hotels to our clients.",
    },
    {
      icon: MdOutlinePriceCheck,
      title: "Best Price Guarantee",
      description: "If you find tours that are cheaper than ours, we will compensate the difference.",
    }
  ];


  export const slides = [
  {
    image: '/giraffe.png',
    title: 'The Heart of Kenya',
    subtitle: "With its exceptional natural beauty, Croatia’s first national park has always attracted nature lovers. Plitvice lakes, with its outstanding universal value, are inscribed onto the UNESCO World Heritage List.",
  },
  {
    image: '/lions.png',
    title: 'Explore the Wild',
    subtitle: 'Discover the hidden trails, crystal lakes, and wildlife of untouched forests.',
  },
  {
    image: '/leopard2.png',
    title: 'Journey into Nature',
    subtitle: 'Experience the ultimate getaway surrounded by breathtaking landscapes.',
  },
];