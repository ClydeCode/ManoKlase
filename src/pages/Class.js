import "../styles/class.css";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import ClassCard from "../components/ClassCard";

export default function Class() {
    return (
        <div>
            <Navbar />
            <PageTitle title="Klasė" />
            <div className="class-page-content-center">
                <ClassCard
                    title="Vardas Pavarde"
                    desc="“Nesureikšminkite gyvenimo. Jūs niekada nepaspruksite iš jo gyvas.” -Elbert Hubbard"
                />
            </div>
            <div className="class-page-content">
                <ClassCard
                    title="Vardas Pavarde"
                    desc="“Nesureikšminkite gyvenimo. Jūs niekada nepaspruksite iš jo gyvas.” -Elbert Hubbard"
                />
                <ClassCard
                    title="Vardas Pavarde"
                    desc="“Nesureikšminkite gyvenimo. Jūs niekada nepaspruksite iš jo gyvas.” -Elbert Hubbard"
                />
                <ClassCard
                    title="Vardas Pavarde"
                    desc="“Nesureikšminkite gyvenimo. Jūs niekada nepaspruksite iš jo gyvas.” -Elbert Hubbard"
                />
                <ClassCard
                    title="Vardas Pavarde"
                    desc="“Nesureikšminkite gyvenimo. Jūs niekada nepaspruksite iš jo gyvas.” -Elbert Hubbard"
                />
                <ClassCard
                    title="Vardas Pavarde"
                    desc="“Nesureikšminkite gyvenimo. Jūs niekada nepaspruksite iš jo gyvas.” -Elbert Hubbard"
                />
                <ClassCard
                    title="Vardas Pavarde"
                    desc="“Nesureikšminkite gyvenimo. Jūs niekada nepaspruksite iš jo gyvas.” -Elbert Hubbard"
                />
            </div>
        </div>
    )
}