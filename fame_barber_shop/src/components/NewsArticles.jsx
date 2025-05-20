import React from 'react';

const NewsArticles = () => {
  const articles = [
    {
      image: 'https://www.beautster.com/blog/wp-content/uploads/2020/11/dye-your-hair-several-times.jpg',
      category: 'Grooming',
      title: 'How to maintain vibrant hair color between salon visits.',
      date: '25 October, 2024',
      author: 'John Doe',
    },
    {
      image: 'https://img.freepik.com/free-photo/working-process-barbershop_1163-2025.jpg',
      category: 'Barber Tips',
      title: 'Barber vs Salon, which is right for your haircut needs.',
      date: '28 October, 2024',
      author: 'Jane Smith',
    },
    {
      image: 'https://cdn.bgfashion.net/img19/BeardStyle_2.jpg',
      category: 'Beard Care',
      title: 'Essential Beard Grooming tips for a sleek look.',
      date: '3 November, 2024',
      author: 'Mike Johnson',
    },
    {
      image: 'https://media.allure.com/photos/67411e46c48f68cf66efadde/16:9/w_3488,h_1962,c_limit/allure-hair-trend-2024-3%20copy%20(1).jpg',
      category: 'Hair Trends',
      title: 'Top hair trends for 2025 you need to know.',
      date: '10 November, 2024',
      author: 'Emily Hart',
    },
    {
      image: 'https://www.impactcosmetic.com/wp-content/uploads/2023/06/6-Reasons-Why-Men-Should-Get-Facials.jpg',
      category: 'Skincare',
      title: 'Why facials are just as important for men.',
      date: '14 November, 2024',
      author: 'Sophie Lee',
    },
    {
      image: 'https://content.jdmagicbox.com/comp/def_content/hair-spas/7-hair-spas-7-69g4b.jpg',
      category: 'Salon Talk',
      title: 'How to prepare for your next salon appointment.',
      date: '18 November, 2024',
      author: 'Chris Adams',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mt-2 text-black dark:text-amber-500">News & Articles</h2>
          </div>
         
        </div>

        <div className="relative overflow-hidden">
          <div className="animate-marquee-reverse ">
            <div className="inline-flex space-x-8">
              {articles.map((article, index) => (
                <div key={index} className="w-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-500 transition-colors duration-300">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">{article.category}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800 dark:text-white">{article.title}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Browse All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsArticles; 