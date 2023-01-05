const blogRouter = require('express').Router()
const Blog = require('../models/Blog')

blogRouter.get('/', (request, response) => {
  Blog.find({}).then(blogs => {
    response.json(blogs).status(200)
  })
})
blogRouter.post('/', (request, response) => {
  const blog = new Blog(request.body)
  blog.save().then(result => {
    response.status(201).json(result)
  })
})
blogRouter.delete('/:id', (request, response) => {
  Blog.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})
blogRouter.put('/:id', (request, response, next) => {
  const body = request.body
  const blog = {
    title: body.title,
    url: body.url,
    likes: body.likes,
  }
  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then(updatedBlog => {
      response.json(updatedBlog)
    })
    .catch(error => {
      next(error)
    })
}) 

module.exports = blogRouter