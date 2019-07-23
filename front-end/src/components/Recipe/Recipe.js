import React from 'react';
import './Recipe.css';

class Recipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            props: this.props
        }
    }
    displayRecipePage = () => {
        this.setState(
             { recipePageBool: true,
                recipeID: this.state.props.recipeID,
                recipeImage: "https://spoonacular.com/recipeImages/" + this.state.props.recipeID + "-480x360" + "." +this.state.props.format
            });
        this.props.displayRecipePage(this.state.props.recipeID,this.state.props.recipeImage,this.state.props.recipeName);
        console.log("local component "+ this.state.props.recipeID)
        console.log("local component "+ this.state.props.recipeImage)
      };

    render() {
        return (
            <div className="tile">
                <img className="image" src={"https://spoonacular.com/recipeImages/" +this.state.props.recipeID + "-480x360" + "." +this.state.props.format} alt="recipeImage" />
                <button type="button" onClick={this.displayRecipePage} className="title"  >  {this.state.props.recipeName} </button>
            </div>
        )
    }
}



export default Recipe; 