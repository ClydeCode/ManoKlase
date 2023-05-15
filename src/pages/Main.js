import Navbar from "../components/Navbar";
import "../styles/pageContainer.css";
import PageTitle from "../components/PageTitle";
import MainNewsCard from "../components/MainNewsCard";
import "../styles/main.css";
import { useState, useEffect } from "react";

export default function Main() {
    const [news, setNews] = useState([]);

    const fetchData = async () => {
        return fetch(process.env.REACT_APP_WEBAPI + "news")
            .then(response => response.json())
            .then(data => data.sort((a, b) => Date.parse(a.createdDate) > Date.parse(b.createdDate) ? -1 : 1))
            .then(sortedData => setNews(sortedData));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <PageTitle title="Pagrindinis"/>
            {news.length > 0 &&
                <div className="main-page-content">
                    <MainNewsCard 
                        key={news[0].id}
                        id={news[0].id}
                        title={news[0].title}
                        desc={news[0].description}
                        imageURL={news[0].imagePath}
                        createdDate={news[0].createdDate}
                    />

                    <MainNewsCard 
                        key={1}
                        id={news[1].id}
                        title={news[1].title}
                        desc={news[1].description}
                        imageURL={news[1].imagePath}
                        createdDate={news[1].createdDate}
                    />

                    <MainNewsCard 
                        key={2}
                        id={news[2].id}
                        title={news[2].title}
                        desc={news[2].description}
                        imageURL={news[2].imagePath}
                        createdDate={news[2].createdDate}
                    />
                </div>
            }
        </div>
    )
}