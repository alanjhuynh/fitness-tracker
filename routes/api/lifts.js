const express = require('express');
const router = express.Router();

// Load Lift model
const Lift = require('../../models/Lift');


// @route GET api/lifts/test
// @description tests lifts route
// @access Public
router.get('/test', (req, res) => {
    res.send('Lift route testing.')
});

// ================================READ================================
// @route GET api/lifts
// @description Get all lifts
// @access Public
router.get('/', (req, res) => {
  Lift.find()
    .then(lifts => res.json(lifts))
    .catch(err => res.status(404).json({ noliftsfound: 'No lifts found' }));
});

// @route GET api/lifts/:id
// @description Get single lift by id
// @access Public
router.get('/:id', (req, res) => {
  Lift.findById(req.params.id)
    .then(lift => res.json(lift))
    .catch(err => res.status(404).json({ noliftfound: `No Lift with id "${req.params.id}" found` }));
});

// ===============================CREATE===============================
// @route GET api/lifts
// @description add/save lift
// @access Public
router.post('/', (req, res) => {
  Lift.create(req.body)
    .then(lift => res.json({ msg: 'Lift added successfully' }))
    .catch(err => res.status(400).json({ error: `Unable to add this lift: ${err}` }));
});

// ===============================UPDATE===============================
// @route GET api/lifts/:id
// @description Update lift
// @access Public
router.put('/:id', (req, res) => {
  Lift.findByIdAndUpdate(req.params.id, req.body)
    .then(lift => res.json({ msg: `Lift "${req.params.id}" updated successfully` }))
    .catch(err =>
      res.status(400).json({ error: `Unable to update the database for id "${req.params.id}"` })
    );
});

// ===============================DELETE===============================
// @route GET api/lifts/:id
// @description Delete lift by id
// @access Public
router.delete('/:id', (req, res) => {
  Lift.findByIdAndRemove(req.params.id, req.body)
    .then(lift => res.json({ msg: `Lift "${req.params.id}" deleted successfully` }))
    .catch(err => res.status(404).json({ error: `No Lift with id "${req.params.id}" found` }));
});

module.exports = router;