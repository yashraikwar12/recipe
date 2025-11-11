import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";

const Details = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { data } = useContext(recipecontext);
  const recipe = data.find((val) => param.id == val.id);
  const x = recipe.ingredients;
  console.log(data);
  if (x) {
    return (
      <div className="w-full min-h-[80vh] pt-20 flex flex-col justify-center items-center bg-gray-800 text-white">
        <div className="w-[75vw] bg-gray-700 p-5 rounded-lg flex flex-col justify-center items-center text-4xl gap-6">
          <p className="font-semibold text-center capitalize">{recipe.name}</p>
          <img
            className="  h-[50vh] object-cover rounded-xl shadow-lg"
            src={recipe.image}
            alt=""
          />
          <div className="flex flex-col justify-start text-base gap-2">
            <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
            <ol className="list-decimal list-inside">
              {Array.isArray(x)
                ? x.map((val, i) => <li key={i}>{val}</li>)
                : x.split(",").map((val) => {
                    return <li>{val}</li>;
                  })}
            </ol>
          </div>
          <p className="text-lg leading-relaxed text-center max-w-[60%]">
            {recipe.instructions}
          </p>
        </div>
        <button
          className="mt-6 py-2 px-6 rounded-lg bg-gray-900 hover:scale-105 transition-transform"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading Recipe... </h1>
      </div>
    );
  }
};

export default Details;
