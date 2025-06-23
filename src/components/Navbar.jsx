import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Sun, Moon, ExternalLink } from "lucide-react";
import { courses } from "./courses/courseData.js"

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  //showusername
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) setUsername(user);
  }, []);

  const handleLogout = () => {
    //logout user
    localStorage.removeItem("loggedInUser");
    setUsername(null);
    setTimeout(() => navigate("/"), 1500);
  };

const handleSearch = (e) => {
  if (e.key === "Enter") {
    const query = e.target.value.trim().toLowerCase();

    const foundCourse = courses.find((course) =>
      course.title.toLowerCase() === query || course.slug === query
    );

    if (foundCourse) {
      navigate(`/courses/${foundCourse.slug}`);
    } else {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  }
};

  //dropdown close
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //dark Mode
  // const [darkMode, setDarkMode] = useState('dark');
  // useEffect(()=>{
  //   console.log(darkMode);
  //   if(darkMode=='dark'){
  //     document.documentElement.classList.add('dark')
  //   }else{
  //     document.documentElement.classList.remove('dark')
  //   }
  // }, [darkMode])

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // First check localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) return savedMode === "true";

    // Then check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Toggle class on <html> tag
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  return (
    <>
      {/* <div className={darkMode ? 'dark' : 'light'}> */}
      <nav className="shadow-md px-5 py-2 flex justify-between items-center dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800  relative">
        {/* Hamburger menu button - always visible but layout changes */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <div className="hidden min-[350px]:flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="text-xl font-bold">Arivra</span>
        </div>

        {/* Main navigation links - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-10">
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-500">
            About
          </NavLink>
          <NavLink to="/courses" className="hover:text-blue-500">
            Courses
          </NavLink>
          <NavLink to="/tutorials" className="hover:text-blue-500">
            Tutorials
          </NavLink>
          <NavLink to="/reference" className="hover:text-blue-500">
            Reference
          </NavLink>
          <NavLink
            to="https://github.com/sauravkushwaha"
            className="hover:text-blue-500 flex items-center transition-colors"
          >
            <span>Github</span>
            <ExternalLink className="w-3 h-3 stroke-current flex items-center transition-colors" />
          </NavLink>
        </div>

        {/* Right side elements */}
        <div className="flex items-center gap-5">
          {/* <select onChange={(event)=>setDarkMode(event.target.value)}>
            <option value="dark">dark</option>
            <option value="light">light</option>
          </select> */}
          <div className="hidden min-[500px]:block">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
            >
              {isDarkMode ? (
                <Sun
                  size={20}
                  className="text-yellow-400 transition duration-300 hover:scale-110"
                />
              ) : (
                <Moon
                  size={20}
                  className="text-blue-300 transition duration-300 hover:scale-110"
                />
              )}
            </button>
          </div>
          {/* Search bar - visible above 800px */}
          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              onKeyDown={handleSearch}
              className="border px-2 py-1 rounded-md text-sm w-[160px]"
            />
          </div>

          {/* User section */}
          {username ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="text-cyan-500 font-semibold focus:outline-none hover:text-blue-500"
              >
                Hi, {username}
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-3 w-40 bg-white border rounded-md shadow-lg z-50">
                  <NavLink
                    to="/profile"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    Profile
                  </NavLink>
                  <button
                    onClick={() => {
                      localStorage.removeItem("loggedInUser");
                      window.location.href = "/";
                    }}
                    className="w-full text-left px-5 py-2 text-sm text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button className="bg-gray-200 text-black px-4 py-1 rounded hover:bg-gray-300 max-[1215px]:hidden">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Sign Up
                </button>
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile menu - appears when hamburger is clicked */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800 shadow-md z-40 p-4">
            <div className="flex flex-col gap-3 mt-3">
              <NavLink
                to="/"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/courses"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </NavLink>
              <NavLink
                to="/tutorials"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Tutorials
              </NavLink>
              <NavLink
                to="/reference"
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Reference
              </NavLink>
              <NavLink
                to="https://github.com/sauravkushwaha"
                className="hover:text-blue-500 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Github{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:text-slate-100 text-gray-800"
                  height="14px"
                  viewBox="0 -960 960 960"
                  width="14px"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                </svg>
              </NavLink>

              {/* Search bar in mobile menu */}
              <div className="xl:hidden ">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border px-2 py-1 rounded-md text-sm w-full"
                />
                <button
                  onClick={() => {
                    setIsDarkMode(!isDarkMode);
                    setIsMenuOpen(false); // Optional: close menu after toggle
                  }}
                  className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded-md min-[500px]:hidden"
                >
                  {isDarkMode ? (
                    <>
                      <Sun size={20} className="text-yellow-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon size={20} className="text-blue-300" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* </div> */}
    </>
  );
};

export default Navbar;
