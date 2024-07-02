import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Reachout } from './pages/Reachout';
import { About } from './pages/About';
import { ThemeProvider } from './useContext/context';

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/reachout' element={<Reachout/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
