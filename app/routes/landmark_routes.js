// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Landmark = require('../models/landmark')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

router.post('/landmarks', requireToken, (req, res, next) => {
  // If we've required a token (and the user sent one)
  // we will have `req.user`
  console.log('The user object:', req.user)
  console.log('The incoming event data:', req.body)
  const landmarkData = req.body.landmark
  landmarkData.owner = req.user._id

  Landmark.create(landmarkData)
    .then(landmark => {
      res.status(201).json({ landmark })
    })
    .catch(next)
})

router.get('/landmarks', requireToken, (req, res, next) => {
  // need to find all of my landmarks, so no need for id
  const userID = req.user._id
  Landmark.find({ owner: userID })
  // grabbing the all landmarks made and storing it in a array
    .then(landmarks => {
      return landmarks.map(landmark => landmark.toObject())
    })
    .then(landmarks => res.status(200).json({ landmarks }))
    // displaying our user obejct and data
  console.log('The user object:', req.user)
  console.log('The incoming event data:', req.body)
    .catch(next)
})

router.get('/landmarks/:id', requireToken, (req, res, next) => {
  // need to find a specific landmark, tracking it by id
  // requiring the parameter's id - this is how we find the landmark's id
  Landmark.findById(req.params.id)
    .then(handle404)
    .then(landmark => res.status(200).json({ landmark: landmark.toObject() }))
  console.log('The user object:', req.user)
  console.log('The incoming event data:', req.body)
    .catch(next)
})

router.patch('/landmarks/:id', requireToken, removeBlanks, (res, req, next) => {
  const landmarkData = req.body.landmark
  delete landmarkData.owner

  Landmark.findById(req.params.id)
    .then(handle404)
    .then(landmark => {
      requireOwnership(landmark, req.user)
      return landmark.updateOne(landmarkData)
    })
  console.log('The user object:', req.user)
  console.log('The incoming event data:', req.body)
    .then(res.send(204))
    .catch(next)
})

router.delete('/landmarks/:id', requireToken, (req, res, next) => {
  Landmark.findById(req.params.id)
    .then(handle404)
    .then(landmark => {
      requireOwnership(landmark, req.user)
      landmark.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})
module.exports = router
