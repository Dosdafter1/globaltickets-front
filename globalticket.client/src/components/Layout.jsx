import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Modal } from 'antd';
import AuthForm from './auth/AuthForm'
import Navbar from './header/Navbar';
import Footer from './footer/Footer'
const Layout = () =>{
    const [visible, setVisible] = useState(false);
    return <>
    <Navbar setVisible={setVisible}/>
    <Outlet/>
    <Footer/>
    <Modal
        className='modal-width'
        title={null}
        footer={null}
        open={visible}
        onOk={()=>setVisible(false)}
        onCancel={()=>setVisible(false)}>
            <AuthForm setVisible={setVisible}/>
    </Modal>
    </>
}
export default Layout;