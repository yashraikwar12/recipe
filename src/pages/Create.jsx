import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const submit = (e) => {
    e.id = nanoid();
    setdata([...data, e]);
    reset();
    console.log(data);
    toast.dark("Recipe added successfully");
    navigate("/");
  };
  return (
    <div className="my-20 mx-20 text-2xl">
      <form onSubmit={handleSubmit(submit)}>
        <input
          className="block border-b outline-0 mb-5"
          {...register("image")}
          type="url"
          placeholder="enter image url"
        />
        {/* <small className="text-red-400">Error *</small> */}
        <input
          className="block border-b outline-0  mb-10"
          {...register("name")}
          type="text"
          placeholder="Add Recipe Name"
        />

        <textarea
          className="block border-b resize-none outline-0 mb-5"
          {...register("ingredients")}
          placeholder="enter the ingredient"
        ></textarea>
        <textarea
          className="block border-b resize-none outline-0 mb-5"
          {...register("instructions")}
          placeholder="enter the instructions"
        ></textarea>

        <select
          className="block border-b outline-0 mb-5"
          {...register("cuisine")}
        >
          <option className=" bg-gray-900 " value="">
            Select Category
          </option>
          <option className=" bg-gray-900 " value="Indian">
            Indian
          </option>
          <option className=" bg-gray-900 " value="Chinese">
            Chinese
          </option>
          <option className=" bg-gray-900 " value="Continental">
            Continental
          </option>
        </select>
        <input
          className="border-0 py-2 px-4 rounded bg-gray-900"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Create;
