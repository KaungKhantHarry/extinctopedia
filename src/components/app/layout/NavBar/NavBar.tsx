"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggleButton } from "../../../common/ThemeToggleButton";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LogoutButton from "@/components/common/LogoutButton";
import LoginButton from "@/components/common/LoginButton";
import { HiMenu, HiX } from "react-icons/hi";

const navBarItems = [
  { name: "Home", link: "/" },
  { name: "Species", link: "/species" },
  { name: "Endangered", link: "/endangered" },
  { name: "Favorites", link: "/favorites" },
];

const NavBar = () => {
  const pathname = usePathname();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-100 dark:bg-gray-800 z-50 shadow-md">
      
      <div className="h-[70px] px-5 flex items-center justify-between">
        <Link href="/" className="font-medium text-3xl text-black dark:text-white">
          Extinctopedia
        </Link>

        <div className="flex items-center gap-4">
            <div className="hidden md:block">
                <ThemeToggleButton />
            </div>
            {user ? <LogoutButton /> : <LoginButton />}

            <button 
                className="md:hidden text-3xl text-black dark:text-white"
                onClick={() => setOpen(!open)}
            >
                {open ? <HiX /> : <HiMenu />}
            </button>
        </div>
      </div>

      <div className="hidden md:flex h-auto px-7 gap-10 items-center border-t border-gray-300 dark:border-gray-700">
            {navBarItems.map((item) => (
                <Link
                    href={item.link}
                    key={item.name}
                    className={`font-medium text-lg hover:text-gray-700 dark:hover:text-gray-300 ${
                    pathname === item.link
                        ? "border-b-2 border-gray-600 dark:border-gray-300 pb-1"
                        : ""
                    }`}
                >
                    {item.name}
                </Link>
            ))}
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-5 px-7 py-5 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700">
          {navBarItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className={`font-medium text-xl ${
                pathname === item.link
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
};

export default NavBar;
