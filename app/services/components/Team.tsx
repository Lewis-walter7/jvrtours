import Image from 'next/image';
import { teamMembers } from '../data/data';

export default function TeamSection() {
  return (
   <section className="py-16 bg-white text-center w-[80%] mx-auto">
      <h2 className="text-3xl font-bold mb-12">Different People — One Mission</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="relative pt-16 bg-gray-50 p-6 rounded-xl mt-17 shadow transition-transform transform hover:-translate-y-2 hover:shadow-lg group"
          >
            {/* Image */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={member.image}
                alt={member.name}
                className="w-30 h-30 rounded-full object-cover border-4 border-white shadow group-hover:border-[#59b4a9] transition-all duration-300"
              />
            </div>
            {/* Text */}
            <h3 className="font-semibold text-lg text-gray-900 mt-4">{member.name}</h3>
            <p className="text-sm text-teal-500 mt-1">{member.role}</p>
            <p className="text-sm text-gray-700 mt-2">{member.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}