import React, { useState } from "react";
import "./styles/pay.css";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InputMask from 'react-input-mask';



export default function Pay(){
    const [selectedOption, setSelectedOption] = useState('creditCard'); // За замовчуванням активний перший радіобатон

    const handleCreditCardChange = () => {
        setSelectedOption('creditCard');
    };

    const handlePrivat24Change = () => {
        setSelectedOption('privat24');
    };

    return(
        <>
            <div className={`pay-box`}>
                <div className="pay-info-box">
                    <div>
                        <p className="title-main-text">Оплата</p>
                        <span className="main-text"> Для оформлення замовлення оплатіть його до 27 березня 16:51</span>
                    </div>
                    <div>
                        <p className="title-main-text">00:29:15</p>
                        <span className="main-text">Час на оплату</span>
                    </div>
                </div>

                <div className={`select-box ${selectedOption === 'creditCard' ? 'active' : ''}`}>
                    <div className="inside-box">
                        <div
                            className={`radio ${selectedOption === 'creditCard' ? 'active' : ''}`}
                            onClick={handleCreditCardChange}
                        >
                            {selectedOption === 'creditCard' && <div className="inner"></div>}
                        </div>
                        <p className="card-text">Банківською карткою</p>
                    </div>

                    <CreditCardIcon style={{ color: '#D2D7E4' }} />
                    <p className="price-text">163 $</p>
                </div>

                <div className={`select-box ${selectedOption === 'privat24' ? 'active' : ''}`}>
                    <div className="inside-box">
                        <div
                            className={`radio ${selectedOption === 'privat24' ? 'active' : ''}`}
                            onClick={handlePrivat24Change}
                        >
                            {selectedOption === 'privat24' && <div className="inner"></div>}
                        </div>
                        <p className="card-text">Приват 24</p>
                    </div>

                    <div className="inside-box">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Privat24_Logo.png" style={{width: '30px', height: '30px', marginRight: '10px'}}/>
                        <p className="main-text">Privat24</p>
                    </div>
                    
                    <p className="price-text">163 $</p>
                </div>
                <p className="title-main-text2">Дані вашої картки</p>
                <div className="data-card">
                    <div>
                    <InputMask
                        mask="9999 9999 9999 9999"
                        type="text"
                        placeholder="Номер карти*"
                        className="number-card-input"
                        onKeyDown={(e) => {
                            const key = e.key;
                            const allowedKeys = ['Backspace', 'Delete'];
                            const isDigit = /[0-9]/.test(key);
                            const isAllowedKey = allowedKeys.includes(key);

                            if (!isDigit && !isAllowedKey) {
                                e.preventDefault();
                            }
                        }}
                    />
                        <div>
                            <input type="date" placeholder="Термін дії**" class="date-card-input" />
                            <input
                                type="text"
                                placeholder="CW/CVC*"
                                className="cvc-card-input"
                                maxLength="3"
                                onKeyPress={(e) => {
                                    if (!/\d/.test(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Ім'я власника картки*"
                            className="number-card-input"
                            onKeyPress={(e) => {
                                if (!/[A-Za-z\s]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }}
                        />
                       
                    </div>
                    <div className="card-box">
                        <p className="card-txt">0000 0000 0000 0000</p>
                        <p className="info-card-txt">mm/yy</p>
                        <p className="info-card-txt2">User Name</p>
                    </div>
                </div>
               <p className="footer-text">Передача інформації захищена, сайт повністю відповідає стандартам безпеки платіжних систем Visa i MasterCard (PCI compliancy). Найдійність підтверджена сертифікатом.</p>
            </div>
            
            <div className="btn-footer">
                <button>Оплатити</button>                  
            </div>
            
        </>
    );
}
