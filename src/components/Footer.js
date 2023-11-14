import React from 'react'
import './Footer.css'
import GG from '../Images/GG.png'
import IOS from '../Images/IOS.png'
import And from '../Images/Andriod.png'

const Footer = () => {
    return (
        <div className='Footer'>

            <div className='Footer_Links'>
                <div className='ExPro'>
                    <img src={GG} alt="Footer_Giga" />
                    <br />
                    <p style={{ paddingBottom: '1rem' }}>Best information about the company <br />gies here but now lorem ipsum is</p>
                    {/* <div className='Footer_Link1'>
                    
                    <div className='Social_Media_Icons'>
                        
                    </div>

                </div> */}
                </div>
                <div className='Footer_Link'>
                    <h4>About</h4>
                    <a href="/About"><p>About</p></a>
                    <a href="/Stores"><p>Find Stores</p></a>
                    <a href="/Category"><p>Categories</p></a>
                    <a href="/Blogs"><p>Blogs</p></a>
                </div>
                <div className='Footer_Link'>
                    <h4>Partnership</h4>
                    <a href="/About"><p>About</p></a>
                    <a href="/Stores"><p>Find Stores</p></a>
                    <a href="/Category"><p>Categories</p></a>
                    <a href="/Blogs"><p>Blogs</p></a>
                </div>
                <div className='Footer_Link'>
                    <h4>Information</h4>
                    <a href="/Help"><p>Help Center</p></a>
                    <a href="/Refund"><p>Money Refund</p></a>
                    <a href="/Shipping"><p>Shipping</p></a>
                    <a href="Contact"><p>Contact Us</p></a>
                </div>
                <div className='Footer_Link'>
                    <h4>For User</h4>
                    <a href="/Login"><p>Login</p></a>
                    <a href="/Register"><p>Register</p></a>
                    <a href="/Settings"><p>Settings</p></a>
                    <a href="/Orders"><p>My Order</p></a>
                </div>
                <div className='Footer_Link1'>
                    <h4>Get App</h4>
                    <div className='App_Download'>
                        <img src={IOS} alt="For_IOS" />
                        <img src={And} alt="For_Android" />
                    </div>
                </div>
            </div>
            <div className='Footer_Bottom'>
                <div className='Footer_Official'>
                    <h5>© 2023 Gigafiber Play M. </h5>
                </div>
                <select name="" id="" className='Language'>
                    <option value="">English</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
        </div>
    )
}

export default Footer