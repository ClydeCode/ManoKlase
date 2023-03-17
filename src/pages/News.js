import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import "../styles/news.css";
import NewsCard from "../components/NewsCard";
import {useRef, useState} from "react";

export default function News() {
    const index = useRef(0);
    const data = [{"position": 120, "date": "2023-06"}, {"position": 320, "date": "2023-03"}, {"position": 520, "date": "2023-01"}];
    const [date, setDate] = useState(data[index.current].date);

    function handleScroll(e) {
        if (index.current > 0) {
            if (e.target.scrollTop <= data[index.current].position) {
                setDate(data[index.current - 1].date);
                index.current = index.current - 1;
            }
        }

        if (data[index.current + 1] != null)
            if (e.target.scrollTop >= data[index.current + 1].position) {
                setDate(data[index.current + 1].date);
                index.current = index.current + 1;
            }

        console.log(index);
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