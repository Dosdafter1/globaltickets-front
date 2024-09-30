import { Outlet } from 'react-router-dom'
import ApiNavbar from './api-navbar/ApiNavbar'
import './styles/ApiBlock.css'

const ApiBlock = () =>{
    return <div className='api-block'>
        <ApiNavbar/>
        <Outlet/>
    </div>
}
export default ApiBlock