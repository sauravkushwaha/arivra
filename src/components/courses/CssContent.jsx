import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const CSSCourse = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburgerRef.current &&
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
    <><Helmet>
  <title>Css course | Arivra</title>
  <meta name="description" content="Explore our web development, ML, and DSA courses at Arivra." />
  <meta name="keywords" content="css, css course, Courses, Web Dev, Machine Learning, DSA, Arivra" />
</Helmet>
    <div className="flex flex-col md:flex-row min-h-screen relative dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800">
      {/* Mobile Hamburger */}
      <div className="md:hidden p-4 flex justify-between items-center shadow dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800 sticky top-0 z-10">
        <h2 className="text-xl font-semibold">CSS Course</h2>
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

        <h2 className="text-lg font-bold mb-4 mt-2 dark:text-gray-50 text-gray-900">CSS Basics</h2>
        <ul className="space-y-3 text-blue-600">
          {['introduction', 'selectors', 'boxmodel', 'flexbox', 'grid', 'positioning'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:underline block capitalize"
                onClick={closeSidebar}
              >
                {item === 'boxmodel' ? 'Box Model' : 
                 item === 'flexbox' ? 'Flexbox' :
                 item === 'positioning' ? 'Positioning' :
                 item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6">
        <h1 className="text-2xl font-semibold mb-4">CSS Course</h1>
        <p className="mb-4">
          Welcome to the CSS course! This section covers styling fundamentals, layout systems, and responsive design principles.
        </p>

        {[
          { 
            id: 'introduction', 
            title: 'Introduction', 
            content: 'CSS stands for Cascading Style Sheets. It defines how HTML elements are displayed...' 
          },
          { 
            id: 'selectors', 
            title: 'Selectors', 
            content: 'Selectors are patterns used to select elements you want to style...' 
          },
          { 
            id: 'boxmodel', 
            title: 'Box Model', 
            content: 'Every HTML element can be considered as a box with margin, border, padding, and content...' 
          },
          { 
            id: 'flexbox', 
            title: 'Flexbox', 
            content: 'Flexbox is a layout model that allows responsive alignment and distribution of elements...' 
          },
          { 
            id: 'grid', 
            title: 'CSS Grid', 
            content: 'CSS Grid is a powerful 2D layout system that helps create complex designs easily...' 
          },
          { 
            id: 'positioning', 
            title: 'Positioning', 
            content: 'The position property specifies the type of positioning method for an element (static, relative, absolute, fixed, or sticky)...' 
          }
        ].map((section) => (
          <section key={section.id} id={section.id} className="mb-6">
            <h2 className="text-xl font-bold dark:text-gray-50 text-gray-900">{section.title}</h2>
            <p className="dark:text-gray-200 text-gray-900">{section.content}</p>
          </section>
        ))}
      </main>
    </div>
    </>
  );
};

export default CSSCourse;