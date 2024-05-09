import Logo from "./logo";
import NavLink from "./nav-links";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

export default function Header() {
  return (
    <Navbar>
      <Logo />
      <div className="flex items-center md:order-2">
        <a
          href="#"
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          Log in
        </a>
        <a
          href="#"
          className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
        >
          Get started
        </a>
        <NavbarToggle />
      </div>
      <NavLink />
    </Navbar>
  );
}
