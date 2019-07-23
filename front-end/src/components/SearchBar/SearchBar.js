import React from 'react';
import "./SearchBar.css";

class SearchBar extends React.Component {
    state = {
        term: 'Chicken'
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit} className="form">
                    <label className="title1"> Select ingedients: </label>
                    <div className='field'>
                        <input className='searchBar' onChange={this.handleChange} name='video-search' type="text" value={this.state.term}/>
                    </div>           
                        <button className='button1'> Find recipe </button>  
                </form>
        )
    }
}
export default SearchBar;