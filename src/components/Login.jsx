// src/pages/Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {toast, ToastContainer} from "react-toastify";
import { handleError } from '../utils';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const [formData, setFormData] = useState({
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const{email, password} = formData;
    if( !email || !password){
      return handleError("email, password all fields are required")
    }
    try {
      const res = await axios.post('http://localhost:8080/auth/login', formData);
      toast.success("Login successful!")
      localStorage.setItem('token', res.data.token);
  //     localStorage.setItem('loggedInUser', JSON.stringify({
  // name: res.data.name,
  // email: res.data.email,
  // token: res.data.token}));
  localStorage.setItem('loggedInUser',res.data.name);
  localStorage.setItem('loggedInemail',res.data.email);
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      const errormsg = err.response?.data?.message || err.response?.data  || 'Login failed' ;
      toast.error(errormsg);
      // console.error(err);  
    }
  };

  return (
    <>
    <Helmet>
  <title>Login | Arivra</title>
  <meta name="description" content="Login to your Arivra account to access exclusive tutorials and courses." />
  <meta name="keywords" content="Login, Arivra, sign in, developer account" />
</Helmet>
    <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 dark:text-gray-100 bg-slate-50 text-gray-800 ">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg dark:bg-gray-800 dark:text-gray-100 bg-slate-100 text-gray-800 ">
        <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome!!</h1>
        <p className='justify-center font-bold items-center flex'>login to your account</p>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Log In
          </button>
        <p className="mt-6 text-center text-sm text-gray-700 dark:text-slate-100">
          Don't have an account? {' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">
            Signup
          </Link>
        </p>
        </form>
        <ToastContainer/>
      </div>
    </div>
    </>
  );
};

export default Login;