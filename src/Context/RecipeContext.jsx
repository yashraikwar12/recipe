import React, { createContext, useEffect, useState } from "react";

export const recipecontext = createContext();
const RecipeContext = ({ children }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((x) => setdata(x.recipes));
  }, []);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
