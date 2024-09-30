import { useContext, useState } from 'react'
import AuthContext from '../../contexts/auth-context/AuthContext'
import { Navigate } from 'react-router-dom';
const AuthGuard = ({children}) =>{
    const {isAuth} = useContext(AuthContext)
    const [isAutheticated, setIsAutheticated] = useState(isAuth());
    if(!isAutheticated) {
        return <Navigate to={'/'}/>
    }
    return <>
        {children}
    </>
}
export default AuthGuard