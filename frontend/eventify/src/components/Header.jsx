import useAuth from "../hooks/useAuth";
import logo from "../img/logo.png";
import axios from "../api/axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Popover } from "./popover/popover";

const Header = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const [profileRef, setProfileRef] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    setAuth({});
    try {
      await axios("/auth/logout", {
        withCredentials: true,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-between items-center h-12 bg-[#2B293D] text-white px-20 py-4 m-auto">
      <Link to={`/`}>
        <img src={logo} alt="Logo" className="w-40" />
      </Link>
      <ul className="hidden md:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[#ffe047]" : ""
          }
        >
          <li className="py-3 px-6">Home</li>
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[#ffe047]" : ""
          }
        >
          <li className="py-3 px-6">Events</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[#ffe047]" : ""
          }
        >
          <li className="py-3 px-6">About</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[#ffe047]" : ""
          }
        >
          <li className="py-3 px-6">Contact</li>
        </NavLink>
      </ul>
      <ul className="hidden md:flex items-center">
        <NavLink to={"/create-event"}>
          <li className="px-5">Create Event</li>
        </NavLink>
        {!auth.user && (
          <NavLink to={"/login"}>
            <li className="px-5">Login</li>
          </NavLink>
        )}
        {!auth.user && (
          <NavLink to={"/register"}>
            <li className="bg-[#ffe047] rounded-md py-1 px-5 text-[#2b293d]">
              Register
            </li>
          </NavLink>
        )}
        {auth.user && (
          <li className="p-3 text-sm flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
              />
            </svg>
            Tickets
          </li>
        )}
        {auth.user && (
          <Link to={"/interested-events"}>
            <li className="p-3 text-sm flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              Interested
            </li>
          </Link>
        )}
        {auth.user && (
          <li
            className="p-3 text-sm flex items-center cursor-pointer"
            ref={setProfileRef}
            onClick={() => setIsOpen((s) => !s)}
          >
            <div className="text-sm flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Profile
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-2 h-2"
            >
              <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
            </svg>
            <Popover
              reference={profileRef}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            >
              <li>
                <Link
                  to="/"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#ffe047] hover:bg-gray-50"
                >
                  Interests
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#ffe047] hover:bg-gray-50"
                >
                  Account Settings
                </Link>
              </li>
              <li>
                <div
                  role="menuitem"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#ffe047] hover:bg-gray-50 cursor-pointer"
                  onClick={logout}
                >
                  Log Out
                </div>
              </li>
            </Popover>
          </li>
        )}
        {/* {auth.user && (
          <li
            className="p-3 text-sm flex flex-col items-center"
            onClick={logout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
            Logout
          </li>
        )} */}
      </ul>
      <div className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>{" "}
        :{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="top-0 w-[60%] border-r border-r-white h-full p-3 bg-[#2B293D] ease-in-out duration-500 fixed left-[-100%]">
        <img src={logo} alt="Logo" className="w-40" />
        <ul className="p-3">
          <li className="py-3 px-6 border-b border-gray-500">Home</li>
          <li className="py-3 px-6 border-b border-gray-500">Events</li>
          <li className="py-3 px-6 border-b border-gray-500">About</li>
          <li className="py-3 px-6 border-b border-gray-500">Contact</li>

          <li className="py-3 px-6 border-b border-gray-500">Create Event</li>
          <li className="py-3 px-6  flex items-center border-b border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-6 pr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
              />
            </svg>
            Tickets
          </li>
          <li className="py-3 px-6 flex items-center border-b border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-6 pr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            Interested
          </li>
          <li className="py-3 px-6 flex items-center border-b border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-6 pr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Profile
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
