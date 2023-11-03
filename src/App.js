// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './layout/Layout';
import SingleBlog from './pages/SingleBlog';
import AddBlog from './pages/AddBlog';



function App() {


  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout />} > 
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="AddBlog" element={<AddBlog />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
