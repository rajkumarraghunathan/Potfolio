import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import ScrollButton from './Components/ScrollButton';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <div className=' container divider'></div>
      <Education />
      <div className=' container divider'></div>
      <Skills />
      <div className=' container divider'></div>
      <Experience />
      <div className=' container divider'></div>
      <Projects />
      <div className=' container divider'></div>
      <Contacts />
      <ScrollButton />

    </div>
  );
}

export default App;
