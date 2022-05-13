import './SuccessScreen.css'; 
import CreditHeader from './CreditHeader';
import React from 'react'

const SuccessScreen = () => {
  return (
    <div className='success-screen'> 
    <CreditHeader/>
    <div className='checked-screen'>
        <img className="success-img" src="../../assets/checked.svg" alt=''/>  
        <p className="success-text">Success!</p>
        <p>Your account has been charged</p>
    </div>
    </div>
  )
}

export default SuccessScreen