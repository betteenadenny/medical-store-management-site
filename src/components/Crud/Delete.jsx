function Delete({ item, confirmDelete, cancelDelete }) {
  if (!item) return null;

  return (
    <div className="modal show fade d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Delete</h5>
            <button type="button" className="close" onClick={cancelDelete}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Are you sure you want to delete <strong>{item.medicine}</strong> 
              with <strong>available stocks {item.AvailableStocks}</strong>?
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => confirmDelete(item)}
            >
              Delete
            </button>
            <button type="button" className="btn btn-secondary" onClick={cancelDelete}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
