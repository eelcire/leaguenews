import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function SearchBar() {
    const [text, setText] = useState('')
    
    let history = useHistory()

    const handleClick = async (event) => {
        event.preventDefault()
        await axios.get(`/profile/${text}`).then(res => console.log(res)).catch(err => console.log(err.response))
        history.push(`/profile/${text}`)
    }

    return (
        <form className="searchbar-container" onSubmit={handleClick}>
            <input className="searchbar" onChange={e => setText(e.target.value)} value={text} placeholder="Summoner Name..." />
            <button className="searchbutton">Search</button>
        </form>
    )
}