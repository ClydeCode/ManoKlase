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
                    title="Inga Jakubonienė"
                    desc="Gyventi reikia taip, kad atsisukus atgal nebūtų gėda, kas ir koks tu buvai"
                />
            </div>
            <div className="class-page-content">
                <ClassCard
                    title="Augustas Baršauskas"
                    desc="מי שיקרא את זה יהיה תרנגול"
                />
                <ClassCard
                    title="Laurynas Bulovas"
                    desc="Today's pain is tomorrow's power"
                />
                <ClassCard
                    title="Darija Grybytė"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Simona Jasukaitytė"
                    desc="Nori pusryčių į lovą? Miegok virtuvėje..."
                />
                <ClassCard
                    title="Deimantas Kairys"
                    desc="Esu 5 minutėmis jaunesnis..."
                />
                <ClassCard
                    title="Danielė Kairytė"
                    desc="...Geriausios 5 minutės gyvenime"
                />
                <ClassCard
                    title="Gabrielė Kavaliauskaitė"
                    desc="When you reach the end of your rope, tie a knot in it and hang on"
                />
                <ClassCard
                    title="Austėja Kubiliūtė"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Nedas Kukoris"
                    desc="rūkymo zonoje"
                />
                <ClassCard
                    title="Aida Lauraitytė"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Sandra Magelinskaitė"
                    desc="一切都是相連的，直到你找到它並斷開與靈魂之旅相連的一切——桑德拉"
                />
                <ClassCard
                    title="Domantas Matas"
                    desc="Per gyvenimą, žmogus privalo patirti tokį dalyką, kurio niekada gyvenime neužmirš"
                />
                <ClassCard
                    title="Ugnė Meliūnaitė"
                    desc="Lengviau gauti atleidimą negu leidimą😉"
                />
                <ClassCard
                    title="Irūna Merkelytė"
                    desc="“Sunku išbūti žmogumi paprastu” -OG Version"
                />
                <ClassCard
                    title="Arnas Povilonis"
                    desc="pp"
                />
                <ClassCard
                    title="Viktorija Pučekaitė"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Aušrius Rumbutis"
                    desc="jei durniai galėtų skraidyti, ši mokykla būtų oro uostas"
                />
                <ClassCard
                    title="Domas Sargevičius"
                    desc="Svarbiausia, kad bandymas matytųsi"
                />
                <ClassCard
                    title="Meida Smailytė"
                    desc="You never know"
                />
                <ClassCard
                    title="Eligijus Šileika"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Miglė Tautkutė"
                    desc="“Nesureikšminkite gyvenimo. Jūs niekada nepaspruksite iš jo gyvas.” -Elbert Hubbard"
                />
                <ClassCard
                    title="Jonas Trasauskas"
                    desc="Visada reikia tikėti savimi"
                />
                <ClassCard
                    title="Rusnė Vaitekūnaitė"
                    desc="another day another slay"
                />
                <ClassCard
                    title="Livita Valintelytė"
                    desc="tyngėjau sugalvoti citatą"
                />
                <ClassCard
                    title="Viktorija Varžinskaitė"
                    desc="life is soup and i am fork"
                />
                <ClassCard
                    title="Neilas Zaborskis"
                    desc="once you go black you never go back"
                />
                <ClassCard
                    title="Gabriela Zamalytė"
                    desc="When life gives you lemonade, make lemons. Life will be all like, “What?!”"
                />
                <ClassCard
                    title="Žemyna Zavistauskaitė"
                    desc="tyngėjau sugalvoti citatą"
                />
            </div>
        </div>
    )
}