require('dotenv').config();
const mongoose = require('mongoose');
const colors = require('colors')


const url = process.env.URL

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        console.log('MongoDB Connected'.blue.bold)

    } catch (err) {
        console.error(err.message)
        process.exit(1)
        }
    }
module.exports = connectDB