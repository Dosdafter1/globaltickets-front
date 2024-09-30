import React, { useState } from 'react';
import "./styles/avia.css";

const   AviaTick =  ({ time, route, price, transplants, terminal, status }) => {
    return(
        <div className='avia-tixket-txt'>
            <div className='tarif-box'>
                <p className='time-arrive-txt'>08:20 - 20.55</p>
                <span className='road-ticket-txt'>18 год 35 хв</span>
            </div>
            <div className='tarif-box'>
                <p className='ticket-route-txt'>PRG - CAK</p>
                <span className='road-time-txt'>2 пересадки VIE, O...</span>
                <span className='terminal-ticket-txt'>Зміна терміналу</span>
            </div>
            <div>
                <span className='price-ticket-txt'>43 560 </span>
                <span className='currenct-txt'>грн</span> 
            </div>
            <button className='btn-continue'>Продовжити</button>
        </div>
    );
}

export default function AviaTicket(){
    return (
        <>
            <div className='price-box'>
                <div className='tarif-box'>
                    <p className='title-price-txt'>Оптимальний</p>
                    <span className='price-txt'>43 560 грн</span>
                    <span className='road-time-txt'>18 год 35 хв</span>
                </div>
                <div className='tarif-box'>
                    <p className='title-price-txt'>Дешевий</p>
                    <span className='price-txt'>43 560 грн</span>
                    <span className='road-time-txt'>18 год 35 хв</span>
                </div>
                <div className='tarif-box'>
                    <p className='title-price-txt'>Швидкий</p>
                    <span className='price-txt'>82 791 грн</span>
                    <span className='road-time-txt'>16 год 29 хв</span>
                </div>
            </div>

            <AviaTick></AviaTick>
        </>
    )
}