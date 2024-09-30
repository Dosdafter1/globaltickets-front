import React, { useState, useContext, useEffect } from "react";
import * as Yup from "yup";
import "./styles/settings.css";
import InputMask from 'react-input-mask';
import { useFormik } from "formik";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AuthContext from "../../../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Settings = () => {
    const {t} = useTranslation()
  const {getUser, logout, chnagePassword, setUserDetail} = useContext(AuthContext)
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [confirmNewPasswordVisible, setConfirmNewPasswordVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);
  const [isChecked, setIsChecked] = useState(false);

  const [phoneHeader,setPhoneHeader] = useState(380)
  const [phone,setPhone] = useState(getUser().phone)

  const formik = useFormik({
    initialValues: {
     
      oldPassword: "",
      changePassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      
        oldPassword: Yup.string()
            .min(8, "Мінімум 8 символів")
            .required("Це поле є обов'язковим"),
        changePassword: Yup.string()
            .min(8, "Мінімум 8 символів")
            .required("Це поле є обов'язковим"),
        confirmNewPassword: Yup.string()
            .oneOf([Yup.ref("changePassword"), null], "Паролі повинні збігатися")
            .required("Це поле є обов'язковим"),
        agreementChecked: Yup.boolean()
            .oneOf([true], "Будь ласка, погодьтесь з умовами"),
    }),
  });
  useEffect(()=>{
    let subscription = localStorage.getItem("subscription")
    if(subscription==null){
        setIsChecked(false)
    } else {
        setIsChecked(subscription)
    }
  },[])
  useEffect(()=>{
    setSelectedLanguage(i18next.language)
  },[i18next.language])
  const userFormik = useFormik({
    initialValues:{
        gender: '',
        fullName: getUser().firstN+' '+getUser().lastN,
        birthDate: ''
    },
    onSubmit: async ()=>{
        let res = await setUserDetail(userFormik.values.gender,userFormik.values.fullName,userFormik.values.birthDate);
        if(res.status==200){
            toast.success(res.message)
        } else {
            toast.error(res.message)
        }
    }
  })

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatarUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById('avatar-input').click();
  };

  const handleKeyPress = (e) => {
    const pattern = /[A-Za-zА-Яа-яІіЇїЄєҐґ\s]/;
    const inputChar = String.fromCharCode(e.charCode);
    if (!pattern.test(inputChar)) {
      e.preventDefault();
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const toggleConfirmNewPasswordVisibility = () => {
    setConfirmNewPasswordVisible(!confirmNewPasswordVisible);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    i18next.changeLanguage(event.target.value)
  };
  const toggleSwitch = () => {
    setIsChecked(!isChecked);
    localStorage.setItem("subscription", isChecked)
  };
  const changePasswordHandle= async()=>{
        let res = await chnagePassword(formik.values.oldPassword,formik.values.changePassword);
        if(res.status==200){
            toast.success(res.message)
            formik.setValues({
                ...formik.values,
                oldPassword: '',
                changePassword: '',
                confirmNewPassword: ''
            })
        } else {
            toast.error(res.message)
        }
  }
  

  return (
    <>
        <div className="avatar-container">
        <div className="avatar-image-container" onClick={handleUploadClick}>
            {avatarUrl ? (
            <img src={avatarUrl} alt="Avatar" className="avatar-image" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            ) : (
            <p className="image-text">U</p>
            )}
        </div>
        <input type="file" id="avatar-input" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
        <div>
            <p className="avatar-title-text">Avatar</p>
            <a className="avatar-load-text" onClick={handleUploadClick}>{t('profile.settings.load')}</a>
        </div>
        </div>

        <div className="personal-data-container">
            <p className="title-text">{t('profile.settings.data')}</p>
            <div>
                <input type="text" placeholder={t('profile.settings.gender')} className="input-genger"
                        name="gender"
                        value={userFormik.values.gender} 
                        onChange={userFormik.handleChange}
                        onBlur={userFormik.handleBlur}/>
                <input type="text" placeholder={t('profile.settings.fullName')}  className="input-fn"
                        name="fullName"
                        value={userFormik.values.fullName} 
                        onChange={userFormik.handleChange}
                        onBlur={userFormik.handleBlur} />
                <input type="date" placeholder={t('profile.settings.birth')} class="input-birthday" 
                        name="birthDate"
                        value={userFormik.values.birthDate} 
                        onChange={userFormik.handleChange}
                        onBlur={userFormik.handleBlur}/>
            </div>
            <div className="footer-container">
                <a href="" className="text-cancle">{t('profile.settings.cancel')}</a>
                <button className="btn-save" onClick={userFormik.handleSubmit}>{t('profile.settings.save')}</button>
            </div>
        </div>

        <div className="contact-details-container">
            <p className="title-text">{t('profile.settings.contact')}</p>
            <div className="contact-container">
                <p className="text-email">{getUser().email}</p>
                
                <input type="tel" className="input-tel-country" placeholder="380" value={phoneHeader} onKeyDown={(e)=>{setPhoneHeader(e.target.value)}}/>
                <InputMask mask="999-99-99"  type="tel" value={phone} className="input-tel" onKeyDown={(e)=>{setPhone(e.target.value)}} placeholder="Номер телефону*"/>
                
                
            </div>
        </div>

        <div className="change-pas-container">
            <p className="title-text">{t('profile.settings.passwordChange')}</p>
            <div style={{ display: "inline-flex", margin: "15px 0"}}>
                <div style={{ position: "relative" }}>
                    <input
                        className="input-password"
                        type={passwordVisible ? "text" : "password"}
                        name="oldPassword"
                        placeholder={t('profile.settings.oldPassword')}
                        value={formik.values.oldPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <span className="cumancen">
                        <i
                        className={passwordVisible ? "far fa-eye" : "far fa-eye-slash"}
                        onClick={togglePasswordVisibility}
                        ></i>
                    </span>
                </div>

                <div style={{ position: "relative" }}>
                    <input
                        className="input-password"
                        type={confirmPasswordVisible ? "text" : "password"}
                        name="changePassword"
                        placeholder={t('profile.settings.newPassword')}
                        value={formik.values.changePassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <span className="cumancen">
                        <i
                        className={confirmPasswordVisible ? "far fa-eye" : "far fa-eye-slash"}
                        onClick={toggleConfirmPasswordVisibility}
                        ></i>
                    </span>
                </div>

                <div style={{ position: "relative" }}>
                    <input
                        className="input-password"
                        type={confirmNewPasswordVisible ? "text" : "password"}
                        name="confirmNewPassword"
                        placeholder={t('profile.settings.confirmPassword')}
                        value={formik.values.confirmNewPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <span className="cumancen">
                        <i
                        className={confirmNewPasswordVisible ? "far fa-eye" : "far fa-eye-slash"}
                        onClick={toggleConfirmNewPasswordVisibility}
                        ></i>
                    </span>
                </div>
            </div>
            <div className="footer-container">
                <a href="" className="text-cancle">{t('profile.settings.cancel')}</a>
                <button onClick={changePasswordHandle} className="btn-save">{t('profile.settings.save')}</button>
            </div>
        </div>

        <div className="language-container">
            <p className="title-text">{t('profile.settings.lang')}</p>
            <div className="custom-select">
                <div className="select-container">
                    <select className="select-language" value={selectedLanguage} onChange={handleLanguageChange}>
                        <option className="select-drop" value="uk">Українська</option>
                        <option className="select-drop" value="en">English</option>
                    </select>
                </div>
                <KeyboardArrowDownIcon className="select-arrow-icon" />
            </div>
        </div>
        
        <div className="subscription-container">
            <p className="title-text">{t('profile.settings.subsSettings')}</p>
            <div className="confirm-text-container">
                <div className="toggle-switch">
                    <input
                        type="checkbox"
                        id="switch"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                    <label htmlFor="switch"></label>
                </div>
                <div>
                    <p>{t('profile.settings.desc.p1')}</p>
                    <p>{t('profile.settings.desc.p2')}<a href="">{t('profile.settings.desc.a1')}</a> </p> 
                </div>
                
            </div>
            
        </div>
    
    <NavLink onClick={()=>{
                            logout(); 
                            window.scrollTo({
                                top: 0,
                                behavior: 'instant'
                            });
                            toast('Видаленно!')
                        }
        } to={'/'}>{t('profile.settings.delete')}</NavLink>



    </>
  );
};

export default Settings;