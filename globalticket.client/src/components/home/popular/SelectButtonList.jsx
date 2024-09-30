import { useEffect, useState } from 'react'

import './styles/PopularRoute.css'
import SelectTransportButton from './SelectTransportButton'
import {train, bus, airplane} from './popularRoutesLists'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { v4 as uuidv4 } from 'uuid';
const SelectButtonList = ({setRoutes}) =>{
    const {t} = useTranslation()
    const [active,setActive] = useState(t('popular.train'))
    useEffect(()=>{
        setActive(t('popular.train'))
    },[i18next.language])
    const button = [{
        routes:train,
        text:t('popular.train')
    },
    {
        routes:bus,
        text:t('popular.bus')
    },
    {
        routes:airplane,
        text:t('popular.air')
    }]
    return <div className='select-transport-button-list'>
        {button.map(bt=><SelectTransportButton
            key={uuidv4()}
            routes={bt.routes}
            setRoutes={setRoutes}
            setActive={setActive}
            active={active}
            text={bt.text}
            />)}
    </div>
}
export default SelectButtonList