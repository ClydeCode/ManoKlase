import { useState } from "react";
import "../styles/editModal.css";
import axios from "axios";

export default function EditModal(props) {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('Id', props.id);
        formData.append('Title', title);
        formData.append('Description', description);
        formData.append('ImagePath', props.imagePath);
        formData.append('CreatedDate', props.createdDate);

        if (image) formData.append('file', image);

        axios.put(process.env.REACT_APP_WEBAPI + 'news/' + props.id + (image ? '/withimage/' : ''), formData, {
            headers: {
                'Content-Type': image ? 'multipart/form-data' : 'application/json'
            }
        })
        .then(() => {
            window.location.reload();
        })  
    }

    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleImage = (e) => setImage(e.target.files[0]);

    return (
        <div className="modal">
            <div className="edit-modal-box">
                Edit form
                <form className="modal-form" onSubmit={handleSubmit}>
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" onChange={handleImage}></input>

                    <label htmlFor="title">Title:</label>
                    <input id="title" value={title} onChange={handleTitle}></input>

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" rows="20" value={description} onChange={handleDescription}></textarea>

                    <div className="edit-modal-form-btns">
                        <button>Submit</button>
                        <button onClick={props.handleClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}