import "../styles/classCard.css";

export default function ClassCard(props) {
    return (
        <div className="class-card">
            <div className="empty-image-container"></div>
            <div id="title">
                {props.title}
            </div>
            <div id="desc">
                {props.desc}
            </div>
        </div>
    )
}