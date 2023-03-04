import "../styles/pageContainer.css";

export default function PageContainer(props) {
    return (
        <div className="top-container">
            <p className="title">{props.title}</p>
        </div>
    )
}