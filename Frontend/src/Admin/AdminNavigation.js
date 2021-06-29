import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Admin.css";
function AdminNavigation() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user);
  function logout() {
    localStorage.clear();
    history.push("/home");
  }
  function home() {
    history.push("/");
  }
  return (
    <div className="navC">
      <Navbar bg="dark" variant="dark">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <Navbar.Brand>Admin Page</Navbar.Brand>
        </Link>
        <Nav className="mr-auto nav-bar-wrapper ">
          {localStorage.getItem("user-info") ? (
            <>
            <div className="pd">
              <Link to="/add" style={{ textDecoration: "none" }}>
                Add Product
              </Link>
                </div>
                <div className="pd">
              <Link to="/" style={{ textDecoration: "none" }}>
                Home Page
              </Link>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default AdminNavigation;
