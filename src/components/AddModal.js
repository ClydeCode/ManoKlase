import { useState } from "react";

export default function AddModal(props) {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [image, setImage] = useState(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(process.env.REACT_APP_WEBAPI + "news", {
            method: "POST",
            body: JSON.stringify({
                Id: 76,
                Title: title,
                Description: description,
                file: image,
                CreatedDate: '2003-03-03'
            }),
            headers: {
                "Content-type": "multipart/form-data;"
            }
        })
        .then((response) => {
            if (response.ok) window.location.reload();
        })
    }

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }

    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);

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