const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const redis = require('redis')
const app = express()

const manageError = (error, res) => {
  console.error(error)
  res.status(500).send(error)
}

const config = require('../env.json')[process.env.NODE_ENV || 'development'];
const redisClient = redis.createClient({
  host: config.REDIS_SERVER,
  port: 6379
})

redisClient.on('error', error => console.error(error))
redisClient.on('ready', _ => console.log('Connected to Database'))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/:quoteId', (req, res) => {
  console.log(`Received ${req.method} with path ${req.path}`)
  let quoteId = req.params.quoteId
  redisClient.get(`like:${quoteId}`, function (error, like) {
    if (error) {
      manageError(error, res)
    }
    let evaluation = {
      like: !like ? 0 : parseInt(like),
      dislike: null,
      total: null
    }
    redisClient.get(`dislike:${quoteId}`, function (error, dislike) {
      if (error) {
        manageError(error, res)
      }
      evaluation.dislike = !dislike ? 0 : parseInt(dislike)
      evaluation.total = evaluation.like - evaluation.dislike
      res.json(evaluation)
    })
  })
})

app.post('/:quoteId/like', (req, res) => {
  console.log(`Received ${req.method} with path ${req.path}`)
  let quoteId = req.params.quoteId
  redisClient.incr(`like:${quoteId}`, function (error, _) {
    if (error) {
      manageError(error, res)
    }
    res.sendStatus(200)
  })
})

app.post('/:quoteId/dislike', (req, res) => {
  console.log(`Received ${req.method} with path ${req.path}`)
  let quoteId = req.params.quoteId
  redisClient.incr(`dislike:${quoteId}`, function (error, _) {
    if (error) {
      manageError(error, res)
    }
    res.sendStatus(200)
  })
})

app.listen(3000, function () {
  console.log('listening on 3000')
})
