const express = require("express")
const router = express.Router()
const path=require("path")
const adminController = require(path.join(__dirname,'../controlles/admin/admin'))
const protectRoutes = require(path.join(__dirname,'./protect/protect'))
const Multer = require(path.join(__dirname,'../controlles/multer'))
// ______________________________________________________

router.get('/posts',adminController.posts)
router.get('/users',adminController.users)
router.post('/delete-user/:userId',adminController.deleteUser)

router.post('/edit-post/:postId',Multer.array('files', 10), adminController.editPost)
router.post('/delete-post/:postId',adminController.deletePost)


module.exports = router;