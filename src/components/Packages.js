import React from 'react'
import './Packages.css'
import THIRTY from '../Images/30K.png'
import FOURTY from '../Images/40K.png'
import FIFTY from '../Images/50K.png'
import SIXTY from '../Images/60K.png'

const Packages = () => {
  return (
    <div className='Packages'>
      <div className='Packages_H'>
        <h3>Packages</h3>
      </div>
      <div className='Packages_'>
        <div className='Packages_Details1'>
          <img src={THIRTY} alt="30k" className='Package_Img1' />
          <h4 className='Package_Info'>TV+Free<br />Internet+5000 worth Groceries</h4>
        </div>
        <div className='Packages_Details'>
          <img src={FOURTY} alt="40k" className='Package_Img2' />
          <h4 className='Package_Info'>TV+Free<br />Internet+5000 worth Groceries</h4>
        </div>
        <div className='Packages_Details'>
          <img src={FIFTY} alt="50k" className='Package_Img3' />
          <h4 className='Package_Info'>TV+Free<br />Internet+5000 worth Groceries</h4>
        </div>
        <div className='Packages_Details'>
          <img src={SIXTY} alt="60k" className='Package_Img4' />
          <h4 className='Package_Info'>TV+Free<br />Internet+5000 worth Groceries</h4>
        </div>
      </div>
    </div>
  )
}

export default Packages