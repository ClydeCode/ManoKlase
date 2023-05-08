import "../styles/newsTemplate.css";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function NewsTemplate() {
    const { id } = useParams()
    const [title, setTitle] = useState('Loading...');
    const [description, setDescription] = useState('Loading...');
    const [imageURL, setImageURL] = useState('');

    const fetchData = () => {
        return fetch(process.env.REACT_APP_WEBAPI + "news/" + id)
            .then(response => response.json())
            .then(data => {
                setTitle(data.title);
                setDescription(data.description);
                setImageURL(data.imagePath);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="new-page-content">
            <Navbar />
            <PageTitle title={title}/>
            <div className="new-page-content-wrap">
                <img src={imageURL} alt=""></img>
                <p>{description}</p>
            </div>
        </div>
    )
}