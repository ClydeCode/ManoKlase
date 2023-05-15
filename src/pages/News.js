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

    const fetchData = async () => {
        return fetch(process.env.REACT_APP_WEBAPI + "news")
            .then(response => response.json())
            .then(data => data.sort((a, b) => Date.parse(a.createdDate) > Date.parse(b.createdDate) ? -1 : 1))
            .then(sortedData => {
                setNews(sortedData);
                return sortedData;
            });
    }

    function handleScroll(e) {
        positionsAndDates.current.forEach(item => {
            if (e.target.scrollTop >= item.position) {
                setDate(item.date);
            }
        })
    }

    async function getPositionsAndDates() {
        let arr = [];
        
        if (scrollDiv.current.childNodes.length == 0) return;

        for (let n = 0; n < scrollDiv.current.childNodes.length; n++) {
            const element = scrollDiv.current.childNodes[n].childNodes[0];
            const date = element.id.substring(0, 7);

            arr.push({"position": element.offsetTop - 290, "date": date});
        }

        positionsAndDates.current = arr;
        setDate(positionsAndDates.current[0].date);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        getPositionsAndDates();
    }, [news]);

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
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            imageURL={item.imagePath}
                            createdDate={item.createdDate}
                            reverse={index % 2}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}