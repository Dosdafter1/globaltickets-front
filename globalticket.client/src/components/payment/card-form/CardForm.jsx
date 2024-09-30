import { useFormik } from 'formik'
import './styles/CardForm.css'
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
const CardForm = () =>{
    const {values, errors, handleChange, handleBlur} = useFormik({
        initialValues:{
            cardNumber: "",
            date:"",
            code:"",
            userName:""
        },
        validationSchema: Yup.object().shape({
            date: Yup.string()
              .matches(/^(0[1-9]|1[0-2])\/(2[4-9]|[3-9][0-9])$/, 'Invalid date format')
              .required('Дата дії є обов\'язковим полем')
        })
    })
    return <div className='card-form'>
        <form action="">
            <h1>Дані вашої картки</h1>
            <InputMask mask="9999 9999 9999 9999" 
                                        name="cardNumber" type="text"
                                        value={values.cardNumber}  
                                        onChange={handleChange} 
                                        placeholder="Номер картки*"/>
            <br />
            <InputMask mask="99/99"     style={{width:"170px", 
                                                borderColor: errors.date ? 'red' : '#F07B6A',
                                                borderWidth: errors.date ? '2px' : '1px'}}
                                        name="date" type="text"
                                        value={values.date}  
                                        onChange={handleChange} 
                                        placeholder="Дата дії*"/>
            <InputMask mask="999"       style={{width:"150px"}}
                                        name="code" type="text"
                                        value={values.code}  
                                        onChange={handleChange} 
                                        placeholder="CW/CVC*"/>
            <br />
            <input aria-placeholder={errors.userName} 
                    name="userName"
                    value={values.userName}
                    placeholder='Імя власника картки*'
                    onChange={handleChange}/>
            <input type="submit" value="Оплатити"/>
        </form>
        <div className='pay-card'>
            <p style={{fontSize:"34px", textAlign:"center"}}>{values.cardNumber}</p>
            <p style={{fontSize:"16px", textAlign:"center"}}>{values.date}</p>
            <p style={{fontSize:"16px", textAlign:"left", marginLeft:"1rem"}}>{values.userName}</p>
        </div>
    </div>
}
export default CardForm