import { Navigate } from 'react-router-dom';
import './styles/TransportListElement.css'
import { useContext, useState } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import ApiContext from '../../../../../../../../contexts/api-context/ApiContext';
const TransportListElement = ({id,name, url, route}) =>{
    const [toEdit, setToEdit] = useState(false);
    const {setTransportId} = useContext(ApiContext)
    const handleEdit = () =>{
        setToEdit(true)
        setTransportId(id)
    }
    if(toEdit){
        return <Navigate to={url}/>
    }
    return <div className='transport-list-element'>
        <p>{name}</p>
        <p>{route}</p>
        <button onClick={handleEdit} className='edit-btn'><EditOutlined /></button>
        <button className='delete-btn'><DeleteOutlined/></button>
    </div>
}
export default TransportListElement