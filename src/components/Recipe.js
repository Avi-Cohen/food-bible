import React from "react";
import RecipeDetails from "./RecipeDetails";

export default function Recipe({ recipe }) {
  console.log(recipe);
  const { food } = recipe;
  console.log(food);
  const {label, image, foodContentsLabel } = food

  const html = `<div className="recipe">
<h2>{label}</h2>
<img src={image} alt={label} />
<a href={url} target="_blank" ref="noopener noreferrer">
  URL
</a>
<button>Ingredients</button>
</div>`;
  return <div className="recipe">
  <h2>{label}</h2>
  <img src={image} alt={label} />
  
  <button>Ingredients</button>
  <RecipeDetails ingredients={foodContentsLabel}/>
  </div>;
}
