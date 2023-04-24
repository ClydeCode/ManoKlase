import "../styles/editModal.css";

export default function EditModal() {
    return (
        <div className="edit-modal edit-modal-active">
            <div className="edit-modal-box">
                Edit form
                <form className="edit-modal-form">
                    <label for="image">Image:</label>
                    <input type="file" id="image"></input>

                    <label for="title">Title:</label>
                    <input id="title"></input>

                    <label for="description">Description:</label>
                    <textarea id="description" rows="20"></textarea>

                    <div className="edit-modal-form-btns">
                        <button>Submit</button>
                        <button>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}