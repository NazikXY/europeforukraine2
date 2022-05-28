import withTranslation from "../hoc/withTranslation";
import email from "../icons/email.png"
import twitter from "../icons/twitter.png"

const Footer = (props) => (
    <div className="footer">
        <div className="footer__item">
            <a href="https://twitter.com/EuropefUkraine" target={"_blank"} rel="noreferrer">
                <img className="image" src={twitter} alt=""/>
            </a>
        </div>
        <div className="footer__item">
            <div className="text">
                {props.t('footer.end')}
            </div>
        </div>
        <div className="footer__item">
            <a href='mailto:europeforukrainefund@gmail.com'>
                <img className="image" src={email} alt=""/>
            </a>
        </div>
    </div>
)

export default withTranslation(Footer)