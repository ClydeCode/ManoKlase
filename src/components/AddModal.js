import axios from "axios";
import { useState } from "react";

export default function AddModal(props) {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [image, setImage] = useState(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        var formData = new FormData();

        formData.append('title', title);
        formData.append('description', description);
        formData.append('file', image);

        axios.post(`${process.env.REACT_APP_WEBAPI}news`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            if (response.ok) window.location.reload();
        })
    }

    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleImage = (e) => setImage(e.target.files[0]);

    return (
        <div className="modal">
            <div className="add-modal-box">
                Add form
                <div>
                    <form className="modal-form" onSubmit={handleSubmit}>
                        <label htmlFor="image">Image:</label>
                        <input type="file" onChange={handleImage} id="image"></input>

                        <label htmlFor="title">Title:</label>
                        <input id="title" value={title} onChange={handleTitle}></input>

                        <label htmlFor="description">Description:</label>
                        <textarea id="description" rows="20" value={description} onChange={handleDescription}></textarea>

                        <div className="add-modal-form-btns">
                            <button>Submit</button>
                            <button onClick={props.handleClose}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}