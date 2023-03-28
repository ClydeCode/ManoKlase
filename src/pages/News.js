import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import "../styles/news.css";
import NewsCard from "../components/NewsCard";
import {useRef, useState, useEffect} from "react";

export default function News() {
    const [news, setNews] = useState([]);
    const positionsAndDates = useRef([]);
    const [date, setDate] = useState();
    const scrollDiv = useRef();

    const fetchData = () => {
        return fetch(process.env.REACT_APP_WEBAPI + "news")
            .then(response => response.json())
            .then(data => data.sort((a, b) => Date.parse(a.createdDate) > Date.parse(b.createdDate) ? -1 : 1))
            .then(sortedData => setNews(sortedData));
    }

    function handleScroll(e) {
        positionsAndDates.current.forEach(item => {
            if (e.target.scrollTop >= item.position) {
                setDate(item.date);
            }
        })
    }

    function getPositionsAndDates() {
        let arr = [];

        for (let n = 0; n < scrollDiv.current.childNodes.length; n++) {
            const element = scrollDiv.current.childNodes[n];
            const date = element.id.substring(0, 7);

            arr.push({"position": element.offsetTop - 266, "date": date});
        }

        positionsAndDates.current = arr;
        setDate(positionsAndDates.current[0].date);
    }

    useEffect(() => {
        fetchData()
            .then(getPositionsAndDates)
    }, []);

    return (
        <div>
            <Navbar />
            <PageTitle title="Naujienos" />
            <div className="news-page-content">
                <p id="datetime">{date ? date : new Date().getFullYear()}</p>
                <div className="news-page-content-cards" onScroll={handleScroll} ref={scrollDiv}>
                    {news.map((item, index) => {
                        return <NewsCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            createdDate={item.createdDate}
                            reverse={index % 2}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}