const WhyChooseUs = () => {
  const reasons = [
    {
      text: "Clean conversation and feeling refreshed.",
    },
    {
      text: "Enjoy comfortable atmosphere.",
    },
    {
      text: "Your health and safety are our top priority.",
    },
    {
      text: "We provide luxury or quality of our services.",
    },
  ];

  return (
    <section className="py-16 bg-pink-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-amber-500">
            Why Choose Us.....
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Our expert barbers specialize in classic, modern, and custom cuts
            for all hair types and textures. Whether it's a timeless style or
            the latest trend, we'll ensure you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[400px]">
            <div className="absolute inset-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQ9CdCmo4tWdlNOhRPmtfKxcQNLapPd4wNQ&s"
                alt="Barber shop interior"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />

              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500 rounded-lg transform rotate-45 z-0 opacity-70"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Comfortable and Relaxing Environment
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe that grooming is more than just a service—it's an
              experience. Here's why our clients trust us to keep them looking
              their best.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    {reason.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
