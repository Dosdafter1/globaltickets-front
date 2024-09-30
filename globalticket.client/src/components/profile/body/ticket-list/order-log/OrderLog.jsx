import React from "react";
import "./styles/log.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export default function OrderLog(){

    return(
        <>
            <div className="main-box">
                <p className="title-text">Замовлення № FGGHJUUKK</p>
                <span className="order-text">Замовлено </span> 
                <span className="order-text-date">25 трав. 2024</span>
                <div className="info-box">
                    <div>
                        <p className="info-text">Варшава - Париж</p>
                        <span className="order-text-date">06:40, 25 трав. 2024, 1 пасажир</span>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                        <a href="">Скасувати замовлення</a>
                        <button>Оплатити</button>
                    </div>
                    
                </div>
                <div className="account-info">
                    <AccountCircleIcon style={{color: '#F07B6A', width: '36px', height: '36px'}}></AccountCircleIcon>
                    <div style={{margin: '5px 10px'}}>
                        <p className="acc-text">User Name</p>
                        <span className="order-text-date">12 вересня 1990</span>
                    </div>
                </div>
                <div className="eticket-box">
                    <div className="eticket-title">
                        <ConfirmationNumberIcon style={{color: '#F07B6A', width: '20px', height: '25px'}}></ConfirmationNumberIcon>
                        <p className="eticket-text">Електронний квиток</p>
                    </div>
                    <div className="eticket-text-info">
                        <div>
                            <p className="info-text">Варшава - Париж</p>
                            <span className="order-info-text">06:40, 25 трав. 2024</span>
                        </div>
                        <div>
                            <p className="order-info-text">Місце</p>
                            <span className="info-tex">БВ</span>
                        </div>
                        <div>
                            <p className="order-info-text">Літак</p>
                            <span className="info-tex">Wizz Air</span>
                        </div>
                        <div>
                            <p className="order-info-text">Номер квитка</p>
                            <span className="info-tex">143857</span>
                        </div>
                    </div>
                    
                </div>
               
            </div>
        </>
    );
}