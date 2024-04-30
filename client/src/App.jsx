import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Project from './pages/project';
import Signin from './pages/signin';
import Signup from './pages/signup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
