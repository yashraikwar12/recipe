import React from "react";
import MainRoutes from "./Routes/MainRoutes";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-screen min-h-screen font-thin py-10 px-[10%] text-white   bg-gray-800">
      <NavBar />
      <MainRoutes />
    </div>
  );
};

export default App;
