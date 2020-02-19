import React, { Component } from 'react'

import SearchBar from './SearchBar'
import Ranking from './Ranking'

export class Dashboard extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="header-container">
                    <h1 className="dash-text">Personally curated League dashboard</h1>
                    <SearchBar />
                </div>
                <div className="dashboard-container">
                    <Ranking />
                </div>
            </div>

        )
    }
}

export default Dashboard
