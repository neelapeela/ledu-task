import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import * as MUI from '@mui/material'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;




