import "../styles/editModal.css";

export default function EditModal(props) {
    return (
        <div className="edit-modal">
            <div className="edit-modal-box">
                Edit form
                <form className="edit-modal-form">
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image"></input>

                    <label htmlFor="title">Title:</label>
                    <input id="title" value={props.title}></input>

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" rows="20" value={props.description}></textarea>

                    <div className="edit-modal-form-btns">
                        <button>Submit</button>
                        <button onClick={props.handleClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}