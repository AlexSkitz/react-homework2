import React, { Fragment, Component } from 'react';
import './App.css';
import RangeInput from './Pages/RangeInput.jsx';
import LoginPassword from './Pages/LoginPassword.jsx'
import Films from './Pages/Films.jsx'
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Routes>
          <Route path='/' element={<Navigate to='/input' />} />
          <Route path='/input' element={<RangeInput />} />
          <Route path='/login' element={<LoginPassword />} />
          <Route path='/films' element={<Films />} />
        </Routes>
      </>
    );
  }
};



export default App;
