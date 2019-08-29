const express = require('express')
const router = express.Router()
const Snkr = require('../models/Snkrs')


// Route  /api/snkr
// Method GET
// Desc   At a snkr to thr database
router.get('/', async (req, res) => {

    try {
        const snkrs = await Snkr.find()
        res.json(snkrs)

    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
    }

})

// Route  /api/snkr
// Method POST
// Desc   At a snkr to thr database
router.post('/', async (req, res )=> {
    try {
    const {name, tech, colorway, releaseDate} = req.body

    const newSnkr = new Snkr({
        name, tech, releaseDate, colorway
    })
    const snkr = await newSnkr.save()
    res.json(snkr)
    } catch (err) {
        console.error(err)
        res.status(500).send(err.message)
    }
})

// Route /api/snkr/:id
// Method GET
// Desc   retrieve snkr by id

router.get('/:id', async (req, res)=> {
    try {
        const snkr = await Snkr.findById(req.params.id)
        if(!snkr) return res.status(400).send('This Snkr is not in our datbase')

        res.json(snkr)
        
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId")
          return res.status(404).json({ msg: "Snkr not found" });
        res.status(500).send(err.message)
        
    }
})

// Route /api/snkr/:id
// Method PUT
// Desc   update snkr by id

router.patch('/:id', async (req, res)=> {
    const {tech, colorway, releaseDate, name} = req.body;

    let snkrFields = {}

    if(tech) snkrFields.tech = tech
    if(name) snkrFields.name = name
    if(colorway) snkrFields.colorway = colorway.split(",").map(colors => colors.trim())
  
    if(releaseDate) snkrFields.releaseDate = releaseDate
()
    try {
        let snkr = await Snkr.findById(req.params.id)

        if (!snkr) return res.status(400).send('This Snkr is not in our datbase')

            snkr = await Snkr.findByIdAndUpdate(
                {_id: req.params.id},
                {$set: snkrFields},
                {new: true}
            )

        res.json(snkr)
        
    } catch (err) {
        console.error(err)
        res.status(500).send(err.message)
        
    }
})









module.exports = router