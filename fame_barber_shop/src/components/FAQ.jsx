import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does FamaBarber offer?",
      answer:
        "We offer a wide range of services including classic haircuts, beard grooming and styling, facial shaves, and more. Check out our services section for a full list.",
    },
    {
      question: "What is FamaBarbers cancellation policy?",
      answer:
        "We understand that plans can change. If you need to cancel or reschedule, please do so at least 24 hours before your appointment to avoid any cancellation fees.",
    },
    {
      question: "Can I request a specific barber?",
      answer:
        "Yes, when booking your appointment, you can request your preferred barber based on availability. All our barbers are highly skilled, ensuring you get top-notch service every time.",
    },
    {
      question: "How long does a typical haircut take?",
      answer:
        "A standard haircut typically takes between 30 to 45 minutes, depending on the complexity of the style and individual needs.",
    },
    {
      question: "Do you offer services for children?",
      answer:
        "Yes, we provide haircut services for children of all ages. Our barbers are experienced in working with kids to make the experience comfortable.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including cash, major credit cards (Visa, Mastercard, American Express), and mobile payment options.",
    },
    {
      question: "Can I get a haircut and beard trim combo?",
      answer:
        "Absolutely! We offer combination services for haircuts and beard trims at a special rate. You can select this option when booking.",
    },
    {
      question: "How do I contact FamaBarber more questions?",
      answer:
        "You can contact us via phone, email, or by visiting our shop during business hours. Our contact information is available on the Contact Us page.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white text-gray-800 dark:bg-black dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-500 mt-2 dark:text-white">
            Frequently Asked Question?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 dark:text-gray-400">
            Find answers to the most common questions about our services,
            booking, and policies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-6 dark:border-gray-700"
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-amber-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-700 dark:text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
