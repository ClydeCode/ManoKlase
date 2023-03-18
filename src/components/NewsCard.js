import "../styles/newsCard.css";

export default function NewsCard(props) {
    if(!props.reverse) {
        return (
            <div className="news-card">
                <div className="news-card-text">
                    <p id="title">{props.title}</p>
                    <p id="desc">
                        {props.description}
                    </p>
                </div>
                <div className="empty-image-container"></div>
            </div>
        )
    } else {
        return (
            <div className="news-card news-card-reverse">
                <div className="empty-image-container"></div>
                <div className="news-card-text">
                    <p id="reverse-title">{props.title}</p>
                    <p id="reverse-desc">
                        {props.description}
                    </p>
                </div>
            </div>
        )
    }
}