import { useEffect, useState } from 'react'
import './styles/Seat.css'
const Seat = ({even=true,value,id, status, selectSeats, setSelectSeats}) => {
    const STANDART_STYLE_CLASS = even?'seat seat-even ':'seat seat-noteven '
    const [styleClass, setStyleClass] = useState(STANDART_STYLE_CLASS);
    const [state, setState] = useState(status)
    const deleteElment = (el)=>{
        return selectSeats.filter(e=>e!=el)
    }
    const addElement = () =>{
        return selectSeats.concat(id);
    }
    const handle = ()=>{
        if(state!=0){
            if(state == 1){
                setState(2)
            } else {
                setState(1)
            }
            let pos = selectSeats.indexOf(id)
            if(pos == -1){
                setSelectSeats(addElement())
            } else {
                setSelectSeats(deleteElment(id))
            }
        }
    }
    useEffect(()=>{
        if(state===1) {
            setStyleClass(STANDART_STYLE_CLASS+'seat-free')
        } else if(state===2) {
            setStyleClass(STANDART_STYLE_CLASS+'seat-booked')
        } else {
            setStyleClass(STANDART_STYLE_CLASS+'seat-busy')
        }
    },[state])
    return <div onClick={handle} className={styleClass}>
        <div>{even && value%2==0?<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" />
                        </svg>:<></>}
        </div>
        <div>{value}</div>
        <div>
        {even && value%2!=0?<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" />
                        </svg>:<></>}
        </div>
    </div>
}
export default Seat