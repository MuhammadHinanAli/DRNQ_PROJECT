//SETTING UP EXPRESSJS/CORS/MONGODB/body-parser
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

//CORS
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//BODY PARSER //body parser //npm install body-parser //goes to the body of the http request and pull out data
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongodb setup
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.r0mtix2.mongodb.net/?retryWrites=true&w=majority');
    //use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
}

//SETTING UP DATABASE SCHEMA
const gameSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
})

//GAMEMODEL = MONGOOSE MODEL
const gameModel = mongoose.model('my_games', gameSchema);

//CREATING DATA ONTO THE CLUSTER
app.post('/api/game', (req, res) => {
    console.log(req.body);

    gameModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    }) //MODEL CREATED WITH TITLE COVER AND AUTHOR
        .then(() => { res.send('game recieved'); })
        .catch(() => { res.send('game not recieved'); })
})//SEND DATA TO THE CLUSTER

app.get('/api/games', async (req, res) => {

    let games = await gameModel.find({});
    console.log(games);
    res.json(games); //DISPLAYS ON THE CLIENT TO THE SERVER
})//RETRIEVE DATA FROM THE CLUSTER

app.get('/api/game/:identifier', async (req, res) => {
    console.log(req.params.identifier);

    let game = await gameModel.findById(req.params.identifier);
    res.send(game); //DISPLAYS ON THE CLIENT TO THE SERVER
})//RETRIEVE DATA 

app.put('/api/game/:id', async (req, res) => {
    console.log("Update: " + req.params.id);

    let game = await gameModel.findByIdAndUpdate(req.params.id, req.body, { new: true }); //findbyID built in 
    res.send(game); //DISPLAYS ON THE CLIENT TO THE SERVER
})//UPDATE THE DATA

//DELETES DATA FROM THE CLIENT AND UPDATES THE SERVERS 
app.delete('/api/game/:id', async (req, res) => {
    console.log("Delete: " + req.params.id)

    let game = await gameModel.findByIdAndDelete(req.params.id); //findbyID built in 
    res.send(game); //DISPLAYS ON THE CLIENT TO THE SERVER

})//FUNCTION DELETE 

app.get('/apis/games', (req, res) => { //request and respond // ('/apis/games') is the path

    const games1 = [
        {
            "title": "Grand Theft Auto VI",
            "thumbnailUrl": "https://rockstarintel.com/wp-content/uploads/2023/12/Grand-Theft-Auto-VI-Trailer-1-00-01-25-copy.webp",
            "authors": ["Rockstar"],
        },
        {
            "title": "The God of War Ragnarok: Valhalla",
            "thumbnailUrl": "https://blog.playstation.com/tachyon/2023/12/56935f822f365f2cae0282333bf9f2e60dcb4211.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5",
            "authors": ["Santa Monica Studio"],
        },
        {
            "title": "Prince of Persia: The Lost Crown",
            "thumbnailUrl": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/prince-of-persia.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
            "authors": ["Ubisoft"],
        },
        {
            "title": "Call of Duty: Warzone Mobile",
            "thumbnailUrl": "https://www.insidesport.in/wp-content/uploads/2022/09/20220916_085120.jpg?resize=690,388",
            "authors": ["Activision"],
        }
    ];//array

    res.json({ mygames1: games1 });//response json

})//get method

//GET FUNCTION WITH RESPONCE AND REQUEST
app.get('/', (req, res) => {
    res.send('HELLO FROM GAME APPLICATION SERVER');
})


//LISTENING AT PORT //DISPLAY ON CONSOLE //LISTENING FOR HTTP REQUEST
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
