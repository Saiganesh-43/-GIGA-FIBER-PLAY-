import React from 'react'
import './Products.css'
import P1 from '../Images/P1.png'
import P2 from '../Images/P2.png'
import P3 from '../Images/P3.png'
import P4 from '../Images/P4.png'
import P5 from '../Images/P5.png'
import P6 from '../Images/P6.png'
import P7 from '../Images/P7.png'
import P8 from '../Images/P8.png'
import P9 from '../Images/P9.png'
import P10 from '../Images/P10.png'
const Productdetails = ({ id, image, price, title, discount }) => {
    return (
        <div className='Product_Details'>
            <div className='Product_Image'>
                <img src={image} alt="Product_Image" />
            </div>
            <div className='Product_Info'>
                <p className='Product_Price'>
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <p className='Product_Title'>{title}</p>
                <h5 className='Discount'>
                    {discount}
                    <strong>%</strong>
                    <strong>Off</strong>
                </h5>
            </div>
        </div>
    )
}
const Products = () => {
    return (
        <div className='Products'>
            <div className='Products_H'><h3>Best Offers On Daily Essentials</h3></div>
            <div className='All_Products'>
                {/* <div className='Products_U5'> */}
                <Productdetails
                    id="123456"
                    image={P1}
                    price={10}
                    title='saiganesh'
                    discount={44}
                />
                <Productdetails
                    id="123456"
                    image={P2}
                    price={10}
                    title='saiganesh'
                    discount={44}
                />
                <Productdetails
                    id="123456"
                    image={P3}
                    price={10}
                    title='saiganesh'
                    discount={44}
                />
                <Productdetails
                    id="123456"
                    image={P4}
                    price={10}
                    title='saiganesh'
                    discount={44}
                />
                <Productdetails
                    id="123456"
                    image={P5}
                    price={10}
                    title='saiganesh'
                    discount={44}
                />
                {/* </div> */}
                {/* <div className='Products_L5'> */}
                {/* <br /> */}
                <Productdetails
                    id="123456"
                    image={P6}
                    price={10}
                    title='saiganesh'
                    discount={44}
                />
                <Productdetails
                    id="123456"
                    image={P7}
                    price={10}
                    title='saiganesh'
                    discount={44}
                />
                <Productdetails
                    id="123456"
                    image={P8}
                    price={10}
                    title='saiganesh'
                    discount={44}
                />
                <Productdetails
                    id="123456"
                    image={P9}
                    price={10}
                    title='saiganesh'
                    discount={44}
                />
                <Productdetails
                    id="123456"
                    image={P10}
                    price={10}
                    title='saiganesh'
                    discount={44}
                />
                {/* </div> */}
            </div>
        </div>


    )
}

export default Products