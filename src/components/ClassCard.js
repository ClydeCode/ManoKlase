import "../styles/classCard.css";

export default function ClassCard(props) {
    return (
        <div className="class-card">
            <img src={process.env.REACT_APP_BACKEND + 'classImages/' + props.title + '.jpg'}></img>
            <div id="title">
                {props.title}
            </div>
            <div id="desc">
                {props.desc}
            </div>
        </div>
    )
}