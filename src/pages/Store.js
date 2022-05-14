import React, { useState } from 'react'
import './Store.css'
import CreditHeader from '../components/CreditHeader'
import PaymentScreen from '../components/PaymentScreen';
import SuccessScreen from '../components/SuccessScreen';

const Store = () => {
    const [view, setView] = useState(0);
  return (
      <div className='store'>
        <CreditHeader />
        {view === 0 && 
        <div className="container">
            <img className='cib' src="assets/cib.png" alt="" />
            <div className='cards'>
                <div className='card'>
                    <img src="/assets/2000.png" alt="" onClick={() => setView(1)} />
                </div>
                <div className='card right'>
                    <img src="/assets/5000.png" alt="" onClick={() => setView(1)} />
                </div>
                <div className='card'>
                    <img src="/assets/10000.png" alt="" onClick={() => setView(1)} />
                </div>
                <div className='card right'>
                    <img src="/assets/20000.png" alt="" onClick={() => setView(1)} />
                </div>
            </div>
        </div>
        }
        {view === 1 &&
        <div className="container">
            <PaymentScreen onClick={setView} />
        </div>}
        {
            view === 2 &&
            <div className="container">
                <SuccessScreen onClick = {setView} />
            </div>
            
        }
      </div>
  )
}

export default Store