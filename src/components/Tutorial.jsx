import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const AllTutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/tutorial/all");
        setTutorials(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching tutorials", err);
        setLoading(false);
      }
    };

    fetchTutorials();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Tutorials | Arivra</title>
        <meta
          name="description"
          content="Explore coding tutorials with Q&A and code snippets on Arivra."
        />
      </Helmet>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 mb-10 p-5 rounded shadow dark:bg-gray-800 dark:text-gray-100 bg-slate-50 text-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Tutorials</h2>

        {loading ? (
          <p>Loading tutorials...</p>
        ) : tutorials.length === 0 ? (
          <p className="text-gray-600">No tutorials available right now.</p>
        ) : (
          <div className="accordion" id="accordionExample">
            {tutorials.map((tutorial, index) => (
              <div
                className="accordion-item border rounded mb-3"
                key={tutorial._id}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button px-4 py-3 font-semibold text-left w-full ${
                      openIndex === index ? "" : "collapsed"
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    Q{index + 1}. {tutorial.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="accordion-body px-2 py-3">
                    <p className="mb-2 text-blue-900 dark:text-blue-400 whitespace-pre-line"> {tutorial.answer}</p>

                    {tutorial.code && (
                      <div className="relative bg-gray-200  p-3 rounded font-mono text-sm mx-h-96 overflow-auto max-w-full">
                        <button
                          onClick={() =>
                            navigator.clipboard.writeText(tutorial.code)
                          }
                          className="absolute top-2 right-2 text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 z-10"
                        >
                          CopyCode
                        </button>
                        <pre className="whitespace-pre-wrap text-sm min-w-full  text-gray-900">
                          {tutorial.code}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllTutorials;
