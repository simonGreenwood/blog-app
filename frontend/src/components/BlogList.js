import { useSelector } from 'react-redux';
import blogService from '../services/blogService';

import Blog from './Blog';

const BlogList = () => {
  const blogs = useSelector(state => state.blogs);
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