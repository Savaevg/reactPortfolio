import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Navbar from './components/Header/Navbar/Navbar';
import Port from './components/Port/Port';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Navbar />
        <Routes>
          <Route path='/' element={<Port/>} />
          <Route path='/home' element={<Port />} />
          <Route path='/about' element={<About />}/>
          <Route path='/skills' element={<Skills />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
