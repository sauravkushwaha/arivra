import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
import {Link2} from"lucide-react";

const references = [
  {
    category: "Frontend (React, Tailwind, Vite)",
    links: [
      { name: "React Official Docs", url: "https://react.dev/" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
      { name: "Vite", url: "https://vitejs.dev/" },
      { name: "React Hook Form", url: "https://react-hook-form.com/" },
    ],
  },
  {
    category: "Backend (Node, Express, JWT)",
    links: [
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "Express.js", url: "https://expressjs.com/" },
      { name: "JWT.io", url: "https://jwt.io/" },
      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "Mongoose", url: "https://mongoosejs.com/" },
    ],
  },
  {
    category: "Deployment & Tools",
    links: [
      { name: "Netlify", url: "https://www.netlify.com/" },
      { name: "Render", url: "https://render.com/" },
      { name: "GitHub", url: "https://github.com/" },
      { name: "Postman", url: "https://www.postman.com/" },
    ],
  },
  {
    category: "Learning Platforms",
    links: [
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
      { name: "Frontend Mentor", url: "https://www.frontendmentor.io/" },
    ],
  },
];

const Reference = () => {
  return (
    <>
      <Helmet>
        <title>Reference | Arivra</title>
        <meta
          name="description"
          content="Admin panel to add new tutorials and manage Arivra content."
        />
        <meta
          name="keywords"
          content=" reference, Admin, Post tutorial, Add content, Arivra backend"
        />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-slate-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12 px-6">
        {/* <h2 className="text-3xl font-bold text-center mb-8">
          Developer Reference Links
        </h2> */}
        <div className="max-w-4xl mx-auto space-y-10">
          {references.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold mb-4">
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <span className="inline-flex items-center gap-1">
                        <Link2 className="w-4 h-4" />
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reference;
