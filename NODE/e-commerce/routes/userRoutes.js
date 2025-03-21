const express = require('express')
const { getUser, addUser } = require('../controllers/userController')
const userRouter = express.Router()

userRouter.get('/', getUser)
userRouter.post('/', addUser)

module.exports ={
    userRouter
}