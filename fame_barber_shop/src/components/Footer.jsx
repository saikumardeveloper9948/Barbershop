import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 dark:bg-gray-900 dark:text-gray-400">
      <div className="container mx-auto px-4">
        {/* First Row - Brand Info and Newsletter */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:w-1/2 space-y-4">
            <div className="text-2xl font-bold text-amber-500">
              FamaBarber
            </div>
            <p className="text-gray-400 dark:text-gray-500">
              Welcome to FamaBarber, where classic tradition meets contemporary style. Our team of skilled barbers is dedicated to providing top-notch grooming services.
            </p>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/2 space-y-4">
            <h4 className="text-white font-semibold dark:text-gray-300">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 dark:bg-amber-600 dark:hover:bg-amber-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Second Row - Main Pages and Follow Us side by side */}
        <div className="grid grid-cols-2 gap-8">
          {/* Main Pages */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-3 dark:text-gray-300">Main Pages</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 dark:text-gray-500 dark:hover:text-amber-500">Homepage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 dark:text-gray-500 dark:hover:text-amber-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 dark:text-gray-500 dark:hover:text-amber-500">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 dark:text-gray-500 dark:hover:text-amber-500">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 dark:text-gray-500 dark:hover:text-amber-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-3 dark:text-gray-300">Follow Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/919948638817?text=Send%20me%20the%20location"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 text-2xl transition duration-300"
              >
                <i className="fab fa-whatsapp mr-2"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 text-2xl transition duration-300"><i className="fab fa-facebook-f mr-2"></i></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 text-2xl transition duration-300"><i className="fab fa-twitter mr-2"></i></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 text-2xl transition duration-300"><i className="fab fa-instagram mr-2"></i></a>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-200 text-sm dark:border-gray-800 dark:text-gray-100">
          © {new Date().getFullYear()} FamaBarber. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;