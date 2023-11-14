import React from 'react'
import './Promo.css'
import PC from '../Images/Promo Card.png'

const Promo = () => {
    return (
        <div className='Promo'>
            <div className='Promo_Gradient'>
                <div className='Promo_Details'>
                    <h2 className='Only_Andriod'>Empower Your Lifestyle with Our All-in-One App.   <br /> Welcome to Seamless Living</h2>
                    <h2 className='Only_Desktop'>
                        Empower Your Lifestyle with Our All-in-One App. <br /> From Food to Spa, We've Got You Covered. <br /> Simplify Your Daily Needs, All at Your Fingertips. <br />Elevate Convenience and Quality with Every Service. <br /> Welcome to Seamless Living
                    </h2>
                </div>
                <div className='Promo_Card'>
                    <img src={PC} alt="Promo Card" />
                </div>
            </div>
        </div>
    )
}

export default Promo