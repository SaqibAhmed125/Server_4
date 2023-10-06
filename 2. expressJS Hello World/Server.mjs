console.log("This is express server hello world");

// it is an old code es5 common JS module
// es Module me convert kya ja skta he.
// const express = require('express')

import express from 'express';

const app = express()
const port = 3001

app.get('/', (req, res) => {

  res.send('Hello World!')
})
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


