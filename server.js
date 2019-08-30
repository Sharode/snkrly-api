const express = require('express')
const app = express()
const connectDB = require('./config/db')

//import Routes
const brandList = require('./routes/brandlist')
const snkrs = require('./routes/snkrs')
//Test Mode Routes
const testbrandList = require('./routes/test/testBrandList')
const testsnkrs = require('./routes/test/testSnkrs')

//initialize Db
connectDB()


//initialize middlware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/snkrs', snkrs)
app.use('/api/brands', brandList)

// Test mode routes
app.use('/api/test/snkrs', testsnkrs)
app.use('/api/test/brandlist', testbrandList)


app.get('/', (req, res) => {
    res.send('Home page')
})




const PORT = process.env.port || 5000

app.listen(PORT, () => `listening on port ${5000}`)