import { useFormik } from "formik"
import {validSchemaAir} from './validSchema'
import './styles/SearchFormAir.css'
import { useTranslation } from 'react-i18next';
import { DatePicker, InputNumber } from "antd";
const SearchFormAir = () =>{
    const {t} = useTranslation()
    const {values, errors, touched, handleBlur, handleChange, handleSubmit,setValues} = useFormik({
        initialValues: {
            beginPoint: '',
            endPoint: '',
            beginDate: null,
            endDate: null,
            passengers : 1
        },
        validationSchema: validSchemaAir,
    }) 
    /** */
    return <div>
        <form onSubmit={handleSubmit} autoComplete="off" className="searchForm">
            <div className="search-air">
                <input 
                    value={values.beginPoint}
                    onChange={handleChange}
                    id='beginPoint'
                    placeholder = {t('searchBlock.searchFrom.begin')}
                    type="text"
                    onBlur={handleBlur}
                    className={errors.beginPoint && touched.beginPoint?"input-error":""}
                />
                <input 
                    value={values.endPoint}
                    onChange={handleChange}
                    id='endPoint'
                    placeholder={t('searchBlock.searchFrom.end')}
                    type="text"
                    onBlur={handleBlur}
                    className={errors.endPoint && touched.endPoint?"input-error":""}
                />
                <DatePicker value={values.beginDate} 
                            onChange={(date) => setValues({...values, beginDate: date})} 
                            className="date-picker-air"
                            suffixIcon={null} 
                            placeholder="ТУДИ" 
                            allowClear={false}/>
                <DatePicker value={values.endDate} 
                            onChange={(date) => setValues({...values, endDate: date})}  
                            className="date-picker-air" 
                            suffixIcon={null} 
                            placeholder="НАЗАД" 
                            allowClear={false}/>
                <InputNumber    step={1}
                                value={values.passengers}
                                formatter={(value) => `${value} дорослий`}
                                parser={(value) => value?.replace('дорослий', '')}
                                onChange={(number) => setValues({...values, passengers: number})}
                                placeholder="ПАСАЖИРИ"
                                className="passengers-input"
                                min={1}
                                changeOnWheel={true}/>
               <input type="submit" value={t('searchBlock.searchFrom.search')}/>
               <svg className='icon' width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7158 17.4805C13.8948 17.3013 14.0168 17.0731 14.0662 16.8246C14.1156 16.5762 14.0902 16.3187 13.9933 16.0846C13.8963 15.8506 13.7322 15.6505 13.5216 15.5097C13.311 15.3689 13.0634 15.2937 12.8101 15.2936L10.2476 15.2936L10.2476 13.692C10.2476 13.0974 10.4838 12.5271 10.9043 12.1066C11.3248 11.6861 11.8951 11.4498 12.4898 11.4498L28.8257 11.4498C29.3721 12.4369 30.2289 13.216 31.2632 13.6665C32.2975 14.1169 33.4515 14.2136 34.5463 13.9413C35.6411 13.6691 36.6155 13.0432 37.3184 12.1608C38.0212 11.2783 38.4133 10.1886 38.4337 9.06065C38.4542 7.93269 38.1019 6.8295 37.4314 5.92217C36.761 5.01483 35.81 4.35406 34.7257 4.04232C33.6415 3.73059 32.4847 3.7853 31.4348 4.19799C30.3848 4.61068 29.5004 5.35828 28.9186 6.32485L12.4898 6.32485C10.5365 6.32697 8.66389 7.10383 7.28274 8.48499C5.90158 9.86614 5.12472 11.7388 5.1226 13.692L5.1226 15.2936L2.5601 15.2936C2.30678 15.2937 2.05918 15.3689 1.84859 15.5097C1.638 15.6505 1.47386 15.8506 1.37694 16.0846C1.28001 16.3187 1.25464 16.5762 1.30403 16.8246C1.35342 17.0731 1.47535 17.3013 1.65442 17.4805L6.77942 22.6055C7.01967 22.8456 7.34544 22.9805 7.6851 22.9805C8.02476 22.9805 8.35052 22.8456 8.59078 22.6055L13.7158 17.4805ZM35.8726 8.96742C35.8726 9.47424 35.7223 9.96967 35.4407 10.3911C35.1592 10.8125 34.759 11.1409 34.2907 11.3349C33.8225 11.5288 33.3073 11.5796 32.8102 11.4807C32.3131 11.3818 31.8565 11.1378 31.4981 10.7794C31.1398 10.421 30.8957 9.96442 30.7968 9.46734C30.698 8.97027 30.7487 8.45503 30.9427 7.9868C31.1366 7.51856 31.465 7.11835 31.8864 6.83678C32.3078 6.55521 32.8033 6.40492 33.3101 6.40492C33.9897 6.40492 34.6415 6.6749 35.1221 7.15546C35.6026 7.63603 35.8726 8.28781 35.8726 8.96742Z" fill="#F07B6A"/>
                    <path d="M12.1226 34.5922L28.5074 34.5922C30.4607 34.5901 32.3333 33.8132 33.7145 32.432C35.0956 31.0509 35.8725 29.1782 35.8746 27.225L35.8746 25.6234L38.4371 25.6234C38.6904 25.6233 38.938 25.5481 39.1486 25.4073C39.3592 25.2665 39.5234 25.0665 39.6203 24.8324C39.7172 24.5984 39.7426 24.3408 39.6932 24.0924C39.6438 23.8439 39.5219 23.6157 39.3428 23.4365L34.2178 18.3115C33.9775 18.0714 33.6518 17.9365 33.3121 17.9365C32.9725 17.9365 32.6467 18.0714 32.4064 18.3115L27.2814 23.4365C27.1024 23.6157 26.9804 23.8439 26.931 24.0924C26.8817 24.3408 26.907 24.5984 27.004 24.8324C27.1009 25.0665 27.265 25.2665 27.4756 25.4073C27.6862 25.5481 27.9338 25.6233 28.1871 25.6234L30.7496 25.6234L30.7496 27.225C30.7496 27.8197 30.5134 28.39 30.0929 28.8105C29.6724 29.2309 29.1021 29.4672 28.5074 29.4672L12.1226 29.4672C11.5585 28.4901 10.6878 27.7265 9.64551 27.2948C8.6032 26.8631 7.44756 26.7873 6.35781 27.0793C5.26807 27.3713 4.30512 28.0147 3.61832 28.9098C2.93153 29.8048 2.55926 30.9015 2.55926 32.0297C2.55926 33.1579 2.93153 34.2545 3.61832 35.1496C4.30512 36.0446 5.26807 36.6881 6.35781 36.98C7.44756 37.272 8.6032 37.1963 9.64551 36.7646C10.6878 36.3328 11.5585 35.5692 12.1226 34.5922ZM5.12461 32.0297C5.12461 31.5229 5.2749 31.0274 5.55647 30.606C5.83804 30.1846 6.23825 29.8562 6.70649 29.6622C7.17472 29.4683 7.68996 29.4175 8.18703 29.5164C8.68411 29.6153 9.1407 29.8593 9.49907 30.2177C9.85745 30.5761 10.1015 31.0327 10.2004 31.5298C10.2993 32.0268 10.2485 32.5421 10.0546 33.0103C9.86061 33.4785 9.53216 33.8787 9.11076 34.1603C8.68936 34.4419 8.19393 34.5922 7.68711 34.5922C7.0075 34.5922 6.35572 34.3222 5.87515 33.8416C5.39459 33.3611 5.12461 32.7093 5.12461 32.0297Z" fill="#F07B6A"/>
                </svg>

            </div>
        </form>
    </div>
}
export default SearchFormAir