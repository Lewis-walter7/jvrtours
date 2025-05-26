import { services } from "@/app/lib/data";
import ServiceCarousel from "./ServiceCarousel";



export default function Service() {

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">OUR SERVICES</h2>
        <div className="w-full">
          <ServiceCarousel services={services} />
        </div>  
      </div>
    </section>
  );
}