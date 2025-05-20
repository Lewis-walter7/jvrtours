import places from "../db/places.json"
import PlacesCarousel from "./placesCarousel";

export default function PlacesPage() {
  return (
    <div className="min-h-screen bg-gray-100 mt-10 w-full">
      <header className="bg-green-800 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Explore Our Safari Adventures</h1>
        <p className="mt-2 text-lg">Discover Kenya’s iconic destinations</p>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="w-full">
          <PlacesCarousel
              places={places.places} />
        </section>
      </main>
    </div>
  );
}