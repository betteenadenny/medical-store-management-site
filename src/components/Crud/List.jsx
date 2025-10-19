import { useState } from "react";

function List({ items = [], onDelete = () => {}, onEdit = () => {} }) {
  const [currentPage,setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = [...items].reverse().slice(indexOfFirstItem,indexOfLastItem);

  const totalPages = Math.ceil(items.length/itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

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
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.medicine}</td>
              <td>{item.AvailableStocks}</td>
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

      <div style={{marginTop:"15px"}}>
          {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: "5px",
              backgroundColor: currentPage === index + 1 ? "#4CAF50" : "#f0f0f0",
              color: currentPage === index + 1 ? "white" : "black",
              border: "none",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default List;
