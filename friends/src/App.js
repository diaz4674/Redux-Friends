import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FriendsList from './components/FriendsList'
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import './App.css';

function App() {
  return (
    <div>
    <div>
  <Route path = "/Login" component = {Login} />

    </div>
  <div>
    <PrivateRoute exact path = "/protected" component = {FriendsList} />

  </div>
  </div>
  );
}

export default App;
