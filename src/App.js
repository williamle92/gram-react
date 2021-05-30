import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from './views/Profile'
import Register from './views/Register'
import Navbar from './components/Navbar'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <main className='container'>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>

        </main>
      </div>
    )
  }
}
