const Blog = ({ blog }) => {
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>by {blog.author} on {blog.date}</p>
      <p>{blog.content}</p>
    </div>
  )
}
export default Blog