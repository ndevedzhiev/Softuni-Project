import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../contexts/authContext.js";

export default function Header() {
  const { isAuthenticated, changeAuthState } = useContext(authContext);

  const handleLogout = () => {
    changeAuthState({});
    localStorage.removeItem('accessToken');
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://iconape.com/wp-content/png_logo_vector/ios-car.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Prime Cars
            </span>
          </NavLink>

          <div className="flex items-center lg:order-2">
            {!isAuthenticated && (
              <>
                <NavLink
                  to="/login"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  style={({ isActive }) => (isActive ? { color: '#E11D48' } : {})}
                >
                  Log in
                </NavLink>

                <NavLink
                  to="/register"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  style={({ isActive }) => (isActive ? { color: '#E11D48' } : {})}
                >
                  Sign Up
                </NavLink>
              </>
            )}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Logout
              </button>
            )}
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              {isAuthenticated && (
                <li>
                  <NavLink
                    to="/sell"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    style={({ isActive }) => (isActive ? { color: '#E11D48' } : {})}
                  >
                    Sell Your Car
                  </NavLink>
                </li>
              )}

              <li>
                <NavLink
                  to="/allcars"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  style={({ isActive }) => (isActive ? { color: '#E11D48' } : {})}
                >
                  Top Deals
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/partners"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  style={({ isActive }) => (isActive ? { color: '#E11D48' } : {})}
                >
                  Our Partners
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  style={({ isActive }) => (isActive ? { color: '#E11D48' } : {})}
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  style={({ isActive }) => (isActive ? { color: '#E11D48' } : {})}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}