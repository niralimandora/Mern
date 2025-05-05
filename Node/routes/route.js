const express= require("express")
const route = express.Router()
const ctl = require("../controller/ctl")
const multer = require("../middleware/multer")


route.post("/registerUser",ctl.register)
route.post("/loginUser",ctl.loginUser)



module.exports = route