import React, { useState, useContext } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import AuthContext from '../../../contexts/AuthContext'
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
const validationSchema = yup.object().shape({
  email: yup.string().required().matches(/^[^@]+@[^.]+\..+$/),
  password: yup.string().min(6).required(),
});

export default function Login({setVisible}) {
  const {t} =useTranslation()
  const [submitValue, setSubmitValue] = useState(t('auth.enter'))
  const [isLoading, setIsLoading] = useState(false)
  const{login}=useContext(AuthContext)
  const onSubmit = async () =>{
    setSubmitValue(t('auth.processing'))
    setIsLoading(true)
    const email = formik.values.email;
    const password = formik.values.password;
    let res = await login(email,password)
    if(res.status == 200){
      toast.success(res.message)
      setVisible(false)
    }
    else{
      toast.error(res.message)
    }
    setIsLoading(false)
    setSubmitValue('УВІЙТИ')
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: validationSchema,
    onSubmit
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(true);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
    } catch (errors) {
      // Обробка помилок валідації
    }
  };
  

  return (
      <form onSubmit={formik.handleSubmit}>
        <div className="login-container">
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
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder={t('auth.password')}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span
              className="cumancen"
              onClick={togglePasswordVisibility}
            >
              <i
                className={passwordVisible ? "far fa-eye" : "far fa-eye-slash"}
              ></i>
            </span>
            {formik.errors.password?<p style={{margin:0, fontSize:"12px", color:"red"}}>{formik.errors.password}</p>:<></>}
          </div>

          <div className="checkbox-container">
            <div className="checkbox-text-center">
              <div
                className={`custom-checkbox ${checked ? 'checked' : ''}`}
                onClick={toggleCheckbox}
                required
              >
                {/* Іконка позначення */}
                {checked && <span className="checkmark">&#10003;</span>}
              </div>
              <label className="text-remember">{t('auth.remember')}</label>
            </div>
            <br />
            <a href="">{t('auth.forgot')}</a>
          </div>

          <button disabled={isLoading} type="submit">{submitValue}</button>
        </div>
      </form>
  );
}