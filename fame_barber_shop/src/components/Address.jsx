import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Address = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-pink-300 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-amber-600 sm:text-4xl">
            Visit Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Find us at our convenient location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg dark:drop-shadow-[0_0_10px_#3b82f6] drop-shadow-[0_0_10px_] dark:border border-purple-600">
            <div className="">
              <div className="flex gap-4 py-2">
                <FaMapMarkerAlt className="h-6 w-6 text-blue-600 dark:text-amber-500 mt-1" />

                <p className=" text-gray-600 dark:text-gray-300">
                  123 Barber Street Downtown District City, State 12345
                </p>
              </div>

              <div className="flex py-2 gap-4">
                <FaPhone className="h-6 w-6 text-blue-600 dark:text-amber-500 mt-1" />

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  +1 (123) 456-7890
                </p>
              </div>

              <div className="flex py-2 gap-4">
                <FaEnvelope className="h-6 w-6 text-blue-600 dark:text-amber-500 mt-1" />

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  info@famebarbershop.com
                </p>
              </div>

              <div className="flex py-2 gap-4">
                <FaClock className="h-6 w-6 text-blue-600 dark:text-amber-500 mt-1" />
                <div className="text-start">
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Monday - Friday: 9:00 AM - 7:00 PM
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Saturday: 10:00 AM - 6:00 PM
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg drop-shadow-[0_0_10px_]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
