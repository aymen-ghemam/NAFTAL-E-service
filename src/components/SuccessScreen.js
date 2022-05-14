import './SuccessScreen.css'; 
import React from 'react'

const SuccessScreen = (props) => {
  return (
    <div className='success-screen'> 
      <div className='checked-screen'>
          <img onClick={()=> props.onClick(0)} className="success-img" src="../../assets/checked.svg" alt=''/>  
          <h2>Success!</h2>
          <p>Your account has been charged</p>
      </div>
    </div>
  )
}

export default SuccessScreen