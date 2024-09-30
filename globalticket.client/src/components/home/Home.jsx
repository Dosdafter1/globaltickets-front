import { useState, useContext } from 'react';
import SeacrhBlock from './search/SearchBlock';
import AuthContext from '../../contexts/AuthContext';
import { Outlet } from 'react-router-dom';

const Home = ({startPoint, endPoint})=>{
return <>
        <SeacrhBlock startPoint={startPoint} endPoint={endPoint}/>  
        <Outlet/>
</>
}
export default Home