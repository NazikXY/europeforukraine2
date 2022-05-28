import {useTranslation} from "react-i18next";
import "../i18n";

const withTranslation = Component => ({...props}) => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (

        <div className="wrapper__item">
            <div className="container">
                <Component t = {t} changeLanguage = {changeLanguage}/>
            </div>
        </div>
    )
}

export default withTranslation
