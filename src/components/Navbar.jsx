import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";

function Navbar() {
  const user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(removeUser());
    navigate("/login");
    }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to={"/"} className="nav-link">
          <h4>Medicine Management</h4>
        </NavLink>        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Home
              </NavLink>
            </li> */}

            {!user && (
              <>
                <li className="nav-item">
                  <NavLink to={"/register"} className="nav-link">Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/login"} className="nav-link">Login</NavLink>
                </li>
              </>
            )}

            {user && (
              <li className="nav-item">
                <NavLink to={"/medicine"} className="nav-link">
                  Records
                </NavLink>
              </li>
            )}

            {user && (
            <li className="nav-item">
              <button onClick={logout} className="nav-link btn btn-link">
                Logout
              </button>
            </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



