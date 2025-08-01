import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Courses from "./components/Courses.jsx";
import About from "./components/About.jsx"
import Layout from './components/Layout.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Tutorial from './components/Tutorial.jsx';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Profile.jsx';
import CourseName from './components/CourseName.jsx';
import AddTutorial from './components/Addtutorial.jsx';
import NotFound from './components/NotFound.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Reference from './components/Reference.jsx';
import SearchResults from './components/SearchResult.jsx';



  const router = createBrowserRouter([
    {
      path:"/:username",
      element:<Layout/>
    },
    {
      path:"/",
      element:<Layout/>
    },
    {
      path:"/courses",
      element:<Courses/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/reference",
      element:<Reference/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/tutorials",
      element:<Tutorial/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/courses/:coursename",
      element:<CourseName/>
    },
    {
      path:"/addtutorial/",
      element:<AddTutorial/>
    },
    {
      path:"/search",
      element:<SearchResults/>
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ])


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>
  </HelmetProvider>,
)
