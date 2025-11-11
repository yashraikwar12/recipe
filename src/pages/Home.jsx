import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full  h-[80vh] text-6xl bg-gray-800 ">
      <div> Welcome to Home Page </div>
      <Link to='/' className="mt-15 px-4 py-2 text-2xl rounded-lg active:scale-95 bg-gray-900">
        Click Here
      </Link>
    </div>
  );
};

export default Home;
