import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card1";
import CourseName from "./CourseName";
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Courses = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mt-5 mb-5 ">
        <NavLink to="/courses/html">
          <Card
            title="HTML"
            imageSrc="/HTML5.jpg"
            description="HTML - Hypertext Markup Language"
          />
        </NavLink>
        <NavLink to="/courses/css">
          <Card
            title="CSS"
            imageSrc="/css.jpg"
            description="CSS - Cascading Style Sheets "
          />
        </NavLink>
        <NavLink to="/courses/javascript">
          <Card
            title="JavaScript"
            imageSrc="/javascript.jpg"
            description="JavaScript -  scripting language"
          />
        </NavLink>
        <NavLink to="/courses/react">
          <Card
            title="React"
            imageSrc="/re.png"
            description="Front-end JavaScript Library"
          />
        </NavLink>
        <NavLink to="/courses/express">
          <Card
            title="Express JS"
            imageSrc="/express.png"
            description="Express - web application framework"
          />
        </NavLink>
        <NavLink to="/courses/mongodb">
          <Card
            title="MongoDB"
            imageSrc="/mongo.png"
            description="Document-oriented database program."
          />
        </NavLink>
        <NavLink to="/courses/dsa">
          <Card
            title="DSA"
            imageSrc="/dsalgorithm.jpg"
            description="Data structures and algorithms"
          />
        </NavLink>
        <NavLink to="/courses/cpp">
          <Card
            title="C++"
            imageSrc="/Cplus_plus.jpg"
            description="C++ Programming language"
          />
        </NavLink>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
