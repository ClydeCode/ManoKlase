import Navbar from "../components/Navbar";
import "../styles/pageContainer.css";
import PageTitle from "../components/PageTitle";
import MainNewsCard from "../components/MainNewsCard";
import "../styles/main.css";

export default function Main() {
    return (
        <div>
            <Navbar />
            <PageTitle title="Pagrindinis"/>
            <div className="main-page-content">
                <MainNewsCard />
                <MainNewsCard />
                <MainNewsCard />
            </div>
        </div>
    )
}