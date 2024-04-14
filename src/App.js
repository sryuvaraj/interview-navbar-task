import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Componets/Home';
import About from './Componets/About';
import Contact from './Componets/Contact';
import NavComponent from './Componets/NavComponent';

function App() {
  return (
    <div className="App">
      <NavComponent/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
