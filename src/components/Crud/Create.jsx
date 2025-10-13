import { useState } from "react";
function Create({ addMedicine }) {
  const [medicine, setMedicine] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!medicine || !stock) return;
    addMedicine(medicine, Number(stock));
    setMedicine("");
    setStock("");
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

      <button type="submit" className="btn btn-success">Add</button>
    </form>
  );
}

export default Create;
