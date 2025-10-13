import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar";
import Create from "./Create";
import List from "./List";
import Edit from "./Edit";
import Delete from "./Delete";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function MedicineApp() {
  const user = useSelector(store => store.auth.user);
  const [masterItems, setMasterItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const maxLimit = 5
  const [nextId, setNextId] = useState(1);
  const [showCreate, setShowCreate] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
  const stored = JSON.parse(localStorage.getItem(`medicines_${user.email}`)) || [];
  setMasterItems(stored);
  setNextId(stored.length > 0 ? stored[stored.length-1].id + 1 : 1);
}, [user]);

  useEffect(() => {
      if(user){
        localStorage.setItem(`medicines_${user.email}`,JSON.stringify(masterItems))
      }
      setDisplayedItems(masterItems);
  }, [masterItems,user]);

  const addMedicine = (medicine, stock) => {
    const newItem = {
      id: nextId,
      medicine,
      AvailableStocks: stock,
      AddedTime: new Date(),
    };
    setMasterItems([...masterItems, newItem]);
    setShowCreate(false);
    setNextId(nextId+1);
  };

  const handleOpenModal = () => {
    if (masterItems.length >= maxLimit) {
      alert("Maximum limit of 5 medicines reached!");
      return;
    }
    setShowCreate(true);
  };

  const updateMedicine = (id, medicine, stock) => {
    setMasterItems(
      masterItems.map((item) =>
        item.id === id
          ? { ...item, medicine, AvailableStocks: stock }
          : item
      )
    );
    setEditItem(null);
  };

  const confirmDelete = (item) => {
  setMasterItems(masterItems.filter((i) => i.id !== item.id));
  setDeleteItem(null);
};


  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm === "") {
        setDisplayedItems(masterItems); 
        return;
    }

    const filteredItems = masterItems.filter((item) =>
        item.medicine.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedItems(filteredItems);
    setSearchTerm('');
  };



  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <h2>Medicine Management</h2>

        <button className="btn btn-primary mb-3" onClick={handleOpenModal}>
          Add Medicine
        </button>

        {displayedItems.length === 0 && masterItems.length === 0 ? (
          <p className="text-muted">No medicines to display. Add some medicines to continue.</p>
        ) : (
          <List items={displayedItems} onEdit={setEditItem} onDelete={setDeleteItem} />
        )}

        {/* Create Modal */}
        {showCreate && (
          <>
            <div className="modal show fade d-block">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add Medicine</h5>
                    <button className="close" onClick={() => setShowCreate(false)}>
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Create addMedicine={addMedicine} />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show"></div>
          </>
        )}

        {/* Edit Modal */}
        {editItem && (
          <>
            <div className="modal show fade d-block">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Medicine</h5>
                    <button className="close" onClick={() => setEditItem(null)}>
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Edit item={editItem} updateMedicine={updateMedicine} />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show"></div>
          </>
        )}

        {/* Delete Modal */}
        {deleteItem && (
          <>
            <Delete
              item={deleteItem}
              confirmDelete={confirmDelete}
              cancelDelete={() => setDeleteItem(null)}
            />
            <div className="modal-backdrop fade show"></div>
          </>
        )}

         <form onSubmit={handleSearch}>
            <label>Search Name: </label>
            <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />&nbsp;
            <button className="btn btn-small btn-success" type="submit">Search</button>&nbsp;
        </form>
      </div>

      
    </div>
    
  );
}

export default checkAuth(MedicineApp);
