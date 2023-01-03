import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import LoginForm from "./components/LoginForm";

import { initializeBlogs } from "./reducers/blogReducer";

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


const App = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs);
  useEffect(() => {
    dispatch(initializeBlogs())
    console.log(blogs)
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />     
        <Routes> 
          <Route path="/create" element={<BlogForm />} />
          <Route path="/login" element={<LoginForm /> } />
          <Route path="/" element={<BlogList />} exact/>
         </Routes> 
      </Router>
    </div>
  );
};

export default App;
