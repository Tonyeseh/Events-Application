import { NavbarCollapse, NavbarLink } from "flowbite-react";

export default function NavLink() {
  const links: link[] = [
    { name: "Home", url: "/" },
    { name: "Events", url: "/events" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <NavbarCollapse>
      {links.map((link) => (
        <NavbarLink
          href={link.url}
          key={link.name}
          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        >
          {link.name}
        </NavbarLink>
      ))}
    </NavbarCollapse>
  );
}
