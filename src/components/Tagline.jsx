import withTranslation from "../hoc/withTranslation";

const Tagline = (props) => (
    <div className="tagline">
        <div className="title">
            {props.t('content.title')}
        </div>
    </div>
)

export default withTranslation(Tagline)