import React from 'react';
import './Recipe.css'; 

const Recipe = (props) => {
    return(
        <div className="background"> 
        <div className="container"> 
            <div className="recipeStyle">
                <div > 
                <img src={"https://spoonacular.com/recipeImages/818941-480x360.jpg"}/>
                {/* <img src={"https://spoonacular.com/recipeImages/"+props.recipeID+"-480x360"+".jpg"}/> */}
                </div>
                <p>  {props.recipeName} </p>  
            </div>
        </div>
        </div>
    )
}

export default Recipe; 