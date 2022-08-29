const express = require('express')

const app = express()

const consign = require('consign')

consign().include('./routes').into(app)

app.use(express.static('./src/'))

const porta = process.env.PORT || 9500

module.exports = {app,porta}