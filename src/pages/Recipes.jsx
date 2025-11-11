import React, { useContext } from "react";
import { recipecontext } from "../Context/RecipeContext";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { data } = useContext(recipecontext);
  const render = data.map((val) => (
    <div
      key={val.id}
      className="w-[50vh] p-2 m-2 shadow-2xl rounded flex flex-col bg-gray-700"
    >
      <img
        className=" h-[35vh] object-cover overflow-hidden m-2 px-2 rounded"
        src={val.image}
        alt=""
      />
      <p className="px-4">{val.name}</p>
      <p className="px-4 py-2">{val.cuisine}</p>
      <Link to={`/recipes/details/${val.id}`}>
        <button className=" px-4 py-2 w-full hover:scale-101 rounded-lg bg-gray-600">
          More Info
        </button>
      </Link>
    </div>
  ));
  return (
    <div className="w-full h-full flex flex-wrap justify-center m-2 p-2 bg-gray-800">
      {render}
    </div>
  );
};

export default Recipes;
