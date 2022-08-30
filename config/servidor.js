const express = require('express')

const app = express()

const consign = require('consign')

app.use(express.urlencoded({extended:false}))

consign().include('./routes').into(app)

app.use(express.static('./src/'))

const porta = process.env.PORT || 9500


module.exports = {app,porta}