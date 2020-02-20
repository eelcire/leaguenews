import React, { Component } from 'react'

export class Profile extends Component {

    componentDidMount() {
        console.log(this.props.match.params.summonerName)
    }

    render() {
        return (
            <div>
                sup
            </div>
        )
    }
}

export default Profile
