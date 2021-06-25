import React from "react";
import RecipeDetails from "./RecipeDetails";

export default function Recipe({ recipe }) {
  console.log(recipe);
  const { food } = recipe;
  console.log(food);
  const {label, image, foodContentsLabel } = food

  return <div className="recipe">
  <h2>{label}</h2>
  <img src={image} alt={label} />
  
  <button>Ingredients</button>
  <RecipeDetails ingredients={foodContentsLabel}/>
  </div>;
}
