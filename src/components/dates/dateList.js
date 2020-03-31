import React, { Component } from 'react';


import {
    Link
}from 'react-router-dom';

import Header from '../headerComponent/header.js';

class DateList extends Component {
    render() {
        return(
           
            
            
            <div>
            
            
            <ul>
            <li>20.10.2019 - Capri Bar</li>
            <li>to be announced</li>
            <li>to be announced</li>
            </ul>
            <Link to='/' className="link">X</Link>
            </div>
        );
    }
}

export default DateList;
