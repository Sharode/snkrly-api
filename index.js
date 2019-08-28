const express = require('express')
const app = express()
const connectDB = require('./config/db')

//import Routes
const brandList = require('./routes/brandlist')
const snkrs = require('./routes/snkrs')

//initialize Db
connectDB()


//initialize middlware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/snkrs', snkrs)
app.use('/api/brands', brandList)


app.get('/', (req, res) => {
    res.send('Home page')
})




const PORT = process.env.port || 5000

app.listen(PORT, () => `listening on port ${5000}`)