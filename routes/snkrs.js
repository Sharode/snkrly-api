const express = require('express')
const router = express.Router()
const Snkr = require('../models/Snkrs')


//get all snkrs

router.get('/', async (req, res) => {

    try {
        const snkrs = await Snkr.find()
        res.json(snkrs)


    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
    }

})








module.exports = router