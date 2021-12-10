import React, { Fragment, Component } from 'react';
import './App.css';
import RangeInput from './Components/RangeInput.jsx';
import LoginPassword from './Components/LoginPassword.jsx'
import Films from './Components/Films.jsx'

class App extends Component {
  render() {
    return (
      <Fragment>
        <RangeInput />
        <LoginPassword />
        <Films />
      </Fragment>
    );
  }
};



export default App;
