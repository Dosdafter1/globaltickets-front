import { useTranslation } from "react-i18next"

export const WagonType = () =>{
    const {t} = useTranslation()
    return {
    "0":t('wagonType.plac'),
    "1":t('wagonType.seatFirst'),
    "2":t('wagonType.seatSecond'),
    }
}