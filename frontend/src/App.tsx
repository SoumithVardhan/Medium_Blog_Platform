import "./App.css";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Blog } from "./pages/Blog";
import { Dashboard } from "./pages/Dashboard";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}/>
          <Route path="/signin" element={<Signin></Signin>}/>;
          <Route path="/signup" element={<Signup></Signup>}/>;
          <Route path="/blog/:id" element={<Blog></Blog>}/>;
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/publish" element={<Publish/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App