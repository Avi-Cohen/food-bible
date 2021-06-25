import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Recipe from "./components/Recipe";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  // const [goods, setGoods] = useState([])

  const APP_ID = "c33bd430";
  const APP_KEY = "503506441c4d469e4ec16db90869125d";
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await axios.get(
      url + `%09&ingr=${query}&nutrition-type=cooking`
    );
    setRecipes(result.data.hints)
   // setGoods(recipes.filter(recipe=> recipe.food.image && recipe.food.foodContentsLabel))
    console.log(result.data.hints); 
  };
  const onSubmit = (e) => {
    e.preventDefault(); 
    getData();
  };
  const onChange = (e) => setQuery(e.target.value);
  return (
    <div className="App">
      <h1>Food Searching App</h1>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          onChange={onChange}
        />
        <input type="submit" value="Search" onClick={(e) => onSubmit(e)} />
      </form>
      <div className="recipes">
      {recipes.length > 0 &&
          recipes.map((recipe) => <Recipe recipe={recipe}/>)}
      </div>
    </div>
  );
};
export default App;
