require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const cors = require('cors');

const routes_carta = require('./routes/cartas');
const routes_mazo = require('./routes/mazo');

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 200 // Para las solicitudes OPTION
  }));

app.use(express.json());


app.listen(3000, () => {
    console.log(`Servidor escuchando en puerto ${3000}`)
})

app.use('/api', routes_carta);
app.use('/api', routes_mazo);