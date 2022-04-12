const {v4: uuidv4} = require('uuid')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

const connectionString = 'mongodb://app-user:app-user-password@localhost:27017/?authSource=admin'

const manageError = (error, res) => {
  console.error(error)
  res.status(500).send(error)
}

MongoClient.connect(connectionString, {useUnifiedTopology: true})
  .then(client => {
    console.log('Connected to Database')

    const db = client.db('my-quotes-app')
    let quotesCollection = db.collection('quotes')

    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    app.get('/', (req, res) => {
      console.log(`Received ${req.method}`)
      quotesCollection
        .find({active: true}, {projection: {_id: 0, active: 0}}).toArray()
        .then(results => {
          res.json(results)
        })
        .catch(error => manageError(error, res))
    })

    app.get('/:quoteId', (req, res) => {
      console.log(`Received ${req.method} with quoteId ${req.params.quoteId}`)
      quotesCollection
        .findOne({id: req.params.quoteId}, {projection: {_id: 0}})
        .then(result => {
          res.json(result)
        })
        .catch(error => manageError(error, res))
    })

    app.post('/', (req, res) => {
      console.log(`Received ${req.method}`)
      let quote = req.body
      quote.id = uuidv4()
      quote.active = true
      quotesCollection
        .insertOne(quote)
        .then(_ => {
          res.status(201).send(quote)
        })
        .catch(error => manageError(error, res))
    })

    app.put('/:quoteId', (req, res) => {
      console.log(`Received ${req.method} with quoteId ${req.params.quoteId}`)
      let quote = req.body
      quotesCollection
        .findOneAndUpdate(
          {id: req.params.quoteId},
          {
            $set: {
              text: quote.text,
              author: quote.author,
              submitter: quote.submitter
            }
          },
          {projection: {_id: 0}})
        .then(_ => {
          res.sendStatus(200)
        })
        .catch(error => manageError(error, res))
    })

    app.delete('/:quoteId', (req, res) => {
      console.log(`Received ${req.method} with quoteId ${req.params.quoteId}`)
      quotesCollection
        .findOneAndUpdate(
          {id: req.params.quoteId},
          {
            $set: {
              active: false
            }
          }
        )
        .then(_ => {
          res.sendStatus(200)
        })
        .catch(error => manageError(error, res))
    })
    app.listen(3000, function () {
      console.log('listening on 3000')
    })
  })
  .catch(error => console.error(error))
