import { useState } from "react";
import { createNew } from "../reducers/blogReducer";
import { useDispatch } from "react-redux";
const BlogForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("test");
  const [content, setContent] = useState("test");
  const submit = (event) => {
    event.preventDefault();
    console.log("submitting", title, content);
    dispatch(createNew({title, content}))
  }
  return (
    <div onSubmit={(e) => submit(e)} >
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