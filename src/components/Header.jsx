import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navBody">
        <div className="container-fluid">
          <Link className="navbar-brand topName" to="/">
            WordWiz
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link " to="/" end>
                Home
              </NavLink>
              <NavLink className="nav-link" to="/content">
                Search
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
// import React from "react";

// const Header = () => {
//   return <div>Header</div>;
// };

// export default Header;
