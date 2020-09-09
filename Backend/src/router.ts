import express from 'express'

import UserController from './controllers/userController'
import ContaController from './controllers/contaController'
import ContaOperacoesController from './controllers/contaOperacoesController'


const userController = new UserController()
const contaController = new ContaController()
const contaOperacoesController = new ContaOperacoesController()


const routes = express.Router()

routes.get("/user/:cpf", userController.index)
routes.get("/user", userController.show)
routes.post("/user", userController.create)
routes.put("/user", userController.update)
routes.delete("/user/:id", userController.delete)

routes.get('/conta/:id', contaController.index)
routes.post('/conta', contaController.create)
routes.put('/conta/codigo/', contaController.updateCodigos)
routes.put('/conta/limite/', contaController.update)
routes.delete('/conta/:id', contaController.delete)

routes.put('/conta/tranferencia', contaOperacoesController.transferencia)
export default routes