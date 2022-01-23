import React from "react";
import About from "./About";
import Blog from "./Blog";
import Error from "./Error";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
      <Link to='/'>Home</Link> 
      <Link to='/about'>About</Link> 
      <Link to='/blog'>Blog</Link> 

        <Routes>
          / <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is Home Page</p>
    </div>
  );
};

export default App;
