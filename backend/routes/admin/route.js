const express                   = require('express')
const route                     = express.Router()
const { login, loggedAdmin }    = require('../../controllers/admincontroller');
const { jwtAuth }               = require('../../middleware/adminAuth');


route.post('/login', login)

route.get('/get_admin', loggedAdmin)



module.exports = route