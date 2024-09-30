import { useContext } from 'react'
import './styles/UserHead.css'
import AuthContext from '../../../contexts/auth-context/AuthContext'
const UserHead = () => {
    const {getUser} = useContext(AuthContext)
    //{getUser().firstN+' '+getUser().lastN}
    return <div className="user-head">
        <h2>Test Test</h2>
    </div>
}
export default UserHead