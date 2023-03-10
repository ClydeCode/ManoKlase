import "../styles/mainNewsCard.css";

export default function MainNewsCard() {
    return (
        <div className="main-news-card">
            <div className="datetime-container">
                <div className="datetime-container-center">
                    <p id="number">24</p>
                    <p id="month">Birželis</p>
                </div>
            </div>
            <p id="title">Europos kalbų diena</p>
            <p id="desc">
                Rugsėjo 26 dieną gimnazijos aktų
                salėje vyko renginys, skirtas
                Europos kalbų dienai
            </p>
            <div className="empty-image-container"></div>
        </div>
    )
}