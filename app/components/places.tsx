import places from "../db/places.json"
import PlacesCarousel from "./placesCarousel";

export default function PlacesPage() {
  return (
    <div className="min-h-screen bg-gray-100 mt-10">
      <header className="bg-green-800 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Explore Our Safari Adventures</h1>
        <p className="mt-2 text-lg">Discover Kenya’s iconic destinations</p>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.places.map((place) => (
            <div
              key={place.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{place.name}</h2>
                <p className="mt-2 text-gray-600">{place.description}</p>
                <div className="mt-4 flex items-center">
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
                </div>
              </div>
            </div>
          ))}
        </section>
        {/* <section className="md:hidden">
          <PlacesCarousel places={places} />
        </section> */}
      </main>
    </div>
  );
}