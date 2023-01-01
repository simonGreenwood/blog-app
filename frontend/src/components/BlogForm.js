import { useState } from "react";
const BlogForm = ({ submit }) => {
  
  const [title, setTitle] = useState("test");
  const [content, setContent] = useState("test");

  return (
    <div onSubmit={submit}>
      <h2>Create a new blog</h2>
      <form>
        <div>title <input type="text" value={title} onChange={e => setTitle(e.target.value)}  id="title-input"/></div>
        <div>content <input type="text" value={content} onChange={e => setContent(e.target.value)} id="content-input"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  );
}
export default BlogForm