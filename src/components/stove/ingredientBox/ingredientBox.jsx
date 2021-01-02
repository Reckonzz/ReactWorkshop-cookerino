import React from "react"

import "./ingredientBox.styles.css"

const IngredientBox = (props) => {
    return(
        <div onClick={() => props.removeIngredient(props.idx)} className="ingredient-box">
            {props.ingredient ? <img src={props.ingredient.imgSrc}/>: ""}
        </div> 
    )
}

export default IngredientBox
