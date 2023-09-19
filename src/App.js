import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

const App = () =>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App;