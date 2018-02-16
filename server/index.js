const express = require('express')
const parser = require('body-parser')
const logger = require('morgan')
const path = require('path')
const router = require('./router.js')

const port = 9001

const app = express()

app.use(parser.json())
app.use(parser.urlencoded({extended: true}))
app.use(logger('dev'))

app.use(express.static(path.join(__dirname, '../client')))

app.use(router)

app.listen(port, () => {
  console.log('Hey! Listening! port: ', port)
})