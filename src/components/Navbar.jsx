import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center gap-x-10 text-sm ">
      <div className="hover:scale-110">
        <NavLink
          className={(e) => (e.isActive ? "text-red-300 " : "")}
          to="/home"
        >
          Home
        </NavLink>
      </div>
      <div className="hover:scale-110">
        <NavLink className={(e) => (e.isActive ? "text-red-300 " : "")} to="/">
          Recipes
        </NavLink>
      </div>
      <div className="hover:scale-110">
        {" "}
        <NavLink
          className={(e) => (e.isActive ? "text-red-300 " : "")}
          to="/create-recipe"
        >
          Create Recipe
        </NavLink>
      </div>

      {/* <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/about"
      >
        About
      </NavLink> */}
    </div>
  );
};

export default NavBar;
