import { useTranslation } from 'react-i18next'
import Image from '../../../image/Group 19.png'
import './styles/ProfileBody.css'

const HomeProfileBody = () =>{
    const {t} = useTranslation()
    return <div className="home-profile-body">
        <div>
            <img src={Image} alt="" />
        </div>
        <h1>{t('profile.homePage.h1')}</h1>
        <p>{t('profile.homePage.p')}</p>
    </div>
}
export default HomeProfileBody