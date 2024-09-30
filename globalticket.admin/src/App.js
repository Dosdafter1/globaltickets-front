
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './providers/auth-provider/AuthProvider';
import AuthPage from './components/auth/AuthPage';
import Home from './components/home/Home';
import AuthGuard from './components/guards/AuthGuard';
import RouteBlock from './components/home/body/sectinons/api-block/blocks/route-block/RouteBlock';
import TrainBlock from './components/home/body/sectinons/api-block/blocks/transport-block/train-block/TrainBlock';
import BusBlock from './components/home/body/sectinons/api-block/blocks/transport-block/bus-block/BusBlock';
import RouteList from './components/home/body/sectinons/api-block/lists/route-list/RouteList';
import { ApiProvider } from './providers/route-provider/ApiProvider';
import TransportList from './components/home/body/sectinons/api-block/lists/transport-list/TransportList';
function App() {
  return (
    <AuthProvider>
      <ApiProvider>
        <Routes>
          <Route path='/' element={<AuthPage/>}/>
          <Route path='/home' element={<AuthGuard><Home/></AuthGuard>} >
            <Route path='routes' element={<RouteList/>}/>
            <Route path='transport' element={<TransportList/>}/>
            <Route path='transport-train' element={<TransportList type={"TRAIN"}/>}/>
            <Route path='transport-bus' element={<TransportList type={"BUS"}/>}/>
            <Route path='form' element={<><Outlet/></>}>
              <Route path='transport-bus' element={<BusBlock/>}/>
              <Route path='transport-train' element={<TrainBlock/>}/>
              <Route path='route' element={<RouteBlock/>}/>
            </Route>
            <Route path='change-route' element={<>change route</>}/>
            <Route path='change-transport' element={<>change transport</>}/>
          </Route>
        </Routes>
      </ApiProvider>
   </AuthProvider>
  );
}

export default App;
