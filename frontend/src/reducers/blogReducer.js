import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogService'

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload)
    },
    setBlogs: (state, action) => {
      state = action.payload
    }
  }
})
export const { addBlog, setBlogs } = blogSlice.actions

export const createNew = (blog) => {
  return async dispatch => {
    const date = new Date().toISOString()
    const blogToCreate = {
      ...blog,
      date
    }
    const newBlog = await blogService.createNew(blogToCreate)
    console.log("new blog", newBlog)
    addBlog(newBlog)
    console.log(dispatch)
  }
}
export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
    console.log(blogs)
  }
}
export default blogSlice.reducer