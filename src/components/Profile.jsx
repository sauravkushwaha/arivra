import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import { User, Mail, Image, UserCircle } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [useremail, setUseremail] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("loggedInUser");
    if (stored) {
      setUser(stored);
    }
  }, []);

  useEffect(() => {
    const storedemail = localStorage.getItem("loggedInemail");
    if (storedemail) {
      setUseremail(storedemail);
    }
  }, []);

  if (!user) return <p className="text-center mt-10">User not found</p>;

  return (
    <>
      <Navbar />
      <Helmet>
        <title>My Profile | Arivra</title>
        <meta
          name="description"
          content="Manage your profile, saved tutorials and preferences on Arivra."
        />
        <meta
          name="keywords"
          content="Profile, account, user settings, saved tutorials"
        />
      </Helmet>
      <div className="max-w-md mx-auto mb-10 mt-10 p-8 shadow-xl dark:bg-gray-800 dark:text-gray-100 bg-slate-50 text-gray-800  rounded-lg ">
        
        <h2 className="text-2xl font-bold mb-4"> User Profile </h2>

        <div className="flex items-center gap-3">
          <Image className="text-purple-500" />
          <span className="text-lg font-medium">Photo: (not available)</span>
            
        </div>

        <div className="flex items-center gap-3">
          <User className="text-blue-500" />
          <span className="text-lg font-medium">Name: {user}</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-green-500" />
          <span className="text-lg font-medium">Email: {useremail}</span>
        </div>
        {/* <p><strong>Name : </strong> {user}</p> */}
        {/* <p><strong>Email : </strong> {useremail}</p> */}
      </div>
      {/* <div className="absolute inset-x-0 bottom-0  ...">
    <Footer/>
    </div> */}
      <Footer />
    </>
  );
};

export default Profile;
