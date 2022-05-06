import { React, useContext } from "react";
import { AppContext } from "./AppContext";

const Navbar = () => {
  //const { logout } = useContext(AppContext);
  return (
    <div>
      <header className="p-3 text-white bg-dark">
        <div className="container">
          <div className="flex-wrap d-flex align-items-center justify-content-center justify-content-lg-start">
            <h1>
              Blog<span className="text-blue-500">Post</span>
            </h1>
            <a className="mb-2 text-white d-flex align-items-center mb-lg-0 text-decoration-none"></a>

            <ul className="mb-2 nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0">
              <li>
                <a href="#" className="px-2 nav-link text-secondary"></a>
              </li>
              <li>
                <a href="./" className="px-2 nav-link text-secondary">
                  Home
                </a>
              </li>
            </ul>

            <div className="text-end">
              <button
                type="button"
                className="btn btn-primary"
                // onClick={logout} la partie logout m'envoie des erreurs
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
