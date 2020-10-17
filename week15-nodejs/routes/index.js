const route = require('express').Router()
const admin = require('./admin')

route.use('/admin', admin)
module.exports = route