import React, { useState } from 'react';
import './AuthForm.css';
import Login from './pages/Login'
import Registr from './pages/Registr'
import { useTranslation } from 'react-i18next';

const AuthForms = ({setVisible})=>{
  const {t} = useTranslation()
  const[activeForm, setActiveForm] = useState('login')

  return (
          <div className="auth-card">
          <div className="buttons-container">
          <button
              onClick={() => setActiveForm('login')}
              className={activeForm === 'register' ? 'active' : ''}
            >
              {t('auth.sign')}
            </button>
            <button
              onClick={() => setActiveForm('register')}
              className={activeForm === 'login' ? 'active' : ''}
            >
              {t('auth.reg')}
            </button>
            {/* Place the forms below the buttons */}
            
          </div>
          <div className="forms-container">
                  {activeForm === 'login' ? <Login setVisible={setVisible}/> : <Registr setVisible={setVisible}/>}
          </div>
        </div>
  );
}

export default AuthForms;
