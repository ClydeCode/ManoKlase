import "../styles/about.css";
import PageTitle from "../components/PageTitle";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div>
            <Navbar />
            <PageTitle title="Apie"/>
            <div className="about-page-content">
                <p>
                    Šių metų rugsėjo mėnesį gimė projektinio darbo idėja - klasės tinklapis. 
                    Praleidus keletą dienų prie kompiuterio spaudant įvairius klaviatūros klavišus atsirado šioks toks tinklapis. 
                    Bet vis dėl to, jis čia - aš aprašiau, jūs skaitot. 
                    Tikiuosi kad 3B mokiniams (ir tiems, kas vertins mano projektinį darbą) patiks šis tinklapis. 
                    Kaip vienas šios nuostabios klasės mokinių yra pasakęs "svarbiausia, kad bandymas matytųsi".
                </p>
            </div>
        </div>
    )
}