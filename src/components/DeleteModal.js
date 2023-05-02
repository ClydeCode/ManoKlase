import "../styles/deleteModal.css";

export default function DeleteBox(props) {

    const handleDelete = (e) => {
        e.preventDefault();

        fetch(process.env.REACT_APP_WEBAPI + "news/" + props.id, {
            method: "DELETE",
            // body: JSON.stringify({
            //     Id: props.id,
            //     Title: title,
            //     Description: description,
            //     ImagePath: props.imagePath,
            //     CreatedDate: props.createdDate
            // }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then((response) => {
            if (response.ok) window.location.reload();
        })
    }

    return (
        <div className="modal">
            <div className="delete-modal-box">
                Are you sure you want to delete?
                <div className="delete-modal-btns">
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={props.handleClose}>Close</button>
                </div>
            </div>
        </div>
    )
}