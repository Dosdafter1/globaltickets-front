import { useContext, useState } from 'react'
import './styles/RouteListElement.css'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import RouteContext from '../../../../../../../../contexts/api-context/ApiContext';
import { Navigate } from 'react-router-dom';
const RouteListElement = ({id, name}) =>{
    const {setRouteId} = useContext(RouteContext);
    const [toEdit, setToEdit] = useState(false);
    const handleEdit = () => {
        setRouteId(id)
        setToEdit(true)
    }
    if(toEdit) {
        return <Navigate to='/home/form/route'/>
    }
    return <div className='route-list-element'>
        <p>{name}</p>
        <button onClick={handleEdit} className='edit-btn'><EditOutlined /></button>
        <button className='delete-btn'><DeleteOutlined/></button>
    </div>
}
export default RouteListElement