import TicketContext from "../../../contexts/TicketContext";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next"
import './styles/SeatPicker.css'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const BusSeatPicker = () => {
    const {trainRoute, setSelectTickets} = useContext(TicketContext)
    const navigate = useNavigate();
    const price = 199.56;
    const {values, handleChange} = useFormik({
        initialValues: {
            seats: null,
        }
    })
    const handle = ()=>{
        setSelectTickets(values.seats,price)
        navigate("/home-bus/bus/client")
    }
    const {t} =  useTranslation();
    return <div className="seat-picker">
            <ul className="seat-picker-list">
                <li className="seat-li">
                    <div className="route-seat-block">
                        <div className="route-text">
                            <p>{trainRoute.startTime} <span>{trainRoute.startPoint}</span></p>
                            <p>{trainRoute.endTime} <span>{trainRoute.endPoint}</span></p>
                        </div>
                    </div>
                </li>
                <li className="state-tips seat-li">
                    <div className="state-block" style={{marginTop:"1rem"}}>
                        <div className="state-box">
                            <div className="state-circle select-circle"></div>
                            <p>{t('seat.states.select')}</p>
                        </div>
                        <div className="state-box">
                            <div className="state-circle busy-circle"></div>
                            <p>{t('seat.states.busy')}</p>
                        </div>
                        <div className="state-box">
                            <div className="state-circle free-circle"></div>
                            <p>{t('seat.states.free')}</p>
                        </div>
                        <div className="state-box">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="11" fill="#FFA99D"/>
                                <mask id="path-2-inside-1_846_1317" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3334 4C9.22886 4 8.33343 4.89543 8.33343 6V11.6847C7.51504 12.4172 7 13.4816 7 14.6663C7 16.8754 8.79086 18.6663 11 18.6663C13.2091 18.6663 15 16.8754 15 14.6663C15 13.4817 14.485 12.4173 13.6668 11.6849V6C13.6668 4.89543 12.7713 4 11.6668 4H10.3334Z"/>
                                </mask>
                                <path d="M8.33343 11.6847L9.00032 12.4299L9.33343 12.1318V11.6847H8.33343ZM13.6668 11.6849H12.6668V12.1319L12.9998 12.43L13.6668 11.6849ZM9.33343 6C9.33343 5.44772 9.78114 5 10.3334 5V3C8.67657 3 7.33343 4.34315 7.33343 6H9.33343ZM9.33343 11.6847V6H7.33343V11.6847H9.33343ZM8 14.6663C8 13.7779 8.38493 12.9806 9.00032 12.4299L7.66654 10.9396C6.64515 11.8537 6 13.1853 6 14.6663H8ZM11 17.6663C9.34315 17.6663 8 16.3231 8 14.6663H6C6 17.4277 8.23858 19.6663 11 19.6663V17.6663ZM14 14.6663C14 16.3231 12.6569 17.6663 11 17.6663V19.6663C13.7614 19.6663 16 17.4277 16 14.6663H14ZM12.9998 12.43C13.6151 12.9808 14 13.7779 14 14.6663H16C16 13.1854 15.3549 11.8539 14.3337 10.9398L12.9998 12.43ZM12.6668 6V11.6849H14.6668V6H12.6668ZM11.6668 5C12.219 5 12.6668 5.44772 12.6668 6H14.6668C14.6668 4.34315 13.3236 3 11.6668 3V5ZM10.3334 5H11.6668V3H10.3334V5Z" fill="#F07B6A" mask="url(#path-2-inside-1_846_1317)"/>
                                <path d="M11 8V14" stroke="#F07B6A" stroke-linecap="round"/>
                            </svg>
                            <p style={{color:"#FFA99D"}}>{t('seat.busPicker.cond')}</p>
                        </div>
                    </div>
                </li>
                <li className="seat-form seat-li">
                    <label htmlFor=""> {t('seat.busPicker.select')}
                        <br />
                        <input type="number" placeholder={t('seat.busPicker.placeHolder')} value={values.seats} name="seats" onChange={handleChange}/>
                    </label>
                    <div>
                        <p style={{margin:0,color:"#6F6F6F", fontFamily:"Fixel Display Light"}}>{t('seat.busPicker.freeSeat')}</p>
                        <p style={{margin:0,color:"#6F6F6F", fontFamily:"Fixel Display Light"}}>{t('seat.busPicker.seating')}</p>
                    </div>
                </li>
                <li className="seat-li">
                    <div className="seat-price-block">
                        <div></div>
                        <div className="seat-price-box">
                            <div className="seat-price">
                                <p style={{fontFamily:"Fixel Display Light", color:"#898989"}}>{t('seat.ticket',{number:values.seats})}</p>
                                <p style={{fontSize:"24px"}}>{parseFloat((price*values.seats).toFixed(2))}<span style={{marginLeft:".2rem"}}>грн</span></p>
                            </div>
                            <button disabled={!values.seats>0} onClick={handle}>{t('buttons.continue')}</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
}
export default BusSeatPicker