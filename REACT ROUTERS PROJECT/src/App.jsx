import { useState } from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
// import './App.css'


import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Blogpage from './pages/Blogpage';
import Notfoundpage from './pages/Notfoundpage'; 
import Singlepage from './pages/Singlepage'; 



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
          <Route path="about" element={<Aboutpage />} />
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
