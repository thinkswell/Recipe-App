import React, {useEffect, useState} from 'react'
import Recipe from "./Recipe"
import "./App.css"

const App = () => { 

  const APP_ID = "bcd0ed53";
  const APP_KEY = "19f97e12271aeb975832bd3eef91c6c7";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Momos");

  useEffect(()=>{
    getRecipes();
  }, [query])

  const getRecipes = async () => {
     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

     const data =  await response.json();

     setRecipes(data.hits);
     console.log(data.hits);

  }

  const handleSubmit = e => {
      e.preventDefault();
      setQuery(search);
  }

  const handleSearch = e => {
    setSearch(e.target.value);  
  }

  return (
    <div className="App">

        <form className="search-form" onSubmit={handleSubmit}>
            <input type="search" className="search-input" value={search} onChange={handleSearch}/>
            <button type="submit" className="search-btn">Search</button>
        </form>
      <div className="recipe">
        {recipes.map(recipe => (
          <Recipe
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          image={recipe.recipe.image}
          />
        ))}
      </div>
        
    </div>
  );

}

export default App;