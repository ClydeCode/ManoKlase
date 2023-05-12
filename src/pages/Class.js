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
                    title="Inga_Jakubonienė"
                    desc="Gyventi reikia taip, kad atsisukus atgal nebūtų gėda, kas ir koks tu buvai"
                />
            </div>
            <div className="class-page-content">
                <ClassCard
                    title="Augustas_Baršauskas"
                    desc="מי שיקרא את זה יהיה תרנגול"
                />
                <ClassCard
                    title="Laurynas_Bulovas"
                    desc="Today's pain is tomorrow's power"
                />
                <ClassCard
                    title="Darija_Grybytė"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Simona_Jasukaitytė"
                    desc="Nori pusryčių į lovą? Miegok virtuvėje..."
                />
                <ClassCard
                    title="Deimantas_Kairys"
                    desc="Esu 5 minutėmis jaunesnis..."
                />
                <ClassCard
                    title="Danielė_Kairytė"
                    desc="...Geriausios 5 minutės gyvenime"
                />
                <ClassCard
                    title="Gabrielė_Kavaliauskaitė"
                    desc="When you reach the end of your rope, tie a knot in it and hang on"
                />
                <ClassCard
                    title="Austėja_Kubiliūtė"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Nedas_Kukoris"
                    desc="rūkymo zonoje"
                />
                <ClassCard
                    title="Aida_Lauraitytė"
                    desc="“tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Sandra_Magelinskaitė"
                    desc="一切都是相連的，直到你找到它並斷開與靈魂之旅相連的一切——桑德拉"
                />
                <ClassCard
                    title="Domantas_Matas"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Ugnė_Meliūnaitė"
                    desc="Lengviau gauti atleidimą negu leidimą😉"
                />
                <ClassCard
                    title="Irūna_Merkelytė"
                    desc="“Sunku išbūti žmogumi paprastu” -OG Version"
                />
                <ClassCard
                    title="Arnas_Povilonis"
                    desc="pp"
                />
                <ClassCard
                    title="Viktorija_Pučekaitė"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Aušrius_Rumbutis"
                    desc="jei durniai galėtų skraidyti, ši mokykla būtų oro uostas"
                />
                <ClassCard
                    title="Domas_Sargevičius"
                    desc="Svarbiausia, kad bandymas matytųsi"
                />
                <ClassCard
                    title="Meida_Smailytė"
                    desc="You never know"
                />
                <ClassCard
                    title="Eligijus_Šileika"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Miglė_Tautkutė"
                    desc="“Nesureikšminkite gyvenimo. Jūs niekada nepaspruksite iš jo gyvas.” -Elbert Hubbard"
                />
                <ClassCard
                    title="Jonas_Trasauskas"
                    desc="Visada reikia tikėti savimi"
                />
                <ClassCard
                    title="Rusnė_Vaitekūnaitė"
                    desc="another day another slay"
                />
                <ClassCard
                    title="Livita_Valintelytė"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Viktorija_Varžinskaitė"
                    desc="life is soup and i am fork"
                />
                <ClassCard
                    title="Neilas_Zaborskis"
                    desc="once you go black you never go back"
                />
                <ClassCard
                    title="Gabriela_Zamalytė"
                    desc="When life gives you lemonade, make lemons. Life will be all like, “What?!”"
                />
                <ClassCard
                    title="Žemyna_Zavistauskaitė"
                    desc="tyngėjau sugalvoti citatą"
                />
            </div>
        </div>
    )
}