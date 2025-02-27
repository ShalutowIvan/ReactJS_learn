import { useState } from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
// import './App.css'


import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Blogpage from './pages/Blogpage';
import Notfoundpage from './pages/Notfoundpage'; 
import Singlepage from './pages/Singlepage'; 
import Createpost from './pages/Createpost'; 
import Editpost from './pages/Editpost'; 

import Layout from './components/Layout'




function App() {
  

  return (
    <BrowserRouter>

      
      


      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />        
          <Route path="posts" element={<Blogpage />} />
          {/*<Route path="posts/:id/:group" element={<Singlepage />} />*/}
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/new" element={<Createpost />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>




      {/*<h1>Hello</h1>
      <h1>Привет</h1>
      <Homepage />
      <Aboutpage />
      <Blogpage />*/}






    </BrowserRouter>
  )
}

export default App
