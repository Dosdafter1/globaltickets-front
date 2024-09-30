
import './styles/FilterBlock.css'
import { useTranslation } from 'react-i18next'
const SortBlock = ({setSort, sortMap, active}) =>{
    const {t} = useTranslation()
    
    return <div className="filter-block">
        <button className={active==sortMap[1]?'sort-active':''} onClick={()=>setSort(sortMap[1])}>{t('filterBlock.departure')}
                <div className='arrow-block'>
                    <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 0L4.66506 3H0.334936L2.5 0Z" fill="#6F6F6F"/>
                        <path d="M2.5 10L0.334936 7L4.66506 7L2.5 10Z" fill="#6F6F6F"/>
                    </svg>
                </div>
        </button>
        <button className={active==sortMap[2]?'sort-active':''}  onClick={()=>setSort(sortMap[2])}>{t('filterBlock.arrival')}
                <div className='arrow-block'>
                    <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 0L4.66506 3H0.334936L2.5 0Z" fill="#6F6F6F"/>
                        <path d="M2.5 10L0.334936 7L4.66506 7L2.5 10Z" fill="#6F6F6F"/>
                    </svg>
                </div>
        </button>
        <button className={active==sortMap[3]?'sort-active':''}  onClick={()=>setSort(sortMap[3])}>{t('filterBlock.travel')}
                <div className='arrow-block'>
                    <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 0L4.66506 3H0.334936L2.5 0Z" fill="#6F6F6F"/>
                        <path d="M2.5 10L0.334936 7L4.66506 7L2.5 10Z" fill="#6F6F6F"/>
                    </svg>
                </div>
        </button>
        <button className={active==sortMap[4]?'sort-active':''}  onClick={()=>setSort(sortMap[4])}>{t('filterBlock.price')}
                <div className='arrow-block'>
                    <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 0L4.66506 3H0.334936L2.5 0Z" fill="#6F6F6F"/>
                        <path d="M2.5 10L0.334936 7L4.66506 7L2.5 10Z" fill="#6F6F6F"/>
                    </svg>
                </div>
        </button>
    </div>
}
export default SortBlock