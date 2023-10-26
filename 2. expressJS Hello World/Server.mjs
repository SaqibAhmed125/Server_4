console.log("This is express server hello world");

// it is an old code es5 common JS module
// es Module me convert kya ja skta he.
// const express = require('express')

import express from 'express';

const app = express()
const port = 3001

// http://192.168.210.35:3000/profile
// 404 Error

app.get('/', (req, res) => {
    console.log('Hello World!', new Date());
    res.send('Hello World!' + new Date());
})

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`);
    res.send('this is profile' + new Date());
})


