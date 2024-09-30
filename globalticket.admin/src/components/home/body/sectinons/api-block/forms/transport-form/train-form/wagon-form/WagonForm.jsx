import { useEffect, useState } from 'react'
import './styles/WagonForm.css'
import { useFormik } from 'formik';
import * as Yup from 'yup'
const WagonForm = ({dispatch, selectWagon, setSelectWagon, setSelectWagonId, selectWagonId}) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const onSubmit = () =>{
        if(selectWagonId!=-1){
            dispatch({
                type:'CHANGE',
                wagonType: values.type,
                seatsCount: values.seats,
                price: values.price,
                index: selectWagonId
            })
            setSelectWagon(null)
            setSelectWagonId(-1)
            setIsEditing(false)
        } else {
            dispatch({
                type:'ADD',
                wagonType: values.type,
                seatsCount: values.seats,
                price: values.price
            })
        }
        setValues({...values,type:'',seats:'',price:''})
    }


    useEffect(()=>{
        if(selectWagon!=null){
            setIsEditing(true)
            setValues({...values,
                        type:selectWagon.type,
                        seats:selectWagon.seats,
                        price:selectWagon.price})
        }
    },[selectWagon])


    const {values, handleChange, handleBlur, handleSubmit, setValues} = useFormik({
        initialValues: {
            type: '',
            seats: '',
            price: ''
        },
        validationSchema: Yup.object().shape({
            type: Yup.number().required('Це поле обов\'язкове'),
            seats: Yup.string().required('Це поле обов\'язкове'),
            price: Yup.number().required('Це поле обов\'язкове').min(1,'Число повинно бути більше нуля')
        }),
        onSubmit
    })


    return <div className="wagon-form">
        <form action="" autoComplete={false} onSubmit={handleSubmit} >
            <fieldset>
                <legend>Вагони</legend>
                <div className='select-box'>
                    <label htmlFor="">Тип
                        <br />
                        <select name="type" id="" value={values.type} onChange={handleChange} onBlur={handleBlur} > 
                            <option value="">Оберіть тип</option>
                            <option value={1}>Плацкарт Економ</option>
                            <option value={2}>Сидячий 1-й класс</option>
                            <option value={3}>Сидячий 2-й класс</option>
                        </select>
                    </label>
                    <label htmlFor="">К-сть місць
                        <br />
                        <select name="seats" id="" value={values.seats} onChange={handleChange} onBlur={handleBlur} > 
                            <option value="">Оберіть кількість</option>
                            <option value="36">36</option>
                            <option value="54">54</option>
                            <option value="18">18</option>
                        </select>
                    </label>
                </div>
                <label htmlFor="">Ціна
                <br />
                <input type="number" name='price' step={0.01} min={0} value={values.price} onChange={handleChange} onBlur={handleBlur} /></label>
                <input type="submit" value={isEditing?'Змінити':'Додати'}/>
            </fieldset>
        </form>
    </div>
}
export default WagonForm