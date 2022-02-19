import React from 'react';
import { Routes,
  Route} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

export default function Router() {
 
  return (
    
      <Routes className='Routing'>
        <Route exact path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
      </Routes>
  );
}