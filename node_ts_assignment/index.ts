import express, { Request, Response } from 'express'
// importing router
import router from './router'
// importing logger middleware
import requestLogger from './middleware/loggerMiddleware'

const app = express()
const PORT = 3000

// for json request
app.use(express.json())
// api routes
app.use('/api/products', requestLogger, router)

// listening on port
app.listen(PORT, () => console.log(`Server running on ${PORT}`))