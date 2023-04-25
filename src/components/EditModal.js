import { useState } from "react";
import "../styles/editModal.css";

export default function EditModal(props) {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(process.env.REACT_APP_WEBAPI + "news/" + props.id, {
            method: "PUT",
            body: JSON.stringify({
                Id: props.id,
                Title: title,
                Description: description,
                ImagePath: props.imagePath,
                CreatedDate: props.createdDate
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then((response) => {
            if (response.ok) window.location.reload();
        })
        
    }

    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);

    return (
        <div className="edit-modal">
            <div className="edit-modal-box">
                Edit form
                <form className="edit-modal-form" onSubmit={handleSubmit}>
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image"></input>

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