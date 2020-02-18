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
    let data
    await axios.get(`https://na1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=${process.env.api_key}`)
        .then(res => data = res.data)
        .catch(err => console.log(err))
    res.status(200).json(data)
})

app.get('/profile', async (req, res) => {
    let data
    await axios.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/kitcatpattywhack?api_key=${process.env.api_key}`)
        .then(res => data = res.data)
        .catch(err => console.log(error))
    res.status(200).json(data)

})

app.listen(8002, function() {
    console.log('Listening on port 8002')
})