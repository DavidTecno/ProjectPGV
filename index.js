'use strict'

var express = require('express');

var app = express();

var api = express.Router();

//models
var laptops = [
    {
        name: 'HP 15-DB0007NS',
        price: '399€',
        core: 2,
        procesador: 'AMD A6-9225 Dual-Core',
        velocidad: '2.6GHz - 3GHz',
        ram: '8GB',
        graphicCardModel: 'AMD Radeon R4',
        screenFormat: 15.6,
        batteryCells: 3,
    },{
        name: ' Lenovo Ideapad 320-15ISK',
        price: '459€',
        core: 2,
        procesador: 'i3-6006U',
        velocidad: '2.0GHz',
        ram: '8GB',
        graphicCardModel: 'NVIDIA® GeForce® 920MX',
        screenFormat: 15.6,
        batteryCells: 2
    },{
        name: 'Asus ZenBook Pro UX550VD-BN009T',
        price: '1399€',
        core: 4,
        procesador: 'Intel® Core™ i7-7700HQ',
        velocidad: '2.8GHz - 3.8GHz',
        ram: '8GB',
        graphicCardModel: 'NVIDIA® GeForce® GTX1050',
        screenFormat: 16.9,
        batteryCells: 8,
    }
];

//Requests
const getLaptop = (req, res) => {
    res.status(200).send(laptops);
}

const getLaptopHp = (req, res) => {
    res.status(200).send(laptops[0]);
}

const getLaptopLenovo = (req, res) => {
    res.status(200).send(laptops[1]);
}

const getLaptopAsus = (req, res) => {
    res.status(200).send(laptops[2]);
}

//routes
api.get('/laptop', getLaptop);

api.get('/laptopHp', getLaptopHp);

api.get('/laptopLenovo', getLaptopLenovo);

api.get('/laptopAsus', getLaptopAsus);

//base route
app.use('/api', api);

const port = 40000;

app.listen(port, () => {
    console.log('listening on http://localhost:' + port)
});