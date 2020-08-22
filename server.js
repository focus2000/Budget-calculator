const express = require('express');
const colors = require('colors');
const cors = require('cors');
const path = require('path')




const app = express();

const connectDB = require('./config/db')
//connect to the Database
connectDB()

app.use(express.json());
app.use(cors());
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/incomes', require('./routes/income'));
app.use('/expenses', require('./routes/expense'));





const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server Running on port ${PORT}`.yellow.bold))