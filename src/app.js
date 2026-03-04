import { getUsers, postUser } from './routes/users.routes.js'

import express from 'express'
const app = express()
const port = 3000

app.get('/users', getUsers)
app.post('/users', postUser)

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})