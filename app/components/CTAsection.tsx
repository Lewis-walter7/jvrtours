import Link from 'next/link';

export default function CTASection() {
  return (
    <section
      className="relative bg-cover bg-center py-16 text-white"
      style={{
        backgroundImage: "url('/leopard.png')", 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          First-class Impressions <br /> are Waiting for You!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Our agency offers travelers various tours and excursions with destinations <br />
          all over the world. Browse our website to find your dream tour!
        </p>
        <Link href="/book">
          <button className="bg-cyan-500 text-white px-6 py-3 rounded hover:bg-cyan-600">
            Book a Tour Now
          </button>
        </Link>
      </div>
    </section>
  );
}