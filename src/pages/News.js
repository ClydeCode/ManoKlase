import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import "../styles/news.css";
import NewsCard from "../components/NewsCard";
import {useRef, useState} from "react";

export default function News() {
    const [date, setDate] = useState("2023-03");
    const cards = useRef([]);

    function handleScroll(e) {
        if (e.target.scrollTop >= 532) {
            setDate("2023-07");
        }

        console.log(e.target.scrollTop)
    }

    return (
        <div>
            <Navbar />
            <PageTitle title="Naujienos" />
            <div className="news-page-content">
                <p id="datetime">{date}</p>
                <div className="news-page-content-cards" onScroll={(e) => handleScroll(e)}>
                    <NewsCard reverse={false} />
                    <NewsCard reverse={true} />
                    <NewsCard reverse={false} />
                    <NewsCard reverse={true} />
                </div>
            </div>
        </div>
    )
}