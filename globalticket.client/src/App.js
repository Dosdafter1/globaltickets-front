
import { useEffect, useState } from 'react';
import './App.css';
import { AuthProvider } from './providers/AuthProvider';
import { TicketProvider } from './providers/TicketProvider';
import Home from './components/home/Home'
import { ToastContainer } from 'react-toastify';
import MainProfile from './components/profile/main_profile/MainProfile';
import { Routes, Route} from 'react-router-dom';
import HomeMain from './components/home/HomeMain';
import Layout from './components/Layout';
import TicketsBlock from './components/ticket/TicketsBlock';
import HomeProfileBody from './components/profile/body/HomeProfileBody';
import Settings from './components/profile/body/settings/Settings';
import './i18n'
import SeatPicker from './components/ticket/seat-picker/SeatPicker';
import ClientDataBlock from './components/ticket/passagire-data/ClientDataBlock';
import ClientDataBlockBus from './components/ticket/passagire-data/ClientDataBlockBus';
import PaymentBlock from './components/payment/payment-block/PaymentBlock';
import TicketList from './components/profile/body/ticket-list/TicketList'
import TransportLayout from './components/transport/TransportLayout';
import i18next from 'i18next';
import moment from 'moment';
import HomeBus from './components/home/bus/HomeBus';
import HomeBusMain from './components/home/bus/HomeBusMain';
import BusSeatPicker from './components/ticket/seat-picker/BusSeatPicker';
import HomeAirline from './components/home/airline/HomeAirline';
import HomeAirlineMain from './components/home/airline/HomeAirlineMain';
import AuthGuard from './components/guards/auth-guard/AuthGuard';
import RouteGuard from './components/guards/route-guard/RouteGuard';
import { PayProvider } from './providers/PayProvider';
function App() {
  const [startPoint, setStartPoint] = useState('')
  const [endPoint, setEndPoint] = useState('')
    const setPoints = (start,end)=>{
        setStartPoint(start)
        setEndPoint(end)
    }
    useEffect(()=>{moment.locale(i18next.language)},[i18next.language])
  return (
    <>
      <AuthProvider>
        <TicketProvider>
          <PayProvider>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home startPoint={startPoint} endPoint={endPoint}/>}>
                  <Route path='/' element={<HomeMain setPoints={setPoints}/>}/>
                  <Route path='/train' element={<RouteGuard endpoint={'/'}><TransportLayout type={'train'}/></RouteGuard>}>
                    <Route path='search' element={<TicketsBlock type={"TRAIN"}/>}/>
                    <Route path='seat' element={<SeatPicker/>}/>
                    <Route path='client' element={<ClientDataBlock/>}/>
                  </Route>
                </Route>
                <Route path='/profile' element={<AuthGuard><MainProfile /></AuthGuard>}>
                  <Route path='*' element={<HomeProfileBody/>}/>
                  <Route path='ticket/train' element={<TicketList/>}/>
                  <Route path='ticket/bus' element={<TicketList/>}/>
                  <Route path='ticket/airplane' element={<TicketList/>}/>
                  <Route path='settings' element={<Settings/>}/>
                </Route>
                <Route path='/home-bus' element={<HomeBus startPoint={startPoint} endPoint={endPoint}/>}>
                  <Route path='' element={<HomeBusMain setPoints={setPoints}/>}/>
                  <Route path='bus' element={<RouteGuard endpoint={'/home-bus'}><TransportLayout type="bus"/></RouteGuard>}>
                    <Route path='search' element={<TicketsBlock type={"BUS"}/>}/>
                    <Route path='seat' element={<BusSeatPicker/>}/>
                    <Route path='client' element={<ClientDataBlockBus/>}/>
                  </Route>
                </Route>
                <Route path='/home-airline' element={<HomeAirline/>}>
                    <Route path='' element={<HomeAirlineMain/>}/>
                </Route>
                <Route path='/schedule' element={<><h1>SCHEDULE!</h1></>}/>
                <Route path='/payment' element={<PaymentBlock/>}/>
              </Route>
              <Route path='*' elemnt={<h1>Not found</h1>}/>
            </Routes>
            <ToastContainer/>
          </PayProvider>
        </TicketProvider>
      </AuthProvider>
    </>)
}

export default App;
