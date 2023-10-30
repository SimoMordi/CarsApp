const mongoose = require('mongoose');

// create schema (breakdown of what our data should look like)
const carSchema = new mongoose.Schema(
    {
        name: String,
        color: String,
        age: Number
    },
    {
        timestamps: true
    }
    )

// create Model with that schema
// whatever we put as the collection name will be lowecased and pluralized +s
// Car > cars
// User > users

//                          1. ^ which collection   2. ^ the schema
const Car = mongoose.model( "Car", carSchema);
module.exports = Car;