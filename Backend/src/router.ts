import express from 'express'

import UserController from './controllers/userController'


const userController = new UserController()


const routes = express.Router()

routes.get("/user", userController.index)

export default routes