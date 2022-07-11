let character = require('./character.json')
const express = require("express")
const cors = require('cors')
const PORT = 4040
const app = express()
let team = []

app.use(cors())
app.use(express.json())



app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    })
})
app.use('/character', (req, res) => {
    res.send({
        character: character
    })
})
app.post('/Team', (req, res) => {
    console.log(req.body);
    if(team.length < 3 ){
         console.log(team.length);
            console.log(req.body);
            team.push(req.body)
            res.status(200).send(team)

         }
         else{
            console.log(team);
        }
    })
    app.get('/Team', (req, res) => {
        res.status(200).send(team)
            
        })

    app.delete('/Team/:id', (req,res) => {
        console.log(req.params);
        const id = req.params.id
        //let idex = team.findIndex(character => character.id === id)
        let idex = team.findIndex(character => character.id == id)
        //console.log(id)
        //console.log(idex)
        team.splice(idex, 1)
        //let new_team = team.splice(idex, 1);
        //console.log(new_team);
        console.log('UPDATED SQUAD')
        console.log(team)
        res.status(200).send(team)
    })



app.listen(PORT, () => console.log(`we are live on port ${PORT}`))