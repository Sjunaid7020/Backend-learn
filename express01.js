//express framework for node.js
//express use case => routing
//routing => GET POST PUT PATCH DELETE

const express = require('express')
const app = express()

app.use(function (req, res, next){
  console.log('hello from middelware ')
  next()
});

app.use(function (req, res, next) {
  console.log("hello again")
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile', function (req, res) {
    res.send('Hello from profile')
  })

app.listen(3000)