import { useLocation } from 'react-router-dom'
import SearchForm from './SearchForm'
import './styles/SearchBlock.css'
import { useTranslation } from 'react-i18next'
import SearchFormAir from './SearchFormAir'
const SeacrhBlock = ({startPoint, endPoint}) =>{
    const location = useLocation()
    const {t} = useTranslation()
    const isAir = location.pathname.includes('home-airline')
    return <div className='search-block'>
        <div className={isAir?"photo-back photo-back-air":"photo-back photo-back-earth"}>
            <div className='gradient-background'></div>
            <h1 style={{width:"1335px", textAlign:"center"}}>{t('searchBlock.h1')}</h1>
            <div className='search-line'>
                {isAir?<SearchFormAir/>:<SearchForm startPoint={startPoint} endPoint={endPoint}/>}
            </div>
        </div>
    </div>
}
export default SeacrhBlock