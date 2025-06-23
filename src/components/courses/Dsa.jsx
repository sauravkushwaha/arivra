import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const DsaCourse = () => {
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
    <>
    <Helmet>
  <title>DSA courses | Arivra</title>
  <meta name="description" content="Explore our web development, ML, and DSA courses at Arivra." />
  <meta name="keywords" content="Dsa, DS, ALGO, dsacourses, Courses, Web Dev, Machine Learning, DSA, Arivra" />
</Helmet>
    <div className="flex flex-col md:flex-row min-h-screen relative dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800">
      {/* Mobile Hamburger */}
      <div className="md:hidden p-4 flex justify-between items-center shadow dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800 sticky top-0 z-10">
        <h2 className="text-xl font-semibold">DSA Course</h2>
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
        } md:translate-x-0 w-3/4 md:w-1/4 bg-gray-300 dark:bg-gray-800  p-4 fixed inset-y-0 left-0 z-20 transition-transform duration-300 ease-in-out shadow-lg md:shadow-none md:relative`}
      >
        {/* Close button (X) - Mobile only */}
        <button
          onClick={closeSidebar}
          className="absolute top-4 right-4 text-xl md:hidden hover:text-gray-700"
          aria-label="Close menu"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-4 mt-2 dark:text-gray-50 text-gray-900">DSA Topics</h2>
        <ul className="space-y-3 text-blue-600">
          {['intro', 'arrays', 'strings', 'recursion', 'linkedlists', 'trees', 'graphs'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:underline block capitalize"
                onClick={closeSidebar}
              >
                {item === 'intro' ? 'Introduction' : 
                 item === 'linkedlists' ? 'Linked Lists' :
                 item === 'trees' ? 'Trees' :
                 item === 'graphs' ? 'Graphs' :
                 item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6">
        <h1 className="text-2xl font-semibold mb-4">DSA Course</h1>
        <p className="mb-4">
          Welcome to the DSA course! Build your logic and problem-solving skills with core concepts and real interview patterns.
        </p>

        {[
          { 
            id: 'intro', 
            title: 'Introduction', 
            content: 'DSA stands for Data Structures and Algorithms. It\'s the foundation of efficient programming and problem solving.' 
          },
          { 
            id: 'arrays', 
            title: 'Arrays', 
            content: 'Arrays store elements in contiguous memory. Learn searching, sorting, and manipulation techniques.' 
          },
          { 
            id: 'strings', 
            title: 'Strings', 
            content: 'Strings are sequences of characters. You\'ll explore patterns, substring search, and palindromes.' 
          },
          { 
            id: 'recursion', 
            title: 'Recursion', 
            content: 'Recursion means a function calling itself. It\'s powerful for solving divide-and-conquer problems.' 
          },
          { 
            id: 'linkedlists', 
            title: 'Linked Lists', 
            content: 'Linked lists are linear data structures where elements point to the next. Great for dynamic memory management.' 
          },
          { 
            id: 'trees', 
            title: 'Trees', 
            content: 'Trees are hierarchical structures used in searching, routing, and expression parsing.' 
          },
          { 
            id: 'graphs', 
            title: 'Graphs', 
            content: 'Graphs are sets of connected nodes. You\'ll learn BFS, DFS, Dijkstra\'s, and more.' 
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

export default DsaCourse;