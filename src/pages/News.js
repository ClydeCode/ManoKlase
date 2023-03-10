import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import "../styles/news.css";
import NewsCard from "../components/NewsCard";

export default function News() {
    return (
        <div>
            <Navbar />
            <PageTitle title="Naujienos" />
            <div className="news-page-content">
                <p id="datetime">2023-03</p>
                <div className="news-page-content-cards">
                    <NewsCard reverse={false} />
                    <NewsCard reverse={true} />
                    <NewsCard reverse={false} />
                </div>
            </div>
        </div>
    )
}