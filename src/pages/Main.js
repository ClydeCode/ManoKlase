import Navbar from "../components/Navbar";
import "../styles/pageContainer.css";
import PageContainer from "../components/PageContainer";
import NewsCard from "../components/NewsCard";
import "../styles/main.css";

export default function Main() {
    return (
        <div>
            <Navbar />
            <PageContainer title="Pagrindinis"/>
            <div className="main-page-content">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    )
}