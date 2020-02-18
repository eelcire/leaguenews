import React, {useEffect} from 'react'

import RiotRequest from 'riot-lol-api'

export default function Ranking() {
    useEffect(() => {
        const riotRequest = new RiotRequest('RGAPI-3ba80fbf-c967-4031-a9fc-60e8ec0265e5')

        riotRequest.request('euw1', 'summoner', '/lol/summoner/v3/summoners/by-name/graphistos', function(err, data) {
            console.log(data)
        })
    })

    return (
        <div>
            hello
        </div>
    )
}
