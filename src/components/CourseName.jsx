import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import HtmlContent from '../components/courses/HtmlContent';
import CssContent from '../components/courses/CssContent';
import JsContent from '../components/courses/JsContent';
import ReactContent from '../components/courses/ReactContent';
import ExpressJS from '../components/courses/ExpressJS';
import Mongodb from '../components/courses/Mongodb';
import CPP from'../components/courses/Cpp';
import Dsa from '../components/courses/Dsa';


const CourseName = (props) => {
  const { coursename } = useParams();

  const renderContent = () => {
    switch (coursename.toLowerCase()) {
      case 'html':
        return <HtmlContent />;
      case 'css':
        return <CssContent />;
      case 'javascript':
        return <JsContent />;
      case 'react':
        return <ReactContent />;
      case 'express':
        return <ExpressJS />;
        case 'mongodb':
        return <Mongodb />;
        case 'cpp':
        return <CPP />;
        case 'dsa':
        return <Dsa />;
      default:
        return <p className="text-center mt-10">Course not found</p>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-4 py-6">{renderContent()}</div>
      <Footer />
    </>
  );
};

export default CourseName
