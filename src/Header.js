import React from 'react'
import './App.css';
import discount from '../src/img/Discount.png';
import robo from '../src/img/robo.png';
import getstarted from '../src/img/getstarted.png';


const Header = () => {
  return (
    <header>
      <div className='next-gen'>
        
        <div className='grid-item'>
          
          <div className='discount'>
            
            <div className='bar'>
              <img className='logo-img' src={discount} alt="This is a logo" />
              <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
            </div>
            
            <div>
              <div className='anime'> 
                <p className='text'>The Next <br /> <p className='gen'>Generation</p> <br />Payment Method.</p>
                <img className='getstarted' src={getstarted} alt="This is an image" />  
              </div>
              
              <p className='text2'>Our team of experts uses a methodology to identify <br />
              the credit cards most likely to fit your needs.<br />
              We examine annual percentage rates, annual fees.</p>
            </div>

          </div>
        </div>

        <div className='grid-item'>
          <img className='robo' src={robo} alt="This is an image"/>
        </div>
      </div>

      <div className='user-active'>
        <div className='grid-item'>
          <p> 3800+  <p className='trust'>USER ACTIVE</p>  |  230+ <p className='trust'>TRUSTED BY COMPANY</p> |  $230M <p className='trust'>TRANSACTION</p></p>
        </div>
      </div>

    </header>
  )
}

export default Header