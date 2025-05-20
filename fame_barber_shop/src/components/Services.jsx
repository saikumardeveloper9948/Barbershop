import React from 'react';

const Services = () => {
  const servicesList = [
    {
      number: '01',
      title: 'Beard Grooming',
      description: 'Expert shaping and maintenance for a perfect beard.',
    },
    {
      number: '02',
      title: 'Classic Haircut',
      description: 'Timeless cuts tailored to your style.',
    },
    {
      number: '03',
      title: 'Facial-Shaves',
      description: 'Smooth and refreshing facial shaves.',
    },
    {
      number: '04',
      title: 'Beard Styling',
      description: 'Shape and style your beard to perfection.',
    },
  ];

  return (
    <section className="py-16 bg-slate-200 text-black dark:bg-slate-800 dark:text-white">
      <div className="container mx-auto px-4">
      <div className="text-center py-3 ">
              <h2 className="text-4xl text-center font-bold mt-2 mb-4 dark:text-amber-500">We Offer a Wide Range of Services</h2>
              <p className="text-gray-700 text-center px-20 dark:text-white">Our expert barbers specialize in classic, modern, and custom cuts for all hair types and textures. Whether it's a timeless style or the latest trend, we'll ensure you</p>
            </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Services List */}
          <div className="w-full md:w-1/2 space-y-8">
           

            <div className="space-y-6">
              {servicesList.map((service, index) => (
                <div key={index} className="border-b border-gray-700 pb-4 dark:border-gray-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-black dark:text-amber-500 font-bold text-xl mt-1">
                      {service.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold dark:text-amber-300 text-black mb-1">{service.title}</h3>
                      <p className="text-purple-800 text-sm dark:text-gray-100">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5568407/pexels-photo-5568407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Barber working on a client"
                className="rounded-lg shadow-lg"
              />
              {/* Decorative orange shape */}
              <div className="absolute -bottom-4 -right-0 w-24 h-24 bg-amber-500 rounded-lg transform rotate-45 z-0 opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 