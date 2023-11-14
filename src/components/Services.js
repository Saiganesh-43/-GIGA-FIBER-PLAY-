import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

import Play from '../Images/Play.png';
import Eat from '../Images/Eat.png';
import Quik from '../Images/Quik.png';
import Pay from '../Images/Pay.png';
import BB from '../Images/Broad Band.png';
import OTT from '../Images/OTT.png';
import Tv from '../Images/Tv Channel.png';
import Family from '../Images/Family.png';
import FD from '../Images/Food Delivery.png';
import DO from '../Images/Dine Out.png';
import Friend from '../Images/Friends.png';
import SM from '../Images/Super Market.png';
import DL from '../Images/Delivery.png';
import HC from '../Images/Home Cleaning.png';
import SS from '../Images/Salon & Spa.png';
import LY from '../Images/Laundry.png';
import TB from '../Images/Ticket Booking.png';
import PH from '../Images/Pharmacy.png';
import FR from '../Images/Flower.png';
import DN from '../Images/Donations.png';
import GB from '../Images/Gas Bill.png';
import LB from '../Images/Light Bill.png';
import FB from '../Images/Flight Booking.png';
import HB from '../Images/Hotel Booking.png';
import BSB from '../Images/Bus Booking.png';
import TRB from '../Images/Train Booking.png';
import US from '../Images/Utility Services.png';

const Services = () => {
    return (
        <div className='Services'>
            <div className='PlayWeb'>
                <div className='PE'>
                    <img src={Play} alt="Play Logo" />
                    <h2>Play</h2>
                    <Link to="/Play" className='Explore_Now'>Explore Now</Link>
                </div>
                <div className='BOT'>
                    <Link to="/broadband" className='Broad'><img src={BB} alt="" className='Broad_Brand' /></Link>
                    <Link to="/ott"><img src={OTT} alt="" className='OTT' /></Link>
                    <Link to="/tv" className='Tv'><img src={Tv} alt="" className='Tv_Channel' /></Link>
                    <Link to="/family"><img src={Family} alt="" className='Family' /></Link>
                </div>
            </div>
            <div className='EatWeb'>
                <div className='PE'>
                    <img src={Eat} alt="Eat Logo" />
                    <h2>Eat</h2>
                    <Link to="/Eat" className='Explore_Now'>Explore Now</Link>
                </div>
                <div className='BOT'>
                    <Link to="/fooddelivery" className='FD'><img src={FD} alt="" className='UI' /></Link>
                    <Link to="/dineout" className='DO'><img src={DO} alt="" className='UI' /></Link>
                    <Link to="/friends"><img src={Friend} alt="" className='Friend' /></Link>
                </div>
            </div>
            <div className='QuikWeb'>
                <div className='PE'>
                    <img src={Quik} alt="Quik Logo" />
                    <h2>Quik</h2>
                    <Link to="/Quik" className='Explore_Now'>Explore Now</Link>
                </div>
                <div className='Quik_Imgs'>
                    <Link to="/supermarket"><img src={SM} alt="Super Market" className='UI' /></Link>
                    <Link to="/delivery"><img src={DL} alt="Delivery" className='UI' /></Link>
                    <Link to="/homecleaning"><img src={HC} alt="Home Cleaning" className='UI' /></Link>
                    <Link to="/salonspa"><img src={SS} alt="Salon&Spa" className='UI' /></Link>
                    <Link to="/laundry"><img src={LY} alt="Laundry" className='LI' /></Link>
                    <Link to="/ticketbooking"><img src={TB} alt="Ticket Booking" className='LI' /></Link>
                    <Link to="/pharmacy"><img src={PH} alt="Pharmacy" className='LI' /></Link>
                    <Link to="/flower"><img src={FR} alt="Flower" className='LI' /></Link>
                </div>
            </div>
            <div className='PayWeb'>
                <div className='PE'>
                    <img src={Pay} alt="Pay Logo" />
                    <h2>Pay</h2>
                    <Link to="/pay" className='Explore_Now'>Explore Now</Link>
                </div>
                <div className='Pay_Imgs'>
                    <Link to="/donation"><img src={DN} alt="Donation" className='UI' /></Link>
                    <Link to="/gasbill"><img src={GB} alt="Gas Bill" className='UI' /></Link>
                    <Link to="/lightbill"><img src={LB} alt="Light Bill" className='UI' /></Link>
                    <Link to="/flightbooking"><img src={FB} alt="Flight Booking" className='UI' /></Link>
                    <Link to="/hotelbooking"><img src={HB} alt="Hotel Booking" className='LI' /></Link>
                    <Link to="/trainbooking"><img src={TRB} alt="train Booking" className='LI' /></Link>
                    <Link to="/busbooking"><img src={BSB} alt="Bus Booking " className='LI' /></Link>
                    <Link to="/utilityservices"><img src={US} alt="Utility Services" className='LI' /></Link>
                </div>
            </div>
        </div>
    );
}

export default Services;
