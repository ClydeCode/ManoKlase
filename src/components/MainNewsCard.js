import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/mainNewsCard.css";

export default function MainNewsCard(props) {
    const [day, setDay] = useState(2);
    const [month, setMonth] = useState('Sausis');

    function handleDate() {
        const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis',
                        'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis',
                        'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis']

        setDay(props.createdDate.substring(8, 10));
        setMonth(months[props.createdDate.substring(5, 7).replace('0', '')]);
    }

    useEffect(() => {
        handleDate();
    }, []);

    return (
        <Link to={`/template/${props.id}`}>
            <div className="main-news-card">
                <div className="datetime-container">
                    <div className="datetime-container-center">
                        <p id="number">{day}</p>
                        <p id="month">{month}</p>
                    </div>
                </div>
                <p id="title">{props.title}</p>
                <p id="desc">
                    {props.desc.length > 100 ?
                        `${props.desc.substring(0, 100)}...` : props.desc
                    }
                </p>
                <img src={props.imageURL} className="image-container"></img>
            </div>
        </Link>
    )
}