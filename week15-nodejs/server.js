const express = require('express')
const app = express()
const PORT = 5000

//body-parser express
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))

//routers in index.js
const router = require('./routes/index')
app.use('/', router)

app.listen(PORT, (err) => {
    if(err) console.log(err)
    console.log(`Server running on port ${PORT}`)
})
