const express = require('express')
const app = express()

app.set("view engine","ejs");
app.use(express.static('./public'))

app.use(function (req, res, next){
  console.log('hello from console')
  next()
})

app.get('/', function (req, res)   {
  res.render('index', {age:12})
})
app.get('/error', function (req, res, next)   {
  throw Error('somthing went wrong')
})

app.get('/contact', function (req, res)   {
  res.render('contact')
})

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  }
  )



app.listen(3000)