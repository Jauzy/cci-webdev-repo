const route = require('express').Router()
const AdminController = require('../controllers/admin')

route.get('/:token', AdminController.getAdminData)
route.post('/', AdminController.register)
route.put('/:id', AdminController.updateInfo)
route.post('/login', AdminController.login)
route.delete('/:id', AdminController.deleteAccount)

module.exports = route