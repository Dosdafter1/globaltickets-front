import React, { useState } from 'react';
import "./styles/orderplace.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function OrderPlace(){
    const [checked, setChecked] = useState(false);

    const [value, setValue] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');

  
    const toggleCheckbox = () => {
      setChecked(!checked);
    };

    const handleChange = (event) => {
      const inputValue = event.target.value;
      const latinRegex = /^[a-zA-Z]*$/;
      if (latinRegex.test(inputValue)) {
        setValue(inputValue);
      }
    };


      const handleChangeDay = (event) => {
        const inputValue = event.target.value;
        // Перевірка, чи введене значення є числом і має довжину 2
        if (/^\d{0,2}$/.test(inputValue)) {
          setDay(inputValue);
        }
      };
    
      const handleChangeYear = (event) => {
        const inputValue = event.target.value;
        // Перевірка, чи введене значення є числом і має довжину 4
        if (/^\d{0,4}$/.test(inputValue)) {
          setYear(inputValue);
        }
      };
    

    return (
        <div className='place-order'>
            <div className='title-box'>
                <ArrowBackIosNewIcon className='arrow-style'/>
                <div>
                    <p className='title-txt'>Оформлення замовлення</p>
                    <span className='under-txt'>Контактні дані</span>
                </div>
            </div>
            <div className='contact-data-box'>
                <div className='con-box'>
                    <p className='contact-text'>НА EMAIL</p>
                    <input type="text" className='input-style' placeholder='username@gmail.com'/>
                </div>
                <div>
                    <p className='contact-text'>ТЕЛЕФОН</p>
                    <input type="text" className="input-style"  placeholder="+380(00) 000 00 00" />
                </div>
            </div>  
            <div className='client-data'>
                <p className='title-txt2'>Дані про пасажирів</p>
                <span className='under-txt2'>1. Дорослий</span>
            </div>
            <div className='client-data-box'>
                <div>
                    <p className='data-clien-txt'>Стать</p>
                    <select className='select-data-client'>
                        <option value="" selected hidden></option>
                        <option value="Чоловік">Чоловік</option>
                        <option value="Жінка">Жінка</option>
                        <option value="Воно">Воно</option>
                    </select>
                    <p className='data-clien-txt'>Прізвище</p>
                    <input type="text" class="input-data-client" placeholder="Латинськими буквами" value={value} onChange={handleChange}/>
                    <p className='data-clien-txt'>Ім'я</p>
                    <input type="text"  className='input-data-client' placeholder='Латинськими буквами' value={value} onChange={handleChange}/>
                    <p className='data-clien-txt'>Дата народження</p>
                    <div className='data-box'>
                        <input type="text" className='input-day-client' placeholder='ДД' maxLength={2} value={day} onChange={handleChangeDay}/>
                        <select name="" id="" className='select-day-client' >
                            <option value="" selected hidden>Місяць</option>
                            <option value="1">Січень</option>
                            <option value="2">Лютий</option>
                            <option value="3">Березень</option>
                            <option value="4">Квітень</option>
                            <option value="5">Травень</option>
                            <option value="6">Червень</option>
                            <option value="7">Липень</option>
                            <option value="8">Серпень</option>
                            <option value="9">Вересень</option>
                            <option value="10">Жовтень</option>
                            <option value="11">Листопад</option>
                            <option value="12">Грудень</option>
                        </select>
                        <input type="text" className='input-year-client' placeholder='РРРР' maxLength={4} value={year} onChange={handleChangeYear}/>
                    </div>
                </div>
                <div className='into-client-box'>
                    <p className='data-clien-txt'>Громадянство</p>
                    <input type="text"  className='input-into-box' />
                    <p className='data-clien-txt'>Серія і номер документа</p>
                    <input type="text"  className='input-into-box' />
                    <p className='data-clien-txt'>Дійсний до</p>
                    <div className='data-box'>
                        <input type="text" className='input-day-client2' placeholder='ДД'/>
                        <select name="" id="" className='select-day-client2' >
                            <option value="" selected hidden>Місяць</option>
                            <option value="1">Січень</option>
                            <option value="2">Лютий</option>
                            <option value="3">Березень</option>
                            <option value="4">Квітень</option>
                            <option value="5">Травень</option>
                            <option value="6">Червень</option>
                            <option value="7">Липень</option>
                            <option value="8">Серпень</option>
                            <option value="9">Вересень</option>
                            <option value="10">Жовтень</option>
                            <option value="11">Листопад</option>
                            <option value="12">Грудень</option>
                        </select>
                        <input type="text" className='input-year-client2' placeholder='РРРР'/>
                    </div>
                </div>
            </div>
            <div className='accept-terms-block'>
                <div className={`custom-checkbox ${checked ? 'checked' : ''}`} onClick={toggleCheckbox} required>
                    {checked && <span className="checkmark">&#10003;</span>}
                </div>
                <span className='accept-terms-txt'>Я приймаю умови договору ІАТА, угода про умови створення та скасування бронювання, згода на обробку персональних данних, правила застосування тарифу.</span>
            </div>
            <div class="container">
                <div>
                    <span>Усього 43 560 </span>
                    <span>грн</span>
                </div>
                <div>
                    <a href="">Детальний опис ціни</a>
                </div>
                <div>
                    <button>Продовжити</button>
                </div>
            </div>

            
        </div>
    );   
}