// src/components/SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase();
  const [tutorials, setTutorials] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/tutorial/all"); // your backend URL
        const data = await res.json();
        setTutorials(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTutorials();
  }, []);

  useEffect(() => {
    if (query && tutorials.length > 0) {
      const result = tutorials.filter((item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
      );
      setFiltered(result);
    }
  }, [query, tutorials]);

  return (
    <>
    <Helmet>
        <title>Courses | Arivra</title>
        <meta
          name="description"
          content="Explore our web development, ML, and DSA courses at Arivra."
        />
        <meta
          name="keywords"
          content="Courses, Web Dev, Machine Learning, DSA, Arivra"
        />
      </Helmet>
      <Navbar />
    <section className="min-h-screen bg-slate-50 dark:bg-gray-900 p-4 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-4">Search Results for: {query}</h2>
      {filtered.length > 0 ? (
        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <div key={idx} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <p className="mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching tutorials found.</p>
      )}
    </section>
    </>
  );
};

export default SearchResults;