

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


// pages

import Home from 'pages/Home'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'
import Post from 'pages/Post'
import Profile from 'pages/Profile'
import Search from 'pages/Search'


const Paths = () => {
  return (
<>

<BrowserRouter>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/contact' element={<Contact />} />
<Route path='/login' element={<Login />} />
<Route path='/profile' element={<Profile />} />

<Route path='/post/:idPost' element={<Post />} />
<Route path='/search/:word_search' element={<Search />} />

<Route path='/about' element={<About />} />
<Route path='/notfound' element={<NotFound />} />

<Route path='*' element={<NotFound />} />
</Routes>
</BrowserRouter>

</>
  );
}

export default Paths;