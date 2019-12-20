const express = require('express')
const app = express()
const port = 3000
//this line tells express to serve js or css from frontend folder
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+"/frontend/html/home.htm"))

app.get('/register', (req, res) => res.send('register'))
var student={ "name" : "akhila"  ,"reg" : "1245" , "college" : "vnr"
}
app.get('/log', (req, res) => res.json(student))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))