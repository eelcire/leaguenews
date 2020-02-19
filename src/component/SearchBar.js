import React, { Component } from 'react'

export default class SearchBar extends Component {
    handleClick = (event) => {
        event.preventDefault()
        alert('clicked')
    }

    render() {
        return (
            <div className="searchbar-container">
                <input className="searchbar" placeholder="Summoner Name..." />
                <button onClick={this.handleClick} className="searchbutton">Search</button>
            </div>
        )
    }

}