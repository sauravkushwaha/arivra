import React from "react";

const highlights = [
  {
    title: "Web Development",
    desc: "Web Development is the process of building and maintaining websites or web applications. It includes frontend (client-side design with HTML, CSS, JavaScript) and backend (server-side logic, databases, APIs). Popular frameworks include React, Node.js, and Django. The goal is to create fast, secure, and user-friendly web experiences.",
    img: "/web.PNG", 
    reverse: false,
  },
  {
    title: "Machine Learning & AI",
    desc: "Machine Learning (ML) is a subset of AI that enables systems to learn from data and improve over time without explicit programming. It uses algorithms to identify patterns, make predictions, or automate decisions. Applications range from recommendation systems to self-driving cars.",
    img: "/MLAI.jpg",
    reverse: true,
  },
  {
    title: "Data Structures & Algorithms",
    desc: "Data Structures and Algorithms (DSA) are the building blocks of efficient programming. Data structures organize and store data, while algorithms define step-by-step processes to solve problems. Mastering DSA improves code performance and scalability. Key concepts include arrays, trees, sorting, and searching algorithms.",
    img: "/alg.jpg",
    reverse: false,
  },
];

const Highlights = () => {
  return (
    <section className="bg-slate-100 dark:bg-gray-900 py-12 px-4 sm:px-6 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Learn. Build. Evolve.</h2>
      <div className="space-y-16 max-w-6xl mx-auto">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${
              item.reverse ? "md:flex-row-reverse" : ""
            } items-center gap-6 md:gap-8 px-2`}
          >
            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-lg leading-relaxed">{item.desc}</p>
            </div>

            {/* Image - Fixed dimensions with cropping */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full h-64 sm:h-72 overflow-hidden rounded-md shadow-sm">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;