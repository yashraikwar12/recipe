import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center gap-x-10 text-sm">
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/home">
        Home
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/">
        Recipes
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/create-recipe"
      >
        Create Recipe
      </NavLink>

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
