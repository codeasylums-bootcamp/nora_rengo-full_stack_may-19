import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route ,Link} from 'react-router-dom'
import Header from './common/Header'
import Signin from './Signin.js'
import Toggle from './Toggle'
import UserFeed from './UserFeed.js'
import Home from './Home'
import { SettingsBackupRestore, SettingsInputComposite } from 'material-ui-icons';
function App() {
  return (
    <Router>
          
      <Route path="/" exact component={Home}/>
      <Route path='/user/:userid/:token' exact component={UserFeed}/>
      

        
     
      <Route path="/signin" exact component={Signin}/>
      <Route path='/toggle' exact component={Toggle}/>           
      
    </Router>
  );
}

export default App;

