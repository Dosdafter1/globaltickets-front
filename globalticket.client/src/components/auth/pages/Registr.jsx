import React, { useState, useContext } from "react";
import AuthContext from '../../../contexts/AuthContext';
import "../styles/login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
export default function Registr({setVisible}) {
  const {t} = useTranslation()
  const [submitValue, setSubmitValue] = useState(t('auth.regCaps'))
  const [isLoading, setIsLoading] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const {signup} = useContext(AuthContext)
  const onSubmit = async () =>{
    setIsLoading(true)
    setSubmitValue(t('auth.processing'))
    const firstName = formik.values.firstName
    const lastName = formik.values.lastName;
    const phone = formik.values.phone;
    const email = formik.values.email;
    const password = formik.values.password;
    let res = await signup(firstName,lastName,phone,email,password)
    if(res.status == 200){
      toast.success(res.message)
      setVisible(false)
    }
    else{
      toast.error(res.message)
    }
    setIsLoading(false)
    setSubmitValue('РЕЄСТРАЦІЯ')
  }
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreementChecked: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Мінімум 2 символи")
        .max(50, "Максимум 50 символів")
        .required("Це поле є обов'язковим"),
      lastName: Yup.string()
        .min(2, "Мінімум 2 символи")
        .max(50, "Максимум 50 символів")
        .required("Це поле є обов'язковим"),
      email: Yup.string()
        .email("Введіть дійсний email")
        .required("Це поле є обов'язковим"),
      phone: Yup.string()
        .matches(/^(\+?3?8?0?)?\s?\(?\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/, "Введіть дійсний номер телефону")
        .required("Це поле є обов'язковим"),
      password: Yup.string()
        .min(8, "Мінімум 8 символів")
        .required("Це поле є обов'язковим"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Паролі повинні збігатися")
        .required("Це поле є обов'язковим"),
      agreementChecked: Yup.boolean()
        .oneOf([true], "Будь ласка, погодьтесь з умовами"),
    }),
    onSubmit
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const toggleCheckbox = () => {
    formik.setFieldValue("agreementChecked", !formik.values.agreementChecked);
  };
  
  return (
    <form onSubmit={formik.onSubmit}>
      <div className="reg-container">
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="firstName"
            placeholder={t('auth.firstName')}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && !formik.errors.firstName && (
            <span className="email-validation-icon">
              <i class="fa-solid fa-circle-check"></i>
            </span>
          )}
          {formik.errors.firstName?<p style={{margin:0, fontSize:"12px", color:"red"}}>{formik.errors.firstName}</p>:<></>}
        </div>

        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="lastName"
            placeholder={t('auth.lastName')}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.lastName && !formik.errors.lastName && (
            <span className="email-validation-icon">
              <i class="fa-solid fa-circle-check"></i>
            </span>
          )}
          {formik.errors.lastName?<p style={{margin:0, fontSize:"12px", color:"red"}}>{formik.errors.lastName}</p>:<></>}
        </div>

        <div style={{ position: "relative" }}>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && !formik.errors.email && (
            <span className="email-validation-icon">
              <i class="fa-solid fa-circle-check"></i>
            </span>
          )}
          {formik.errors.email?<p style={{margin:0, fontSize:"12px", color:"red"}}>{formik.errors.email}</p>:<></>}
        </div>

        <div style={{ position: "relative" }}>
          <input
            type="tel"
            name="phone"
            placeholder="+380 (00) 000 00 00"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.phone && !formik.errors.phone && (
            <span className="email-validation-icon">
              <i class="fa-solid fa-circle-check"></i>
            </span>
          )}
          {formik.errors.phone?<p style={{margin:0, fontSize:"12px", color:"red"}}>{formik.errors.phone}</p>:<></>}
        </div>

        <div style={{ position: "relative" }}>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder={t('auth.password')}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="cumancen">
            <i
              className={passwordVisible ? "far fa-eye" : "far fa-eye-slash"}
              onClick={togglePasswordVisibility}
            ></i>
          </span>
          {formik.errors.password?<p style={{margin:0, fontSize:"12px", color:"red"}}>{formik.errors.password}</p>:<></>}
        </div>

        <div style={{ position: "relative" }}>
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            name="confirmPassword"
            placeholder={t('auth.confirmPassword')}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="cumancen">
            <i
              className={confirmPasswordVisible ? "far fa-eye" : "far fa-eye-slash"}
              onClick={toggleConfirmPasswordVisibility}
            ></i>
          </span>
          {formik.errors.confirmPassword?<p style={{margin:0, fontSize:"12px", color:"red"}}>{formik.errors.confirmPassword}</p>:<></>}
          
        </div>

        <a className="must-have"> {t('auth.required')} </a>

        <div className="checkbox-container-accept">
          <div
            className={`custom-checkbox ${formik.values.agreementChecked ? "checked" : ""}`}
            onClick={toggleCheckbox}
          >
            {formik.values.agreementChecked && <span className="checkmark">&#10003;</span>}
          </div>
          <div className="text-agree">
            <label htmlFor="agreementChecked">
              <a>*</a>{t('auth.desc.a1')} <a href="">{t('auth.desc.a2')}</a>{t('auth.desc.a3')}<a href="">{t('auth.desc.a4')}</a>{t('auth.desc.a5')}
            </label>
          </div>
          
        </div>
        <button disabled={isLoading} type="submit">{submitValue}</button>
      </div>
    </form>
  );
}