import React from 'react'
import ReactDOM from 'react-dom/client';
import Navbar from '../src/Components/Navbar/Navbar'
import Header from '../src/Components/Header/Header'
import About from '../src/Components/About/About'
import Projects from '../src/Components/Projects/Projects'
import Form from './Components/Form/Form'
import Contact from './Components/Contact/Contact'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    <Form/>
    <Contact/>
  </React.StrictMode>
);


