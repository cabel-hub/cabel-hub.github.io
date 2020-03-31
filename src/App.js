import React, { Component } from 'react';


import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Link
    
}from 'react-router-dom';


import citrus1 from './components/main/mainImg/citrus1.png';

//components
import Background from './components/background/background.js';
import MainContent from './components/main/mainContent.js';
import DateList from './components/dates/dateList.js';


class App extends Component {
  render() {
    return(
       
        <Router>
        
        
         <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro&display=swap" rel="stylesheet"/>
        
        
    <div className="App">
        
         
            
            
      
        
           
        <Route exact path ='/' component={MainContent}/>
       
        <Route exact path ='/dates' component={DateList}/>
        
        <Route exact path ='/video' component={Background}/>
       
 
      
    </div>
        
        </Router>
  );
  }
}

export default App;
