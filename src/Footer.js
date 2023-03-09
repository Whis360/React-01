import React from 'react'
import './App.css';
import iftl from '../src/img/iftl.svg'

const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <p className='copyright'>
          Copyright ©  {today.getFullYear()}  HooBank . All Rights Reserved.
          <img src={iftl} alt="" />
        </p>
    </footer>
  )
}

export default Footer
