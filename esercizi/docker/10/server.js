const express = require('express')
const app = express()
const os = require("os");
const hostname = os.hostname();

const message = process.argv.slice(2).join(" ");

app.get('/', function (req, res) {
  var red = parseInt(req.query.red, 10)
  var green = parseInt(req.query.green, 10)
  var blue = parseInt(req.query.blue, 10)

  res.send("hello from " + (message.length > 0 ? message : hostname))
})

app.listen(3000)