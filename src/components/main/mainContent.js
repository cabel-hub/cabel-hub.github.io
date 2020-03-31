import React, {
    Component
} from 'react';

import './mainContent.css';

import {
    Link
} from 'react-router-dom';

import Header from '../headerComponent/header.js';


import Background from '../background/background.js';
import mobileBackgroundImage from './mainImg/citrus1.png';
import bgVideoMp4 from './videoplayback.mp4';
import bgVideoWeb from './videoplayback.webm'




class MainContent extends Component {


constructor() {
  super();
  this.state = {
    width: window.innerWidth,
  };
}
    
    componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}
    
    // make sure to remove the listener
// when the component is not mounted anymore
componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};


    render() {
const { width } = this.state;
  const isMobile = width <= 900;

        
        if (isMobile){
        return (



            <div className = "mainContentMobile" >

            <img src= {mobileBackgroundImage}/>


            <Header / >




            </div>
        );}
        else{
            return(
                <body>
            <div className ="mainContent">
            <video  
            playsinline autoPlay muted loop style = {
                {
                    position: "fixed",
                    marginleft: "auto",
                    marginright: "auto",
                    height: "100%",
                    left: 0,
                    top: 0
                }
            } >

            <source src = {
                bgVideoWeb
            } type = "video/webm" />
                
            <source src = {
                bgVideoMp4
            } type = "video/mp4" / >
           
            Your Browser does not Support the Video 
                
                </video>
                
                <Header/>
                
           </div>
                </body>
            );
            
            
            
            
        }
    }
}

export default MainContent;