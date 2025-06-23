import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
    <Helmet>
  <title>404 Not Found | Arivra</title>
  <meta name="description" content="Oops! The page you're looking for doesn't exist on Arivra." />
  <meta name="keywords" content="404, not found, Arivra error page" />
</Helmet>
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-red-600">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link to="/" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
        Go to Homepage
      </Link>
    </div>
    </>
  );
};

export default NotFound;