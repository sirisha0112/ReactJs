 import React from 'react';
 import TopNavbar from './components/TopNavbar';
 import LeftComponent from './components/LeftComponent';
import { Container } from 'react-bootstrap';
  
 const App = () => {
   return (
       <>
         <TopNavbar />   
           <div style={{backgroundImage: `url(${require('./assets/Images/Back.png')})`, 
            backgroundSize:'cover'}}>
          <LeftComponent />
         </div>
       </>
   )
 }
 
 export default App;
