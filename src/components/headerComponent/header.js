import React, { Component } from 'react';

import './headerStyle.css';




import {
    Link
}from 'react-router-dom';




class Header extends Component {
    render() {
        return(
            <div className="headerStyle">
                <header>
                    <h1>
                    RAGNA LEMONTREE 
                    </h1>
            <br/>
                    
                        <Link to='/dates' className="link">Daten</Link>
                            <br/>

                    



                </header>
            </div>
        );
    }
}

export default Header;


