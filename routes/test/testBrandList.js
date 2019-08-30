const express = require('express')
const router = express.Router()
const TestBrand = require('../../models/test/TestBrandList')

//GET all brands
router.get('/', async (req, res) => {

    try {
        const brands = await TestBrand.find()
        res.json(brands)

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})

// POST add a brand
router.post('/', async (req, res) => {
    const { name, creator } = req.body
    const newBrand = new TestBrand({
        name,
        creator
    })

    const brand = await newBrand.save()

    res.json(brand)
})


module.exports = router