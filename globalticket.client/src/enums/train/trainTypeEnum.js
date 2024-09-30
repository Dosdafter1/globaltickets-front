import { useTranslation } from "react-i18next"


export const TrainType = () => {
    const {t} = useTranslation()
    let n = t('trainType.night');
    return{
        "1": t('trainType.night'),
        "2": t('trainType.nightExpress'),
        "3": t('trainType.express'),
        "4": t('trainType.intercity'),}
}