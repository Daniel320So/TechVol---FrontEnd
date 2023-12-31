import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

// import components
import Home from './components/Home/Home'
import Post from './components/Post/Post'
import Application from './components/Application/Application'

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Post/:key?" element={<Post />} />
      <Route path="Application/:id" element={<Application />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
