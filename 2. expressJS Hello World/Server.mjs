// console.log("This is express server hello world");
// console.log("This is the 2nd Time");

import express from 'express';
// app pora ka pra server
// port jus like air & Sea Port
// port kisi bhi jaga se bhr nklne ka raaste ko port khte hen.
// USB port
// rail way port nhi linguistic msla

// var cors = require('cors'); // old santax
import cors from 'cors';  // that is new version santax

const app = express();
app.use(cors())

// const port = 1000
// Enviornment Variable
// const port = process.env.PORT || 3000;

//Computer IP Address bhjo access krna he
// only for same wifi
// http://192.168.210.35:3000
// 175.107.203.27
// 152.16.1.82

app.get('/', (req, res) => {
    console.log('Hello world!', new Date());
    res.send('Hello World' + new Date());
})

app.get('/profile', (req, res) => {
    console.log('this is profile', new Date());
    res.send('this is profile' + new Date());
})

app.get('/weather/:cityName', (req, res) => {
    console.log('this is profile!', new Date());
    // res.send({
    //     city: 'Beijing',
    //     tempInC:    30,
    //     humidity:   56,
    //     high:   32,
    //     low:    18
    // });
    let weatherData = {
        karachi: {
            city: 'karachi',
            tempInC: 30,
            humidity: 56,
            high: 32,
            low: 18
        },
        london: {
            city: 'london',
            tempInC: 30,
            humidity: 56,
            high: 32,
            low: 18
        }
    }
    let userinputCityName = req.params.cityName.toLowerCase();
    console.log("userInputCityName: ", userinputCityName);

    let weatherDataToSend = weatherData[userinputCityName];

    // if(weatherDataToSend === undefined)  -> it is falsy value
    // so that it is :-
    if (weatherDataToSend) {
        res.send(weatherDataToSend);
    } else {
        res.status(404)
            .send(`weather data is not available for ${req.params.cityName}`);
            // params : URL prameters k lye params use krte hen


    }

})

// Enviornment Variable
// for specific person i.e. President
// Door for specified someone.
// Answer dega agr hoga

const port = process.env.PORT || 6060;
// call back function if properly run function call back chl jae ga
// railway platform ; Cyclic.

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// your not an real IP heye POOL ip It is Port Forwarding

// it is an old code es5 common JS module
// es Module me convert kya ja skta he.
// const express = require('express')

/*
import express from 'express';
// import path from 'path'
// import "dotenv/config"
const app = express()
// const port = 400

// http://192.168.210.35:3000/profile
// 404 Error

app.get('/', (req, res) => {
    console.log('Hello World!', new Date());
    res.send('Hello World!' + new Date());
})
app.get('/profile', (req, res) => {
    console.log('Hello World! Profile');
    res.send({
        name:"abc"
        ,namfather:"abc"
        ,"class":"web development"
    });
})


app.listen(400 || process.env.PORT, () => {

    console.log("Example app listening on port 400");
    // res.send('this is profile' + new Date());
})
*/

