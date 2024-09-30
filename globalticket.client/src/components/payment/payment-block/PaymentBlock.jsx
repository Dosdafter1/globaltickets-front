import { NavLink, Navigate } from 'react-router-dom'
import CardForm from '../card-form/CardForm'
import PaymentPrivate from '../payment-private/PaymentPrivate'
import './styles/PaymentBlock.css'
import LiqPayCheckout from '../liqpay/LiqPayChekout'
//<PaymentPrivate/>
/**
 * 
 * <div className='card-from-container'>
            <CardForm/>
            <NavLink to='/' style={{marginLeft:"1rem"}}>Скасувати замовлення</NavLink>
    </div>
 */
const PaymentBlock = () =>{
    return <div>
        <LiqPayCheckout/>
    </div>

}
export default PaymentBlock