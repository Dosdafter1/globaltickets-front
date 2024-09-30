import { useTranslation } from "react-i18next"
import { useContext, useEffect, useState } from "react";
import SeatField from "./SeatField";
import './styles/SeatPicker.css'
import Carriage from "./Carriage";
import { useNavigate } from "react-router-dom";
import TicketContext from "../../../contexts/TicketContext";
import PayContext from "../../../contexts/PayContext";
const SeatPicker = () =>{
    const {trainRoute, setSelectTickets, wagonType, getTrainDetails} = useContext(TicketContext)
    const {price} = useContext(PayContext)
    const [wagons, setWagons] = useState([]);
    const [activeCarriage, setActiveCarriage] = useState(-1)
    const [carriageSeats,setCarriageSeats]=useState([])
    const [wagonNumber, setWagonNumber] = useState(0);
    useEffect(()=>{
        getTrainDetails().then(res=>{
            setWagons(res.trains[0].wagons)
            setActiveCarriage(res.trains[0].wagons[0].wagonId)
            setCarriageSeats(res.trains[0].wagons[0].seats)
            setWagonNumber(res.trains[0].wagons[0].number)
        })
    },[])
    const navigate = useNavigate();
    
    const [bookedSeats,setBookedSeats] = useState([])
    const {t} =  useTranslation();
    const handle = ()=>{
        setSelectTickets(bookedSeats,price, activeCarriage, wagonNumber)
        navigate("/train/client")
    }
    /*{t('seat.carriage',{number:activeCarriage})} */
    return <div className="seat-picker">
        <ul className="seat-picker-list">
            <li className="seat-li">
                <div className="route-seat-block">
                    <div className="carriage-text">
                        <h2>{t('seat.carriage',{number:wagonNumber})}</h2>
                        <p>{t('seat.normal')}</p>
                    </div>
                    <div className="route-text">
                        <p>{trainRoute.startTime} <span>{trainRoute.startPoint}</span></p>
                        <p>{trainRoute.endTime} <span>{trainRoute.endPoint}</span></p>
                    </div>
                    <div className="carriage-field">
                        {wagons.map((w,i)=><Carriage key={i}
                                                    id={w.wagonId}
                                                    setBookedSeats={setBookedSeats}
                                                    number={w.number}
                                                    freePlaces={w.availableSeats}
                                                    active={activeCarriage} 
                                                    setCarriageSeats={setCarriageSeats} 
                                                    setActive={setActiveCarriage}
                                                    setWagonNumber={setWagonNumber}
                                                    seats={w.seats}/>)}
                    </div>
                </div>
            </li>
            <li className="state-tips seat-li">
            {wagonType==1 ? <div></div>:
                <div className="state-block">
                    <div className="even-box">
                        <div className="seat-circle select-circle"><p>1</p></div>
                        <div className="even-box-text">
                            <h4>{t('seat.even.down')}</h4>
                            <p>{t('seat.even.noteven')}</p>
                        </div>
                    </div>
                    <div className="even-box">
                        <div  className="seat-circle select-circle"><p>2</p></div>
                        <div className="even-box-text">
                            <h4>{t('seat.even.up')}</h4>
                            <p>{t('seat.even.even')}</p>
                        </div>
                    </div>
                </div>}
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
                </div>
            </li>
            <li>
                <SeatField even={wagonType==0 || wagonType==2 ? true:false} seats={carriageSeats} selectSeats={bookedSeats} setSelectSeats={setBookedSeats}/>
            </li>
            <li className="seat-li">
                <div className="seat-price-block">
                    <div className="seat-blocks-field">
                        {bookedSeats.map(s=><div className="seat-block">
                            <p>{t('seat.carriage',{number:wagonNumber})}</p>
                            <p>{t('seat.seat', {number:s})}</p>
                        </div>)}
                    </div>
                    <div className="seat-price-box">
                        <div className="seat-price">
                            <p style={{fontFamily:"Fixel Display Light", color:"#898989"}}>{t('seat.ticket',{number:bookedSeats.length})}</p>
                            <p style={{fontSize:"24px"}}>{parseFloat((price*bookedSeats.length).toFixed(2))}<span style={{marginLeft:".2rem"}}>грн</span></p>
                        </div>
                        <button disabled={!bookedSeats.length>0} onClick={handle}>{t('buttons.continue')}</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
}
export default SeatPicker