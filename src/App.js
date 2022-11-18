import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Screens/HomeScreen';
import Dashboard from './components/NavScreens/Dashboard/Dashboard';
import Calendar from './components/NavScreens/Calendar';
import Competitions from './components/NavScreens/Competitions';
import Trainings from './components/NavScreens/Trainings';
import Products from './components/NavScreens/Shop/Products/Products';
import Leads from './components/NavScreens/Leads/Leads';
import Form from './components/NavScreens/Leads/Form';
import Auth from './components/Auth';

import { useContext } from 'react'

import AuthContext from './store/authContext'



function App() {
  const authCtx = useContext(AuthContext)

  console.log(authCtx)

  return (
    <div className="App">

        {!authCtx.token ?  (
            <Auth />
        ) : (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/competitions' element={<Competitions />} />
        <Route path='/products' element={<Products />} />
        <Route path='/trainings' element={<Trainings />} />
        <Route path='/products' element={<Products />} />
        <Route path='/leads' element={<Leads/>} />
        <Route path='/newlead' element={<Form/>} />
        <Route path='/auth' element={<Auth />}/>
      </Routes>  

        )
      }
   
    </div>
  );
}

export default App;
