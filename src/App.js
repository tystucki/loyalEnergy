import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Screens/Home';
import Calendar from './components/NavScreens/Calendar';
import Competitions from './components/NavScreens/Competitions';
import Shop from './components/NavScreens/Shop';
import Trainings from './components/NavScreens/Trainings';


function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/competitions' element={<Competitions />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/trainings' element={<Trainings />} />
      </Routes>

     
    </div>
  );
}

export default App;
