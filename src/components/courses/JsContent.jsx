import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const JavaScriptCourse = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close sidebar when clicking outside or on links
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        !sidebarRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarOpen]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
    <Helmet>
  <title>JavaScript courses | Arivra</title>
  <meta name="description" content="Explore our web development, ML, and DSA courses at Arivra." />
  <meta name="keywords" content="JavaScript, JS, js, JavaScriptcourse, Courses, Web Dev, Machine Learning, DSA, Arivra" />
</Helmet>
    <div className="flex flex-col md:flex-row min-h-screen relative dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800">
      {/* Mobile Hamburger */}
      <div className="md:hidden p-4 flex justify-between items-center shadow dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800 sticky top-0 z-10">
        <h2 className="text-xl font-semibold">JavaScript Course</h2>
        <button
          ref={hamburgerRef}
          className="text-2xl focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 w-3/4 md:w-1/4 bg-gray-300 dark:bg-gray-800 p-4 fixed inset-y-0 left-0 z-20 transition-transform duration-300 ease-in-out shadow-lg md:shadow-none md:relative`}
      >
        {/* Close button (X) - Mobile only */}
        <button
          onClick={closeSidebar}
          className="absolute top-4 right-4 text-xl md:hidden hover:text-gray-700"
          aria-label="Close menu"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-4 mt-2">JavaScript Basics</h2>
        <ul className="space-y-3 text-blue-600">
          {['introduction', 'variables', 'functions', 'arrays', 'objects', 'dom'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:underline block capitalize"
                onClick={closeSidebar}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6">
        <h1 className="text-2xl font-semibold mb-4">JavaScript Course</h1>
        <p className="mb-4">
          Welcome to the JavaScript course! This section introduces key JavaScript concepts for web development.
        </p>

        {[
          { id: 'introduction', text: 'JavaScript is a versatile programming language used to add interactivity to web pages.' },
          { id: 'variables', text: 'Variables store data values and are declared using let, const, or var.' },
          { id: 'functions', text: 'Functions are reusable blocks of code that perform a specific task when called.' },
          { id: 'arrays', text: 'Arrays are used to store multiple values in a single variable.' },
          { id: 'objects', text: 'Objects hold key-value pairs and are used for storing structured data.' },
          { id: 'dom', text: 'The DOM (Document Object Model) allows JavaScript to interact with HTML elements dynamically.' }
        ].map((section) => (
          <section key={section.id} id={section.id} className="mb-6">
            <h2 className="text-xl font-bold capitalize dark:text-gray-50 text-gray-900">{section.id}</h2>
            <p className="dark:text-gray-200 text-gray-900">{section.text}</p>
          </section>
        ))}
      </main>
    </div>
    </>
  );
};

export default JavaScriptCourse;