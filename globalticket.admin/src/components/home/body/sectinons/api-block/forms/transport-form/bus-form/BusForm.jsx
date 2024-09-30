import { useFormik } from 'formik'
import './styles/BusForm.css'
import * as Yup from 'yup'
import { useContext, useEffect } from 'react'
import ApiContext from '../../../../../../../../contexts/api-context/ApiContext'
const BusForm = () =>{
    const {transportId, getBusDetails} = useContext(ApiContext);
    useEffect(()=>{
        if(transportId!==-1){
            getBusDetails().then(res=>{
                setValues({
                    ...values,
                    name: res.name,
                    price: res.price,
                    seats: res.seats,
                    route: res.route
                })
            })
        }
    },[])
    const routes = ['Test1',
                    'Test2',
                    'Test3',
                    'Test4',
                    'Test5',
                    'Test6',
                    'Test7',
                    'Test8',]
    const onSubmit = () =>{
        setValues({...values,
                    name:'',
                    seats: '',
                    route:'',
                    price:''})
    }
    const {values, handleChange, handleBlur, handleSubmit, setValues} = useFormik({
        initialValues:{
            name:'',
            seats: '',
            route: '',
            price: ''
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            seats: Yup.string().required(),
            price: Yup.number().required().min(1,''),
            route: Yup.string().required()
                                .oneOf(routes,'')
        }),
        onSubmit
    })
    return <div className="bus-form">
        <form action="" autoComplete={false} onSubmit={handleSubmit}>
            <div className="inputs-field">
                <label htmlFor="">Назва
                    <br />
                    <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                </label>
                <label htmlFor="">К-сть місць
                    <br />
                    <select name="seats" id="" onChange={handleChange} value={values.seats} onBlur={handleBlur} >
                        <option value="">Оберіть кількість</option>
                        <option value="33">36</option>
                        <option value="28">28</option>
                        <option value="40">40</option>
                    </select>
                </label>
                <label htmlFor="">Ціна
                    <br />
                    <input type="number" min={0} step={0.01} name="price" value={values.price}  onChange={handleChange} onBlur={handleBlur} />
                </label>
                <label htmlFor="">Маршрут
                    <br />
                    <input list='route_list' name="route" value={values.route}  onChange={handleChange} onBlur={handleBlur} />
                    <datalist id="route_list">
                    {routes.map(r=><option>{r}</option>)}
                    </datalist>
                </label>
            </div>
            <input type="submit" value={transportId!==-1?'Змінити':'Додати'} />
        </form>
    </div>
}
export default BusForm