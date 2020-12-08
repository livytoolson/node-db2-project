const express = require('express');
const router = express.Router();
const Car = require('./cars-model');

router.get('/', async (req, res) => {
    try {
        const data = await Car.getAll()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await Car.getById(id)
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post('/', async (req, res) => {
    try {
        const newCar = req.body
        const data = await Car.create(newCar)
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;