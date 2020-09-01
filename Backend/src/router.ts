import express from 'express'

import UserController from './controllers/userController'


const userController = new UserController()


const routes = express.Router()

routes.get("/user/:id", userController.index)
routes.get("/user", userController.show)
routes.post("/user", userController.create)
routes.put("/user", userController.update)
routes.delete("/user/:id", userController.delete)



export default routes