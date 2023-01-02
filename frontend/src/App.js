import { useState, useEffect } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import LoginForm from "./components/LoginForm";

import blogService from "./services/blogService";

const App = () => {
  const [blogs, setBlogs] = useState(null);

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
