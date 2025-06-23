import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
import { HeartHandshake, Target } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Arivra</title>
        <meta
          name="description"
          content="Learn about Arivra, our vision and mission to empower self-learners."
        />
      </Helmet>
      <Navbar />
      <div className="dark:bg-gray-900 dark:text-gray-100 bg-slate-100 text-gray-800  text-Black px-6  py-12 font-sans">
        <section className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-2 mb-5">
            <HeartHandshake className="w-7 h-7 text-pink-500" />
             About Us
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-100">
            Arivra was never just a project, it was a promise. It started with a
            simple goal — to build something meaningful from scratch, with no
            team, no resources, just raw passion and a dream. Arivra stands for
            everyone who's ever felt lost in tech tutorials, confused by
            scattered resources, or unsure where to start. It brings together
            everything you need to <strong>Learn, Build, and Evolve </strong> in
            one place, step by step.
          </p>
        </section>

        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-xl font-semibold flex items-center justify-center gap-2 mt-6 mb-2 dark:bg-gray-900 dark:text-gray-100 bg-slate-100 text-gray-800 ">
            <Target className="w-5 h-5 text-green-400" />
            Our Mission
          </h1>
          <p className="text-gray-600 dark:text-gray-100 text-md">
            We believe in empowering developers with tools, guidance, and
            community. Build a platform where learners become creators. No long
            lectures, just pure concise learning. Real projects, real growth,
            and a community that evolves together.
          </p>
        </section>

        <section className="max-w-4xl mx-auto text-center mb-5">
          <p className="text-blue-600 dark:text-blue-300 text-sm italic">
            <strong>we created this for you with love❤️</strong>
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
