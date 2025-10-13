function List({ items = [], onDelete = () => {}, onEdit = () => {} }) {
  return (
    <div>
      <h2>Medicines List</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Medicine</th>
            <th>Available Stocks</th>
            <th>Added Time</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.medicine}</td>
              <td>{item.AvailableStocks}</td>
              {/* Ensure AddedTime is a Date object */}
              <td>{item.AddedTime ? new Date(item.AddedTime).toDateString() : '-'}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
