import "../styles/newsCard.css";
import { Link } from "react-router-dom";

export default function NewsCard(props) {
    if(!props.reverse) {
        return (
            <Link to={`/template/${props.id}`}>
                <div className="news-card" id={props.createdDate}>
                    <div className="news-card-text">
                        <p id="title">{props.title}</p>
                        <p id="desc">
                            {props.description}
                        </p>
                    </div>
                    <img className="image-container" src={props.imageURL}></img>
                </div>
            </Link>
        )
    } else {
        return (
            <Link to={`/template/${props.id}`}>
                <div className="news-card news-card-reverse" id={props.createdDate}>
                    <img className="image-container" src={props.imageURL}></img>
                    <div className="news-card-text">
                        <p id="reverse-title">{props.title}</p>
                        <p id="reverse-desc">
                            {props.description}
                        </p>
                    </div>
                </div>
            </Link>
        )
    }
}