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
            <div className='container'>
                <form onSubmit={this.handleSubmit} >
                    <div className='field'>
                        <input className='searchBar' onChange={this.handleChange} name='video-search' type="text" value={this.state.term}/>
                        
                    </div>
          
                    <div className="containerButton">
                        <button className='button'> Review </button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
export default SearchBar;