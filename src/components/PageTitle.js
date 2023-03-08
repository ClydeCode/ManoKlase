import "../styles/pageContainer.css";

export default function PageTitle(props) {
    return (
        <div className="top-container">
            <p className="title">{props.title}</p>
        </div>
    )
}