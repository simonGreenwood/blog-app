const Blog = ({ blog }) => {
  const date = new Date(blog.date).toDateString()
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>by {blog.author} on {date}</p>
      <p>{blog.content}</p>
    </div>
  )
}
export default Blog