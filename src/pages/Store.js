import React from 'react'
import './Store.css'
import CreditHeader from '../components/CreditHeader'

const Store = () => {
  return (
      <div className='store'>
        <CreditHeader />
        <div className="container">
            <img src="assets/cib.png" alt="" />
            <div className='card'>
                <img src="/assets/2000.png" alt="" />
            </div>
            <div className='card right'>
                <img src="/assets/5000.png" alt="" />
            </div>
            <div className='card'>
                <img src="/assets/10000.png" alt="" />
            </div>
            <div className='card right'>
                <img src="/assets/20000.png" alt="" />
            </div>
        </div>
      </div>
  )
}

export default Store