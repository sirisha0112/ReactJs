 import React, { useState } from 'react';
 import icon1 from "../assets/Images/Icon 1.png";
 import icon2 from "../assets/Images/Icon 2.png";
 import Form from 'react-bootstrap/Form';
 import alrtIcon from "../assets/Images/alertIcon.png";
 import Button from 'react-bootstrap/Button';
 import Frame from "../assets/Images/Frame.png";

 const FormPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  } 

  return (
   <>
     <Form className='form-container'>
       <div className='icons'>
          <span> <img src={icon1} alt="iconImg1" /> <p className='signup'>Sign Up</p> </span>
          <span> <img src={icon2} alt="iconImg2" /> <p className='signup subscribe'>Subscribe</p> </span>
       </div>

       <h3 className='heading3'>Select your subcription plan</h3>
       
        <div className='subscription1'>
        <span>
          <Form.Check
            type="radio"
            disabled
            label= "12 Months Subscription" 
          />
          <p className='subs1-p1'>Offer expired</p>  
        </span>
        <p style={{paddingRight:'10px'}}>Total <span>₹99</span>
           <p style={{position:'relative', bottom:'5px'}}>₹8 /mo</p>
        </p> 
        </div>
    
        <div className='subscription2'>
        <span>
          <Form.Check
            type="radio"
            name='options'
            id='option1'
            label= "12 Months Subscription " 
            value="₹179"
            checked={selectedOption === "₹179"} onChange={handleOptionChange} 
          />
          <p className='subs2-p2'>Recommended</p>
        </span>
          <p style={{paddingRight:'10px'}}> Total <span>₹179</span>
             <p style={{position:'relative', bottom:'5px'}}>₹15 /mo</p>
          </p>
        </div>
   
        <div className='subscription3'>
         <Form.Check
           type="radio"
           name='options'
           id='option2'
           label= "6 Months Subscription " 
           value="₹149"
           checked={selectedOption === "₹149"} onChange={handleOptionChange} 
         />
         <p style={{paddingRight:'10px'}}>Total <span>₹149</span>
           <p style={{position:'relative', bottom:'5px'}}>₹25 /mo</p>
         </p>
        </div>
    
        <div className='subscription3'>
         <Form.Check
           type="radio"
           name='options'
           id='option2'
           label= "3 Months Subscription " 
           value="₹99"
           checked={selectedOption === "₹99"} onChange={handleOptionChange} 
         />
         <p style={{paddingRight:'10px'}}>Total <span>₹99</span>
           <p style={{position:'relative', bottom:'5px'}}>₹33 /mo</p>
         </p>
        </div>

        <hr />
        
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <p style={{paddingLeft:'12px'}}>
              Subscription Fee
            </p>
            <p style={{paddingRight:'12px'}}>
              ₹18,500   
            </p>
        </div>

        <div className=' subscription3 subscription4'>
           <span style={{padding:'10px'}}>
             <p style={{fontSize:'16px', paddingTop:'12px', color:'#DE4313'}}>Limited time offer</p> 
              <div style={{display:'flex', position:'relative', bottom:'14px'}}>
                <img src={alrtIcon} alt="iconImg1" style={{width:'20px', height:'20px'}}/>  &nbsp;&nbsp;&nbsp;
                <p >Offer valid till 25th March 2023 </p>
              </div>
           </span>
           <p style={{paddingRight:'20px'}}>- ₹18,401</p>                  
        </div>

        <div className='total-cont'>
            <p style={{paddingLeft:'12px'}}>
              Total (Incl. of 18% GST)
            </p>
            <p className='total-cont-p2'>
              {selectedOption}
            </p>
        </div>

        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Button variant="outline-danger" className='btn1'>Cancel</Button>{' '}    
          <Button variant="success" className='btn2'>Proceed to pay</Button>{' '}
        </div>

        <div style={{marginTop:'26px'}}>
          <img src={Frame} alt="frameImg" />
        </div>
      </Form>   
   </>
  )
}

export default FormPage;