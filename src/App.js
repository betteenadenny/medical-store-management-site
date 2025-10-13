// import { Link } from 'react-router-dom';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <header className="bg-primary text-white text-center py-5 mb-4 shadow">
//         <div className="container">
//           <h1 className="fw-bold">Welcome to the Medical Store Management System</h1>
//           <p className="lead">
//             Manage medicines efficiently — Add, Edit, Delete, and Search with ease!
//           </p>
//           <Link to="/medicine" className="btn btn-light btn-lg mt-3 shadow-sm">
//             Go to Medicine App
//           </Link>
//         </div>
//       </header>

//       <div className="container">
//         <div className="row text-center">
//           <h1 className="text-center fw-bold my-4">
//             <span className="text-primary px-3 py-1 rounded">
//               Our Features
//             </span>
//           </h1>
//             <div className="col-md-4 mb-4">
//             <div className="card h-100 shadow-sm border-0">
//               <div className="card-body">
//                 <h5 className="card-title text-primary">💊 Add Medicines</h5>
//                 <p className="card-text">
//                   Keep your stock updated by adding new medicines with just one click.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 mb-4">
//             <div className="card h-100 shadow-sm border-0">
//               <div className="card-body">
//                 <h5 className="card-title text-success">📋 Manage Inventory</h5>
//                 <p className="card-text">
//                   Edit or delete medicines anytime to keep your records accurate and clean.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 mb-4">
//             <div className="card h-100 shadow-sm border-0">
//               <div className="card-body">
//                 <h5 className="card-title text-danger">🔍 Search Quickly</h5>
//                 <p className="card-text">
//                   Find medicines instantly by name using search feature.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <footer className="text-center mt-5 mb-3 text-muted">
//           <hr />
//           <p>© 2025 Medical Store Management App | Built with ❤️ using React & Bootstrap</p>
//         </footer>
//       </div>
//     </div>

//   );
// }

// export default App;

import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        background: "linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5 shadow">
        <div className="container">
          <h1 className="fw-bold mb-3 display-5">
            Welcome to the Medical Store Management System
          </h1>
          <p className="lead mb-4">
            Manage your medicines efficiently — Add, Edit, Delete, and Search with ease!
          </p>
          <Link to="/medicine" className="btn btn-light btn-lg shadow-sm fw-semibold">
            Go to Medicine App
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <div className="container flex-grow-1">
        <h1 className="text-center fw-bold my-5">
          <span
            className="px-4 py-2 rounded-pill text-white"
            style={{ background: "linear-gradient(90deg, #0d6efd, #20c997)" }}
          >
            Our Features
          </span>
        </h1>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div
              className="card h-100 shadow border-0 transition"
              style={{
                backgroundColor: "#f8f9fa",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <div className="card-body">
                <h5 className="card-title text-primary">💊 Add Medicines</h5>
                <p className="card-text text-secondary">
                  Keep your stock updated by adding new medicines with just one click.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card h-100 shadow border-0"
              style={{
                backgroundColor: "#f8f9fa",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <div className="card-body">
                <h5 className="card-title text-success">📋 Manage Inventory</h5>
                <p className="card-text text-secondary">
                  Edit or delete medicines anytime to keep your records accurate and clean.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card h-100 shadow border-0"
              style={{
                backgroundColor: "#f8f9fa",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <div className="card-body">
                <h5 className="card-title text-danger">🔍 Search Quickly</h5>
                <p className="card-text text-secondary">
                  Find medicines instantly by name using the search feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        className="text-center mt-auto py-4 text-white"
        style={{
          background: "linear-gradient(90deg, #0d6efd, #20c997)",
        }}
      >
        <p className="mb-0 fw-semibold">
          © 2025 Medical Store Management App | Built with ❤️ using React & Bootstrap
        </p>
      </footer>
    </div>
  );
}

export default App;

