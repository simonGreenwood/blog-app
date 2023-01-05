const userRouter = require('express').Router()

const User = require('../models/User')
const bcrypt = require('bcrypt')
userRouter.get("/", (request, response) => {
  response.send("Hello World!")
})
userRouter.post("/", async (request, response) => {
  const {name, username, password} = request.body
  if (!password || password.length < 3) {
    return response.status(400).json({
      error: 'password missing/invalid'
    })
  }
  if (!(username || name)) {
    return response.status(400).json({
      error: 'missing username or name'
    })
  }
  const passwordHash = await bcrypt.hash(password,10);
  const user = await User.create({name, username, passwordHash})
  response.json(user).status(201)
})
module.exports = userRouter