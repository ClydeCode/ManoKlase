import "../styles/newsCard.css";

export default function NewsCard(props) {
    if(!props.reverse) {
        return (
            <div className="news-card" id={props.id}>
                <div className="news-card-text">
                    <p id="title">Europos kalbų diena</p>
                    <p id="desc">
                        Rugsėjo 26 dieną gimnazijos aktų
                        salėje vyko renginys, skirtas
                        Europos kalbų dienai
                    </p>
                </div>
                <div className="empty-image-container"></div>
            </div>
        )
    } else {
        return (
            <div className="news-card news-card-reverse" id={props.id}>
                <div className="empty-image-container"></div>
                <div className="news-card-text">
                    <p id="reverse-title">Europos kalbų diena</p>
                    <p id="reverse-desc">
                        Rugsėjo 26 dieną gimnazijos aktų
                        salėje vyko renginys, skirtas
                        Europos kalbų dienai
                    </p>
                </div>
            </div>
            )
    }
}