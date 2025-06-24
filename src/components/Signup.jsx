// src/pages/Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {toast, ToastContainer} from "react-toastify";
import { handleError } from '../utils';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { signupUser } from '../utils/api';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    // const {name,value}= e.target;
    // console.log(name, value); 
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  // console.log("formdata : " FormData);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const{name, email, password} = formData;
    if(!name || !email || !password){
      return handleError("name, email, password all fields are required")
    }
    try {
      const res = await signupUser(formData);
      // const res = await axios.post('http://localhost:8080/auth/signup', formData);
      toast.success("Signup successful!")
      setTimeout(() => navigate("/login"), 1500);
      // alert('Signup successful!');
      // console.log(res.data);
    } catch (err) {
      const errormsg = err.response?.data?.message || err.response?.data  || 'Signup failed' ;
      toast.error(errormsg);
      //err.response?.data?.message --> check for {message: "error"}
      // err.response?.data -->  covers if data is plain string
      // alert(err.response?.data?.message || 'Signup failed');
      console.error(err);  
    }
  };

  return (
    <>
    <Helmet>
  <title>Sign Up | Arivra</title>
  <meta name="description" content="Create your Arivra account and begin your journey in web development, AI, and DSA." />
  <meta name="keywords" content="Signup, Arivra, register, developer platform" />
</Helmet>
    <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg dark:bg-gray-800 dark:text-gray-100 bg-slate-100 text-gray-800">
        <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange} //user input k liye
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            // required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            // required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            // required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        <p className="mt-6 text-center text-sm text-gray-700 dark:text-slate-100">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
        </form>
        <ToastContainer/>
      </div>
    </div>
    </>
  );
};

export default Signup;