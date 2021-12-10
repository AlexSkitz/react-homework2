import React, { Fragment, Component } from 'react';
import './App.css';
import RangeInput from './Components/RangeInput.jsx';
import LoginPassword from './Components/LoginPassword.jsx'

class App extends Component {
  render() {
    return (
      <Fragment>
        <RangeInput />
        <LoginPassword />
      </Fragment>
    );
  }
};



export default App;
