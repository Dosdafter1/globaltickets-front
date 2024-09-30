import { useFormik } from 'formik'
import './styles/TrainForm.css'
import WagonForm from './wagon-form/WagonForm'
import * as Yup from 'yup'
import { useContext, useEffect } from 'react'
import ApiContext from '../../../../../../../../contexts/api-context/ApiContext'
const TrainForm = ({dispatch, selectWagon, setSelectWagon, setSelectWagonId, selectWagonId}) =>{
    const {transportId, getTrainDetails} = useContext(ApiContext);
    useEffect(()=>{
        if(transportId!==-1){
            getTrainDetails().then(res=>{
                setValues({...values,
                            name: res.name,
                            type: res.type,
                            route: res.route})
                dispatch({
                    type: "INIT",
                    wagons: res.wagons
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
    const {values, handleChange, handleBlur, setValues} = useFormik({
        initialValues:{
            name: '',
            type: '',
            route: ''
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            type: Yup.string().required(),
            route: Yup.string().required()
                                .oneOf(routes,'')
        })
    })
    return <div className='train-form'>
        <div >
            <div className='train-form-block'>
                <label htmlFor="">Назва
                 <br />
                    <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} id="" />
                </label>
                <label htmlFor="">Тип
                <br />
                    <select name="type" id="" value={values.type} onChange={handleChange} onBlur={handleBlur}>
                        <option value="">Оберіть тип</option>
                        <option value="1">Нічний</option>
                        <option value="2">Нічний Експресс</option>
                        <option value="3">Експресс</option>
                        <option value="4">Інтресіті</option>
                    </select>
                </label>
                <label htmlFor="">Маршрут
                <br />
                    <input list='route_list' name='route' value={values.route} onChange={handleChange} onBlur={handleBlur} />
                    <datalist id="route_list">
                        {routes.map(r=><option>{r}</option>)}
                    </datalist>
                </label>
            </div>
            <WagonForm dispatch={dispatch} selectWagonId={selectWagonId} selectWagon={selectWagon} setSelectWagon={setSelectWagon} setSelectWagonId={setSelectWagonId}/>
            <button>{transportId!==-1?'Змінити':'Додати'}</button>
        </div>
    </div>
}
export default TrainForm