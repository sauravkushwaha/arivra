import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const HTMLCourse = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarOpen]);

  return (
    <>
    <Helmet>
  <title>HTML courses | Arivra</title>
  <meta name="description" content="Explore our web development, ML, and DSA courses at Arivra." />
  <meta name="keywords" content="html, HTML, Html, html course, Courses, Web Dev, Machine Learning, DSA, Arivra" />
</Helmet>
    <div className="flex flex-col md:flex-row min-h-screen relative dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800">
      {/* Mobile Hamburger - unchanged except ref */}
      <div className="md:hidden p-4 flex justify-between items-center shadow dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800">
        <h2 className="text-xl font-semibold dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800">HTML Course</h2>
        <button
          className="text-2xl focus:outline-none"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>

      {/* Sidebar - only modified classes and added close button */}
      <aside
        ref={sidebarRef}
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 w-3/4 md:w-1/4 p-4 fixed md:relative inset-y-0 left-0 z-10 transition-transform duration-200 bg-gray-300 dark:bg-gray-800 `}
      >
        {/* Only added this close button */}
        <button 
          onClick={closeSidebar}
          className="md:hidden absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-4 bg-gray-300 dark:bg-gray-800">HTML Basics</h2>
        <ul className="space-y-3 text-blue-600 ">
          <li><a href="#introduction" className="hover:underline" onClick={closeSidebar}>Introduction</a></li>
          <li><a href="#tags" className="hover:underline" onClick={closeSidebar}>Tags</a></li>
          <li><a href="#attributes" className="hover:underline" onClick={closeSidebar}>Attributes</a></li>
          <li><a href="#forms" className="hover:underline" onClick={closeSidebar}>Forms</a></li>
          <li><a href="#lists" className="hover:underline" onClick={closeSidebar}>Lists</a></li>
          <li><a href="#tables" className="hover:underline" onClick={closeSidebar}>Tables</a></li>
        </ul>
      </aside>

      {/* Main Content - completely unchanged */}
      <main className="w-full md:w-3/4 p-6">
        <h1 className="text-2xl font-semibold mb-1 dark:text-gray-50 text-gray-900">HTML Course</h1>
        <p className="mb-5 dark:text-gray-50 text-gray-900">
          Welcome to the HTML course! This section covers basic HTML syntax, common tags, structure of a webpage and form elements.
        </p>

        <section id="introduction" className="mb-6">
          <h2 className="text-xl font-bold dark:text-gray-50 text-gray-900">Introduction</h2>
          <p className="dark:text-gray-200 text-gray-900">HTML stands for HyperText Markup Language...</p>
        </section>

        <section id="tags" className="mb-6">
          <h2 className="text-xl font-bold dark:text-gray-50 text-gray-900">Tags</h2>
          <p className="dark:text-gray-200 text-gray-900">Tags in HTML are used to structure content...</p>
        </section>

        <section id="attributes" className="mb-6">
          <h2 className="text-xl font-bold dark:text-gray-50 text-gray-900">Attributes</h2>
          <p className="dark:text-gray-200 text-gray-900">Attributes provide additional information about HTML elements...</p>
        </section>

        <section id="forms" className="mb-6">
          <h2 className="text-xl font-bold dark:text-gray-50 text-gray-900">Forms</h2>
          <p className="dark:text-gray-200 text-gray-900">Forms are used to collect user input...</p>
        </section>
        <section id="forms" className="mb-6">
          <h2 className="text-xl font-bold dark:text-gray-50 text-gray-900">Lists</h2>
          <p className="dark:text-gray-200 text-gray-900">HTML lists allow web developers to group a set of related items in lists.</p>
        </section>
        <section id="forms" className="mb-6">
          <h2 className="text-xl font-bold dark:text-gray-50 text-gray-900">Table</h2>
          <p className="dark:text-gray-200 text-gray-900">HTML tables allow web developers to arrange data into rows and columns.</p>
        </section>
      </main>
    </div>
    </>
  );
};

export default HTMLCourse;