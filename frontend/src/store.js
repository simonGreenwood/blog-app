//use redux toolkit to create a new store
import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './reducers/blogReducer'
import { combineReducers } from 'redux'
const reducer = combineReducers({
  blogs: blogReducer
})
const store = configureStore({
  reducer
})
export default store
