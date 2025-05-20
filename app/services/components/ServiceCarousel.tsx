import React from 'react'
import { Service } from './service';

interface ServicearouselProps {
  services: Service[];
}

const ServiceCarousel = ({services}: ServicearouselProps) => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {services.map((service, index) => (
             <div className="max-w-sm p-8 min-h-[130px] rounded-xl shadow-lg bg-white/30 border border-white/50 backdrop-blur-md">
                <div className="flex items-start space-x-4">
                    {<service.icon size={80} />}
                    <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="mt-2 text-sm text-gray-800">
                        {service.description}
                    </p>
                    </div>
                </div>
            </div>
          ))}
    </div>
  )
}

export default ServiceCarousel