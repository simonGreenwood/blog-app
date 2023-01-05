const express = require('express')
const app = express()

const blogRouter = require('./controllers/blog')
const userRouter = require('./controllers/user')
const loginRouter = require('./controllers/login')

const cors = require('cors')
app.use(cors())

const logger = require('./utils/logger')

app.use(express.json())
app.use("/api/blogs", blogRouter)
app.use("/api/users", userRouter)
app.use("/api/login", loginRouter)

const { MONGODB_URI, PORT } = require('./utils/config')
const mongoose = require('mongoose')
logger.info("Connecting to MongoDB, URI:", MONGODB_URI)
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message)
  })

module.exports = app