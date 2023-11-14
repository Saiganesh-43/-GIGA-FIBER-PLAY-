import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import BroadBand from '../components2/BroadBand';
// import Header from './Header';
import Bandwidth from '../components2/Bandwidth';
import MonthlyPlan from '../components2/MonthlyPlan';
import Moredetail from '../components2/Moredetail';
import  DataUsage from '../components2/Datausage';
import Logout from '../components2/Logout';
import Agreement from '../components2/Agreement';
import Setting from '../components2/Setting';
import Setnotification from '../components2/Setnotification';
import Speed from '../components2/Speed';
import Payment from '../components2/Payment';
function RouteCompo() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/broadband' element={<BroadBand/>}/>
                <Route path='/bandwidth' element={<Bandwidth />}/>
                <Route path='/monthly' element={<MonthlyPlan/>}/>
                <Route path='/moredetail' element={<Moredetail/>}/>
                <Route path='/datausage' element={<DataUsage/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/agreement' element={<Agreement/>}/>
                <Route path='/setting' element={<Setting/>}/>
                <Route path='/setnotification' element={<Setnotification/>}/>
                <Route path='/speed' element={<Speed/>}/>
                <Route path='/payment' element={<Payment/>}/>

            </Routes>
        </BrowserRouter>    
    </>
  )
}

export default RouteCompo;