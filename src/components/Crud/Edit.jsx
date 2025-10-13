import { useState, useEffect } from "react";
function Edit({ item, updateMedicine }) {
  const [medicine, setMedicine] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    if (item) {
      setMedicine(item.medicine);
      setStock(item.AvailableStocks);
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMedicine(item.id, medicine, Number(stock));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="form-label">Medicine</label>
        <input
          type="text"
          className="form-control"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Available Stocks</label>
        <input
          type="number"
          className="form-control"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success">Update</button>
    </form>
  );
}

export default Edit;
