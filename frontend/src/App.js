import { useState, useEffect } from "react";

import Blog from "./components/Blog";
import BlogForm from "./components/BlogForm";
import LoginForm from "./components/LoginForm";

import blogService from "./services/blogService";

const App = () => {
  const [blogs, setBlogs] = useState(null);


  const submit = (event, title, content) => {
    event.preventDefault();
    console.log("submit");
    setBlogs(blogs.concat({ title: "Test Blog", content: "http://test.com" }))
  };

  useEffect(() => {
    blogService.getAll().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);

  return (
    <div className="App">
      {"placeholder" === null ? <LoginForm /> : <BlogForm submit={submit}/>}
      {blogs === null ? (
        <div>Loading...</div>
      ) : (
        <div>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}  />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
