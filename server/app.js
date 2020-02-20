require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({ route: 'works' })
})

app.get('/ranking', async (req, res) => {
    await axios.get(`https://na1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=${process.env.api_key}`)
        .then(response => {
            return res.status(200).json(response.data)
        })
        .catch(err => {
            return res.status(err.response.status).json(err)
        })
})

app.get('/profile/:summonerName', async (req, res) => {
    await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.summonerName}?api_key=${process.env.api_key}`)
        .then(response => {
            return res.status(200).json(response.data)
        })
        .catch(err => {
            return res.status(err.response.status).json(err.response.statusText)
        })
})

app.listen(8002, () => {
    console.log('Listening on port 8002')
})