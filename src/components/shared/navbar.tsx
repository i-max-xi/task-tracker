/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  cn,
} from "@nextui-org/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      position="static"
      {...{
        ariaLabel: "Foundry Navbar",
        shouldHideOnScroll: false,
        isInverted: true,
      }}
      maxWidth="2xl"
      className="bg-white w-full"
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="lg:hidden pr-3" justify="center">
        <NavbarBrand as={Link} to="/" className="flex gap-x-3">
          <img src="/icons/logo.png" className="w-[1.3rem]" alt="logo" />
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent
        className="hidden lg:flex gap-4 justify-between w-full "
        justify="center"
      >
        <NavbarBrand
          as={Link}
          to="/"
          className="flex gap-x-3  translate-x-[8rem]"
        >
          <img src="/icons/logo.png" className="w-[2.3rem]" alt="logo" />
        </NavbarBrand>

        <div className="flex w-[95%] gap-x-10 justify-center items-center">
          {menuItems.map((item, index) =>
            item.subItems ? (
              <Dropdown key={index}>
                <DropdownTrigger>
                  <NavbarItem
                    className={cn(
                      "flex gap-1 items-center cursor-pointer text-sm text-[#0E121B] hover:text-[#0E121B]",
                      pathname.includes(item.title.toLowerCase()) &&
                        "text-[#0E121B] font-medium"
                    )}
                  >
                    {item.title} <Icon icon="majesticons:chevron-down" />
                  </NavbarItem>
                </DropdownTrigger>
                <DropdownMenu>
                  {item.subItems.map((subItem: any, subIndex) => (
                    <DropdownItem key={subIndex} as={Link}>
                      <Link to={subItem.link as string}>{subItem.title}</Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem key={index}>
                <Link
                  to={item?.link as string}
                  className={cn(
                    "w-full text-sm text-[#0E121B]",
                    pathname.includes(item?.link as string) &&
                      "text-[#0E121B] font-medium"
                  )}
                >
                  {item.title}
                </Link>
              </NavbarItem>
            )
          )}
        </div>
      </NavbarContent>

      <NavbarContent justify="end"></NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white p-5">
        {menuItems.map((item, index) =>
          item.subItems ? (
            <CustomDropdown key={index} item={item} />
          ) : (
            <NavbarMenuItem key={index}>
              <Link
                to={item.link as string}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "w-full text-sm text-[#0E121B]",
                  pathname.includes(item?.link as string) &&
                    "text-[#0E121B] font-medium"
                )}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          )
        )}
        <div className="flex gap-x-4"></div>
      </NavbarMenu>
    </Navbar>
  );
}

const menuItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Personal",
    subItems: [],
  },
  {
    title: "Business",
    subItems: [],
  },
  {
    link: "/help-center",
    title: "Help Center",
  },
  {
    link: "",
    // link: "/about-us",
    title: "About Us",
  },
];

const CustomDropdown = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Dropdown Trigger */}
      <div
        className="flex justify-between items-center cursor-pointer text-sm text-[#0E121B] hover:text-[#0E121B]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.title}
        <Icon
          icon="majesticons:chevron-down"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-1 w-full max-w-xs bg-white shadow-lg rounded-md border border-gray-200 z-50"
          >
            {item.subItems.map((subItem: any, subIndex: number) => (
              <Link
                key={subIndex}
                to={subItem.link as string}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {subItem.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
