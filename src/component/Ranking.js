import React, {useEffect, useState} from 'react'

import axios from 'axios'

export default function Ranking() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('/ranking')
            .then(res => setData(res.data))
    }, [])

    const render = data ? (
        <table className="ranking-table">
            <thead key="thead">
                <tr>
                    <th>Rank</th>
                    <th>Summoner Name</th>
                    <th>LP</th>
                    <th>Tier</th>
                    <th>Division</th>
                    <th>Wins</th>
                    <th>Losses</th>
                </tr>
            </thead>
            <tbody>
                {data.map(person =>
                    <tr key = {person.summonerName}>
                        <td>{data.indexOf(person) + 1}</td>
                        <td>{person.summonerName}</td>    
                        <td>{person.leaguePoints}</td>
                        <td>{person.tier = "CHALLENGER" ? "Challenger" : person.tier}</td>
                        <td>{person.rank}</td>
                        <td>{person.wins}</td>
                        <td>{person.losses}</td>
                    </tr>
                )}
            </tbody>
        </table>
    ) : null

    return (
        <div className="ranking-container">
            {render}
        </div>
    )
}
