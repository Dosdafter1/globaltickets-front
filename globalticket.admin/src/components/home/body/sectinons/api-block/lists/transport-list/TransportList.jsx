import './styles/TransportList.css'
import TransportListNavbar from './transport-list-header/TransportListNavbar'
import RouteListHeader from '../route-list/route-list-header/RouteListHeader'
import { useContext, useEffect, useState } from 'react'
import TransportListElement from './transport-list-element/TransportListElement'
import ApiContext from '../../../../../../../contexts/api-context/ApiContext'
const TransportList = ({type=''}) => {
    const {setTransportId, getBuses, getTrains} = useContext(ApiContext);
    const [filterWord, setFilterWord] = useState('');
    const [transports, setTransports] = useState([]);
    useEffect(()=>{
        switch(type){
            case 'BUS':
                getBuses().then(res=>{
                    setTransports(res)
                })
                break;
            case 'TRAIN':
                getTrains().then(res=>{
                    setTransports(res)
                })
                break;
            default:
                setTransports([])
                break;
        }
    },[type])
    const [url, setUrl] = useState('');
    return <div>
        <TransportListNavbar setUrl={setUrl}/>
        <RouteListHeader setFilterWord={setFilterWord} h2Text={'Транспорт'} url={url} setId={setTransportId} placeholder={"Назва транспорту"}/>
        <div className='tranport-list'>
            {transports.filter(t=>t.name.toLowerCase().includes(filterWord.toLowerCase()))
                        .map((t,i)=><TransportListElement url={url} id={t.id} name={t.name} route={t.route} key={i}/>)}
        </div>
    </div>
}
export default TransportList
