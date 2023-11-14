import React from 'react';
import './Av.css';
import B from '../Images/1.png';
import O from '../Images/2.png';
import T from '../Images/3.png';
import F from '../Images/4.png';
import D from '../Images/5.png';
import SM from '../Images/6.png';
import DD from '../Images/7.png';
import HM from '../Images/8.png';
import SS from '../Images/9.png';
import LL from '../Images/10.png';
import TB from '../Images/11.png';
import PH from '../Images/12.png';
import FW from '../Images/13.png';
import HB from '../Images/18.png';
import BBB from '../Images/20.png';
import TTB from '../Images/19.png';
import FB from '../Images/17.png';
import GB from '../Images/15.png';
import LB from '../Images/16.png';
import DN from '../Images/14.png';
import US from '../Images/21.png';
import { Link } from 'react-router-dom';

const Av = () => {
  return (
    <div className='SSSS'>
      <div className='PPPP'>
        <div className='Play'>
          <h4>Play</h4>
        </div>
        <div className='Play_Items'>
          <Link to="/broadband"><img src={B} alt="" /><p style={{ fontSize: 'small' }}>Board Band</p></Link>
          <Link to="/ott"><img src={O} alt="OTT" /><p style={{ fontSize: 'small' }}>OTT</p></Link>
          <Link to="/tv"><img src={T} alt="Channel" /><p style={{ fontSize: 'small' }}>Tv Channel</p></Link>
        </div>
      </div>
      <div className='EEEE'>
        <div className='Eat'>
          <h4>Eat</h4>
        </div>
        <div className='Eat_Items'>
          <Link to="/fooddelivery"><img src={F} alt="Food Delivery" /><p style={{ fontSize: 'small' }}>Food Delivery</p></Link>
          <Link to="/dineout"><img src={D} alt="Dine Out" /><p style={{ fontSize: 'small' }}>Dine Out</p></Link>
        </div>
      </div>
      <div className='QQQQ'>
        <div className='Quik'>
          <h4>Quik</h4>
        </div>
        <div className='Quik_Items'>
          <Link to="/laundry"><img src={LL} alt="OTT" /><p style={{ fontSize: 'small' }}>Laundry</p></Link>
          <Link to="/delivery"><img src={DD} alt="OTT" /><p style={{ fontSize: 'small' }}>Delivery</p></Link>
          <Link to="/flower"><img src={FW} alt="OTT" /><p style={{ fontSize: 'small' }}>Flower</p></Link>
          <Link to="/pharmacy"><img src={PH} alt="Broad Band" /><p style={{ fontSize: 'small' }}>Pharmacy</p></Link>
          <Link to="/homecleaning"><img src={HM} alt="Channel" /><p style={{ fontSize: 'small' }}>Home Cleaning</p></Link>
          <Link to="/salonspa"><img src={SS} alt="Broad Band" /><p style={{ fontSize: 'small' }}>Salon & Spa</p></Link>
          <Link to="/supermarket"><img src={SM} alt="Broad Band" /><p style={{ fontSize: 'small' }}>Super Market</p></Link>
          <Link to="/ticketbooking"><img src={TB} alt="Channel" /><p style={{ fontSize: 'small' }}>Ticket Booking</p></Link>
        </div>
      </div>
      <div className='PPPY'>
        <div className='Pay'>
          <h4>Pay</h4>
        </div>
        <div className='Pay_Items'>
          <Link to="/hotelbooking"><img src={HB} alt="OTT" /><p style={{ fontSize: 'small' }}>Hotel Booking</p></Link>
          <Link to="/busbooking"><img src={BBB} alt="Broad Band" /><p style={{ fontSize: 'small' }}>Bus Booking</p></Link>
          <Link to="/trainbooking"><img src={TTB} alt="Channel" /><p style={{ fontSize: 'small' }}>Train Booking</p></Link>
          <Link to="/flightbooking"><img src={FB} alt="Broad Band" /><p style={{ fontSize: 'small' }}>Flight Booking</p></Link>
          <Link to="/gasbill"><img src={GB} alt="OTT" /><p style={{ fontSize: 'small' }}>Gas Bill</p></Link>
          <Link to="/lightbill"><img src={LB} alt="Channel" /><p style={{ fontSize: 'small' }}>Light Bill</p></Link>
          <Link to="/donation"><img src={DN} alt="Broad Band" /><p style={{ fontSize: 'small' }}>Donation</p></Link>
          <Link to="/utilityservices"><img src={US} alt="OTT" /><p style={{ fontSize: 'small' }}>Utility Services</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Av;
