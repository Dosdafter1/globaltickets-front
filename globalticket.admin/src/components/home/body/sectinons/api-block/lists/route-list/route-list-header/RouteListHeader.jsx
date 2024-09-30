import { NavLink } from 'react-router-dom'
import './styles/RouteListHeader.css'
import { PlusOutlined } from '@ant-design/icons'
const RouteListHeader = ({setFilterWord, h2Text, url, setId, placeholder}) =>{
    const handleChange = (e) =>{
        setFilterWord(e.target.value)
    }
    return <div className='route-list-header'>
        <h2>{h2Text}</h2>
        <div>
            <input type="text" placeholder={placeholder} name="" id="" onChange={handleChange}/>
        </div>
        <NavLink onClick={()=>{setId(-1)}} to={url}><PlusOutlined />Додати</NavLink>
    </div>
}
export default RouteListHeader