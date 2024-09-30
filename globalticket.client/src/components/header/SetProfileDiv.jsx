import './styles/SetDiv.css'
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const SetProfileDiv = ({setVisibleModal,setVisible}) =>{
    const {t} = useTranslation()
    const navigate = useNavigate()
    const {logout, isAuth} = useContext(AuthContext)
    const handleLogIn = ()=>{
            setVisibleModal(true)
            setVisible(false)
    }
    const  handleLogOut =  async()=>{
        setVisible(false)
        let response = await logout()
        if(response.status==200){
            toast.success(response.message)
            navigate('/')
        }
        else{
            toast.error(response.message)
        }
    }
    const settingsHandle = (e)=>{
        if(!isAuth()){
            e.preventDefault()
        }
        setVisible(false)
    }
    
    return <div className="setdiv setprofile" >
        <NavLink  to="/profile" className='profile-container' onClick={settingsHandle}>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7222 1H7.27778V2.94444L5.61111 3.77778L3.94444 2.94444L2 6.55556L3.38889 7.38889V9.61111L2 10.4444L3.94444 13.7778L5.61111 12.9444L7.27778 14.0556V16H11.7222V14.0556L13.3889 12.9444L15.0556 13.7778L17 10.4444L15.6111 9.61111V7.38889L17 6.55556L14.7778 2.94444L13.3889 3.77778L11.7222 2.94444V1Z" fill="#9D9D9D" stroke="#9D9D9D" stroke-width="2" stroke-linecap="square"/>
                <circle cx="9.50022" cy="8.50022" r="3.88889" fill="white"/>
            </svg>
            <span>{t('profileDiv.settings')}</span>
        </NavLink>
        <div className='divider'></div>
        <div className='profile-container' onClick={isAuth()?handleLogOut:handleLogIn}>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.58398" y="1" width="7.91667" height="10.8333" stroke="#F07B6A" stroke-width="2"/>
                <path d="M8.75 6.41634H14M14 6.41634L11.6667 8.74967M14 6.41634L11.6667 4.08301" stroke="#F07B6A" stroke-width="2" stroke-linecap="square"/>
                <path d="M0 0.583008L7 1.74967V14.583L0 13.4163V0.583008Z" fill="#F07B6A"/>
            </svg>

            <span >{isAuth()?t('profileDiv.logout'):t('profileDiv.login')}</span>
        </div>
    </div>
}
export default SetProfileDiv;