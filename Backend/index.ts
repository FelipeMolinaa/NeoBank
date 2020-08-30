import express, { json } from 'express'

import routes from './src/router'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333)