import { useFormik } from "formik"
import './styles/RouteForm.css'
import * as Yup from 'yup'
import { useEffect, useState } from "react"
const RouteForm = ({dispatch, selectRoute, routes, selectRouteId,setSelectRouteId}) =>{
    const onSubmit = () => {
        if(selectRouteId===-1){
            dispatch({
                type:"ADD",
                point: values.point,
                arrivalTime: values.arrivalTime,
                departureTime: values.departureTime,
                duration: values.duration
            })
        } else {
            dispatch({
                type:"CHANGE",
                point: values.point,
                arrivalTime: values.arrivalTime,
                departureTime: values.departureTime,
                duration: values.duration,
                index: selectRouteId
            })
            setSelectRouteId(-1)
            selectRoute({})
        }
        setValues({...values, point:'', departureTime:'',arrivalTime:'',duration:''})
    }
    
    const [routeOprions, setRouteOprions] = useState(["Київ-Пасажирський",
                                                        "Жмеринка",
                                                        "Вінниця-Головна",
                                                        "Тульчин",
                                                        "Хмельницький",
                                                        "Шепетівка",
                                                        "Кам'янець-Подільський",
                                                        "Старокостянтинів",
                                                        "Львів-Головний",
                                                        "Тернопіль",
                                                        "Умань",
                                                        "Кропивницький",
                                                        "Знам'янка",
                                                        "Кривий Ріг-Головний",
                                                        "Дніпро-Головний",
                                                        "Запоріжжя-1",
                                                        "Харків-Пасажирський",
                                                        "Люботин",
                                                        "Південне",
                                                        "Івано-Франківськ",
                                                        "Коломия",
                                                        "Київ",
                                                        "Жмеринка"]);
    const [isEditting, setIsEditting] = useState('Додати');
    
    useEffect(()=>{
        setValues({
            ...values,
            point:selectRoute.point,
            arrivalTime: selectRoute.arrivalTime,
            departureTime: selectRoute.departureTime,
            duration: selectRoute.duration
        })
    },[selectRoute])
    useEffect(()=>{
        if(selectRouteId!=-1){
            setIsEditting(true)
        } else {
            setIsEditting(false)
        }
    },[selectRouteId])
    
    const {values, handleChange, handleBlur, handleSubmit, setValues} = useFormik({
        initialValues: {
            point: '',
            arrivalTime: '',
            departureTime: '',
            duration: ''

        },
        validationSchema: Yup.object().shape({
                                        point: Yup.string().required('Це поле обов\'язкове для заповнення')
                                                            .oneOf(routeOprions,'Не існуючий маршрут')
                                                            .when('isEditing', (isEditing, schema) =>
                                                                isEditing
                                                                    ? schema.notOneOf(routes.map(r => r.point), 'Це значення вже використовується у маршруті')
                                                                    : schema
                                                            ),
                                        arrivalTime: Yup.string().required('Це поле обов\'язкове для заповнення'),
                                        departureTime: Yup.string().required('Це поле обов\'язкове для заповнення'),
                                        duration: Yup.string().required('Це поле обов\'язкове для заповнення')}),
        onSubmit
    })
    return <div className="route-form">
        <form action="" autoComplete={false} onSubmit={handleSubmit}>
            <div>
                <div className="route-form-block">
                    <label htmlFor="">Станція
                        <br />
                        <input list='route_option' name="point" value={values.point} onChange={handleChange} onBlur={handleBlur} />
                    </label>
                    <label htmlFor="">Час прибуття
                        <br />
                        <input type="time"  name="arrivalTime" value={values.arrivalTime} onChange={handleChange} onBlur={handleBlur} />
                    </label>
                </div>
                <div className="route-form-block" style={{marginTop:"2.4rem"}}>
                    <label htmlFor="">Простій
                        <br />
                        <input type="time"  name="duration" value={values.duration} onChange={handleChange} onBlur={handleBlur} />
                    </label>
                    <label htmlFor="">Час відпарвлення
                        <br />
                        <input type="time"  name="departureTime" value={values.departureTime} onChange={handleChange} onBlur={handleBlur} />
                    </label>
                </div>
            </div>
            
            <datalist id='route_option'>
                {routeOprions.map((r,i)=><option key={i} value={r}/>)}
            </datalist>
            <br />
            <br />
            <input type="submit" name="" id="" value={!isEditting?'Додати':'Змінити'} />
        </form>
    </div>
}
export default RouteForm