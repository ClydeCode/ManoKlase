import Navbar from "../components/Navbar";
import "../styles/pageContainer.css";
import PageTitle from "../components/PageTitle";
import NewsCard from "../components/NewsCard";
import "../styles/main.css";

export default function Main() {
    return (
        <div>
            <Navbar />
            <PageTitle title="Pagrindinis"/>
            <div className="main-page-content">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    )
}