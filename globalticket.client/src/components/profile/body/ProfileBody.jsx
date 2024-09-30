import { Outlet } from 'react-router-dom'
import HomeProfileBody from './HomeProfileBody'
import ProfileMenu from './menu/ProfileMenu'
import './styles/ProfileBody.css'
import { useState } from 'react'
const ProfileBody = () =>{
    const [body, setBody] = useState(<HomeProfileBody/>)
    return <div className="profile-body">
        <div className="profile-menu">
            <ProfileMenu setComponent={setBody}/>
        </div>
        <div className="profile-select-body">
            <Outlet/>
        </div>
    </div>
}
export default ProfileBody