import "../styles/admin.css";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi"
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal"
import AddModal from "../components/AddModal";

export default function Admin() {
    const [news, setNews] = useState([]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false); 

    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [imagePath, setImagePath] = useState();
    const [createdDate, setCreatedDate] = useState();

    const fetchData = () => {
        return fetch(process.env.REACT_APP_WEBAPI + "news")
            .then(response => response.json())
            .then(data => data.sort((a, b) => Date.parse(a.createdDate) > Date.parse(b.createdDate) ? -1 : 1))
            .then(sortedData => setNews(sortedData));
    }

    const handleAdd = (item) => {
        setId(item.id);
        setTitle(item.title);
        setDescription(item.description);
        setImagePath(item.imagePath);
        setCreatedDate(item.createdDate);
        setShowAddModal(true);
    }

    const handleEdit = (item) => {
        setId(item.id);
        setTitle(item.title);
        setDescription(item.description);
        setImagePath(item.imagePath);
        setCreatedDate(item.createdDate);
        setShowEditModal(true);
    }

    const handleDelete = (item) => {
        setId(item.id);
        setShowDeleteModal(true);
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="admin-page">
            <h1 id="admin-page-title">Admin Panel <p onClick={handleAdd} id="admin-page-add-btn"><BiMessageSquareAdd /></p></h1>
            <div className="admin-page-content">
                {news.map((item, index) => {
                    return <div className="admin-news-item" key={item.id}>
                       <div className="admin-news-item-title"> {index + 1}. {item.title} </div>
                       <div className="admin-news-rightside">
                        <div className="admin-news-item-date">{item.createdDate.substring(0, 10)}</div>
                        <div className="admin-news-item-btns">
                                <button onClick={() => handleEdit(item)}><MdEdit /></button>
                                <button onClick={() => handleDelete(item)}><AiOutlineDelete /></button> 
                            </div>
                       </div>
                    </div>
                })}
            </div>
            {showEditModal && <EditModal 
                                id={id}
                                title={title}
                                description={description}
                                imagePath={imagePath}
                                createdDate={createdDate}
                                handleClose={handleCloseEditModal}
                    />
            }
            {showDeleteModal && <DeleteModal 
                                id={id}
                                handleClose={handleCloseDeleteModal}
                    />
            }
            {showAddModal && <AddModal 
                                id={id}
                                title={title}
                                description={description}
                                imagePath={imagePath}
                                createdDate={createdDate}
                                handleClose={handleCloseAddModal}
                    />
            }
        </div>
    )
}