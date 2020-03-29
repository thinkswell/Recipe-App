import React from "react"
import "./Recipe.css"
const Recipe = ({title, image, ingredients}) => {
    return (
        <div className="recipeCard">
            <h1 className="title">{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt="" className="recipeImg"/>
        </div>
    )
}

export default Recipe;