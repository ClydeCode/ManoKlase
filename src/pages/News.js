import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import "../styles/news.css";
import NewsCard from "../components/NewsCard";
import {useEffect, useState} from "react";

export default function News() {
    const [news, setNews] = useState([]);

    const fetchData = () => {
        return fetch(process.env.REACT_APP_WEBAPI + "news")
            .then(response => response.json())
            .then(data => setNews(data));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <PageTitle title="Naujienos" />
            <div className="news-page-content">
                <p id="datetime">2023-03</p>
                <div className="news-page-content-cards">
                    {news.map((item, index) => {
                        return <NewsCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                reverse={!index % 2}
                                />
                    })}
                </div>
            </div>
        </div>
    )
}