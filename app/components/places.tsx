import {places} from "../db/places"
import PlacesCarousel from "./placesCarousel";

export default function PlacesPage() {
  return (
    <div className="min-h-[85vh] bg-gray-100 w-full">
      <header className="bg-gray-400 text-white py-12 text-center">
        <h1 className="text-4xl font-bold text-black">Explore Our Safari Adventures</h1>
        <p className="mt-2 text-lg text-black">Discover Kenya’s iconic destinations</p>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <section className="w-full">
          <PlacesCarousel
              places={places} />
        </section>
      </main>
    </div>
  );
}