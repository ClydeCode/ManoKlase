import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import "../styles/news.css";
import NewsCard from "../components/NewsCard";
import {useRef, useState, useEffect} from "react";

export default function News() {
    const [news, setNews] = useState([]);
    const data = [{"position": 0, "date": "2023-06"}, {"position": 30, "date": "2023-03"}, {"position": 520, "date": "2023-01"}];
    const [date, setDate] = useState(data[0].date);

    const fetchData = () => {
        return fetch(process.env.REACT_APP_WEBAPI + "news")
            .then(response => response.json())
            .then(data => setNews(data));
    }

    function handleScroll(e) {
        data.forEach(item => {
            if (e.target.scrollTop >= item.position) {
                setDate(item.date);
            }
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <PageTitle title="Naujienos" />
            <div className="news-page-content">
                <p id="datetime">{date}</p>
                <div className="news-page-content-cards" onScroll={handleScroll}>
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