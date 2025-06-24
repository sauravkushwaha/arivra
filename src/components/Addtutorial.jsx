import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
import { postTutorial } from "../utils/api";

const AddTutorial = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [code, setCode] = useState(""); // ✅ New state for code
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("❌ Please login first to add a tutorial.");
      return;
    }

    try {
       await postTutorial({ question, answer, code }, token);


      setMessage("✅ Tutorial added successfully!");
      setQuestion("");
      setAnswer("");
      setCode(""); 
    } catch (err) {
      // console.error(err);
      setMessage("❌ Failed to add tutorial. Only admin can add.");
    }
  };

  return (
    <>
      <Navbar />
      <Helmet>
  <title>Post Tutorial | Arivra Admin</title>
  <meta name="description" content="Admin panel to add new tutorials and manage Arivra content." />
  <meta name="keywords" content="Admin, Post tutorial, Add content, Arivra backend" />
</Helmet>
      <div className="max-w-md mx-auto mt-10 mb-10 p-6 dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Add New Tutorial</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            type="text"
            placeholder="Enter question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="Enter answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="Enter code (optional)"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border p-2 rounded font-mono text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Tutorial
          </button>
          {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddTutorial;