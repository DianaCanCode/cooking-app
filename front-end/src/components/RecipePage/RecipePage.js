import React from 'react';
import './RecipePage.css';

const RecipePage = props => {
  console.log("this is image"+ props.recipeImage)
    return (
      <div> 
       <div className="recipeContainer">
          {/* <p> hello recipe ID is {props.recipeID} </p> */}
          <h1 className="recipetitle"> Primie Rib </h1>
          <img src={props.recipeImage}/>
          
          <img className="recipeImage" src="https://spoonacular.com/recipeImages/107878-480x360.png" alt="recipeImage"/> 
      
            <div className="description"> 
              <p> Recipe Infomration and descrioption .... blah blah  </p>
              <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="62" cy="62" r="62" fill="#F14679" fill-opacity="0.9"/>
                <path d="M37.4624 67.0408L37.4623 83.5069H85.6845V67.0408C97.4462 69.3931 118.617 34.1086 82.1563 39.9894C82.1563 18.8186 37.4624 18.8187 37.4624 39.9894C8.05847 39.9894 23.3485 67.0407 37.4624 67.0408Z" fill="white"/>
                <path d="M37.4623 90.5639H85.6845M37.4623 96.4447H85.6845M37.4624 67.0408L37.4623 83.5069H85.6845V67.0408C97.4462 69.3931 118.617 34.1086 82.1563 39.9894C82.1563 18.8186 37.4624 18.8187 37.4624 39.9894C8.05847 39.9894 23.3485 67.0407 37.4624 67.0408Z" stroke="white" stroke-width="2.3523"/>
              </svg>

                 
             </div> 
              
          </div>
      </div> 
    );
  };
  
  export default RecipePage;
