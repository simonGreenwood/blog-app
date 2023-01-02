import { useEffect, useState } from 'react';

import blogService from '../services/blogService';

import Blog from './Blog';

const BlogList = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs))
  }, [])
  return blogs ? (
    <div>
      <h2>Blogs</h2>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  ) : null
}
export default BlogList