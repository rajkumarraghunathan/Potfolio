import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
// import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

import ScrollButton from './Components/ScrollButton';
import Footer from './Components/Footer';
import Contacts from './Components/Contacts';



function App() {
  return (
    <div className="App">
      <Home />
      <About />
      {/* <div className=' container divider'></div>
      <Education /> */}
      <div className=' container divider'></div>
      <Skills />
      <div className=' container divider'></div>
      <Projects />
      <div className=' container divider'></div>
      <Experience />
      <div className=' container divider'></div>
      <ScrollButton />
      <div className=' container divider'></div>
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
