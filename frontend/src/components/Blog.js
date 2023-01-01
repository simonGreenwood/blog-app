const Blog = ({ blog }) => {
  
  return (
    <div>
      <h2>{blog.title} by {blog.author} on {blog.date}</h2>
      {blog.content}
    </div>
  )
}
export default Blog