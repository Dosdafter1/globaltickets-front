import i18next from "i18next"
import AuthContext from "../../../contexts/AuthContext"
import ProfileBody from "../body/ProfileBody"
import ProfileFooter from "../footer/ProfileFooter"
import ProfileHeader from "../header/ProfileHeader"
import { useState,useContext,useEffect } from "react"
import { useTranslation } from "react-i18next"
const MainProfile = () =>{
    const {t} = useTranslation()
    const {getUser} = useContext(AuthContext)
    const [headerText, setHeaderText] = useState("")
    const getFullName = () =>{
        let user = getUser()
        console.log(user)
        let userFullName = user.firstN + ' ' + user.lastN
        return userFullName
    }
    useEffect(() => {
        setHeaderText(t('profile.titles.title',{userFullName:getFullName()}))
    }, [i18next.language]);
    return <>
        <ProfileHeader text={headerText}/>
        <ProfileBody/>
        <ProfileFooter/>
    </>
}
export default MainProfile