 import React from 'react'
 import { Container } from 'react-bootstrap';
 import courses from "../assets/Images/Courses.png";
 import hours from "../assets/Images/Hours.png";
 import live from "../assets/Images/Live.png";
 import scholar from "../assets/Images/Scholar.png";
 import ads from "../assets/Images/Ads.png";
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import FormPage from './FormPage';
 
 const LeftComponent = () => {
   return (
      <>
        <Container fluid>
          <Row>
            <Col md={6} lg={6} className='container-col1'>
              <h1 className='heading1'>Access curated courses worth</h1>        
              <h1 className='heading2'>₹<span className='txt-decor'> 18,500</span> at just <span className='clr-txt'>₹ 99</span> per year!</h1>
              <div style={{display:'flex', paddingTop:'20px'}}>
                <img src={courses} alt="courseImg" /> 
                 <p className='paragraph'><span className='clr-txt'>100+</span> Job relevant courses </p>
              </div>
              <br/>

              <div style={{display:'flex'}}>
                <img src={hours} alt="hourImg" /> 
                <p className='paragraph'><span className='clr-txt'>20,000+</span> Hours of content</p>
              </div>
              <br/>

              <div style={{display:'flex'}}>
               <img src={live} alt="liveImg" /> 
               <p className='paragraph'><span className='clr-txt'>Exclusive</span> webinar access</p>
              </div>
              <br/>

              <div style={{display:'flex'}}>
               <img src={scholar} alt="scholarImg" /> 
               <p className='paragraph'>Scholarship worth <span className='clr-txt'>₹94,500</span></p>
              </div>
              <br/>

              <div style={{display:'flex'}}>
                <img src={ads} alt="adsImg"/>
                <p className='paragraph'><span className='clr-txt'>Ad Free</span> learning experience</p>
              </div>
           </Col>

           <Col md={6} lg={6} className='container-col2'>
             <FormPage />
           </Col>
         </Row>
       </Container>
     </>
   )}
 
 export default LeftComponent;