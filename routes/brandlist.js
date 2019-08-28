const express = require('express')
const router = express.Router()
const Brand = require('../models/BrandList')


//GET all brands
router.get('/', async (req, res) => {

    try {
        const brands = await Brand.find()
        res.json(brands)

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})

// POST add a brand
router.post('/', async (req, res) => {
    const { name, creator } = req.body
    const newBrand = new Brand({
        name,
        creator
    })

    const brand = await newBrand.save()

    res.json(brand)
})


module.exports = router