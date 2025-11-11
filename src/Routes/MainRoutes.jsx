import { Routes, Route } from "react-router-dom";
// ...existing code...
import Create from "../pages/Create";

import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import Details from "../pages/Details";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<Details />} />
      <Route path="/create-recipe" element={<Create />} />
    </Routes>
  );
};

export default MainRoutes;
