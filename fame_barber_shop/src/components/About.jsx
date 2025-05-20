import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-green-300 dark:bg-slate-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-800  backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50 dark:bg-gray-100/50 dark:border-gray-300/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-6 text-center md:text-left">
              <div>
                <h2 className="text-2xl font-bold text-white dark:text-amber-500 mb-2">
                  Barber Shop
                </h2>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4
                            ? "text-amber-400"
                            : "text-gray-400 dark:text-white"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-amber-500 font-semibold">4.6</span>
                  <span className="text-gray-400 dark:text-white">
                    (116+ reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-900/50 px-6 py-3 rounded-full border border-gray-700/50 dark:bg-gray-200/50 dark:border-gray-300/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium dark:text-green-600">
                  Open
                </span>
              </div>
              <span className="text-gray-400 dark:text-gray-600">⋅</span>
              <span className="text-gray-300 dark:text-gray-700">
                Closes 7 pm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
