import withTranslation from "../hoc/withTranslation";
import logo from "../icons/icon.png"
import gb from "../icons/gb.svg"
import de from "../icons/de.svg"

const Header = (props) => (
    <div className="header">
        <div className="header__item">
            <img className="logotype" src={logo} alt=""/>
            <div className="title">{props.t("header")}</div>
        </div>
        <div className="header__item">
            <img className={props.t('language') === 'en' ? 'locale en' : 'locale'}
                 onClick={() => props.changeLanguage("en")} src={gb} alt=""/>
            <img className={props.t('language') === 'de' ? 'locale de' : 'locale'}
                 onClick={() => props.changeLanguage("de")} src={de} alt=""/>
        </div>
    </div>
)

export default withTranslation(Header)

