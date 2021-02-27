const express = require("express")
const path=require("path")
const router = express.Router()
const homeControlles = require(path.join(__dirname,'../controlles/home/home'))

router.get('/searching',homeControlles.searching)
router.get('/',homeControlles.homePage)
module.exports = router