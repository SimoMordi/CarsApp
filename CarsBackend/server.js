const express = require('express') 
const path = require('path') 
const cors = require('cors')
const morgan = require('morgan')
const PORT = 4000;
const app = express();

const Car = require('./models/Cars.js')




// allows us to use process.env (get variables from .env file)
require('dotenv').config();


require('./Db.js');


app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))

// app.use(middleware);

app.use(express.json()); // adds .body to the request


app.get("/cars", async (req, res) => {
    let carsFromDB = await Car.find();
    res.send(carsFromDB);
});

app.post("/cars", async (req,res) => {
    console.log(req.body);
    
   let responseFromDB = await Car.create(req.body);
   console.log(responseFromDB);
    res.status(201).send("Route is good")
});




app.listen(PORT, () => {
    console.log(`Running on port  http://localhost:${PORT} `)
});