import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import { useContext } from 'react'
import AuthContext from './store/authContext'
import Home from './components/Screens/HomeScreen';
import Dashboard from './components/NavScreens/Dashboard/Dashboard';
import Competitions from './components/NavScreens/Competitions/Competitions';
import Trainings from './components/NavScreens/Trainings/Trainings';
import Products from './components/NavScreens/Shop/Products/Products';
import Leads from './components/NavScreens/Dashboard/Leads/Leads';
import Form from './components/NavScreens/Dashboard/Leads/Form';
import Auth from './components/Auth';
import Directory from './components/NavScreens/Dashboard/Users/Directory'
import MyAccountCard from './components/NavScreens/Dashboard/Users/MyAccountCard';
import UsersCard from './components/NavScreens/Dashboard/Users/UsersCard';
import LeadsCard from './components/NavScreens/Dashboard/Leads/LeadsCard';

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
        <Route path='/competitions' element={<Competitions />} />
        <Route path='/products' element={<Products />} />
        <Route path='/training' element={<Trainings />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/leads' element={<Leads/>} />
        <Route path='/newlead' element={<Form/>} />
        <Route path='/auth' element={<Auth />}/>
        <Route path='/directory' element={<Directory />}/>
        <Route path='/myaccount' element={<MyAccountCard />}/>
        <Route path='/user/:id' element={<UsersCard />}/>
        <Route path='/leads/:id' element={<LeadsCard />}/>

      </Routes>
        )
      }
    </div>
  );
}

export default App;
