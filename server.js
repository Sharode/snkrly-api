const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path')
const connectDB = require('./config/db')

const morgan = require('morgan')

//import Routes
const brandList = require('./routes/brandlist')
const snkrs = require('./routes/snkrs')
//Test Mode Routes
const testbrandList = require('./routes/test/testBrandList')
const testsnkrs = require('./routes/test/testSnkrs')

//initialize Db
connectDB()


//initialize middlware
app.use(cors())
app.use(express.json({ extended: false }));
app.use(morgan('dev'));

//Define Routes
app.use('/api/snkrs', snkrs)
app.use('/api/brands', brandList)

// Test mode routes
app.use('/api/test/snkrs', testsnkrs)
app.use('/api/test/brandlist', testbrandList)



// Error handling for undefined request
app.use(function (req, res, next) {
  res.status(404).json({ status: 404, err: 'This page does not exist' })
  console.log(res.statusCode)



});


// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))