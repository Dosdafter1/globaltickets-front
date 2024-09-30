import { useReducer } from 'react'
import PayContext from '../contexts/PayContext' 
import { PAY_TYPES, paymentInitialState, payReducer } from '../reducers/payReducer'
import axios from 'axios'
import { message } from 'antd'
const PAY = 'http://localhost:5007/api/Home/ticket-payment'
const CHANGE_STATUS_FAIL = 'http://localhost:5007/api/Home/buy-train-ticket-failure'
const CHANGE_STATUS_SUCCESS = 'http://localhost:5007/api/Home/buy-train-ticket-success'
export const PayProvider = ({children}) =>{
    const [state, dispatch] = useReducer(payReducer,paymentInitialState)
    const setPrice = (price) =>{
        dispatch({
            type:PAY_TYPES.setPrice,
            price
        })
    }
    const setLiqPayParams = (desc, amount) =>{
        dispatch({
            type: PAY_TYPES.payment,
            desc,
            amount
        })
    }
    const pay = async() =>{
        try {
            let liqpayParams = {
                description: state.des,
                amount: state.amount
            }
            
            let res = await axios.post(PAY,liqpayParams)
            if(res.status == 200) {
                return {data: res.data, status: res.status}
            }
        } catch (error) {
            return {status: error.response.status}
        }
    }
    const setPayStatus = async(status, orderId, trainId, wagonId, seats) => {
        try {
            let payParams = {
                status,
                orderId,
                trainId,
                wagonId,
                seats
            }
            let res = await axios.post(CHANGE_STATUS_FAIL,payParams)
            if(res.status==200) {
                return {message:res.data.message,status:res.status} 
            }
        } catch (error) {
            return {status: 404, message:'Failure transaction!'}
        }
    }
    const setPayStatusSucces = async(status, orderId, trainLineName, trainId, wagonId, timeOfDeparture, timeOfArrival, stationOfDepature, stationOfArrival, trainTicketDtos) =>{
        try {
            let body = {
                orderStatus: status,
                orderId,
                trainLineName,
                trainId,
                wagonId,
                timeOfDeparture,
                timeOfArrival,
                stationOfDepature,
                stationOfArrival,
                trainTicketDtos
            }
            let res = await axios.post(CHANGE_STATUS_SUCCESS,body)
            if(res.status == 200) {
                return {status: 200, message:res.data}
            }
        } catch (error) {
            return {status: 404, message:'Failure transaction!'}
        }
    }
    return <PayContext.Provider value={{...state, setPrice, setLiqPayParams, pay, setPayStatus, setPayStatusSucces}}>
        {children}
    </PayContext.Provider>
}