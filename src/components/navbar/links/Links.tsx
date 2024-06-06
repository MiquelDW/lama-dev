// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rerendering and event handling, providing a responsive and interactive user experience
"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";
import Image from "next/image";

// links data
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // Temporary data
  const session = true;
  const isAdmin = true;

  return (
    // Links container
    <div className="relative">
      {/* navigation section */}
      <nav className="flex items-center gap-[10px] mmd:hidden">
        {/* create a seperate <NavLink> component instance for each Nav Link */}
        {links.map((link) => (
          <NavLink key={link.title} linkItem={link} />
        ))}

        {/* conditionally render elements based on if user is logged in */}
        {session ? (
          <>
            {/* render admin <nav> button if the logged in user is an admin */}
            {isAdmin && (
              <NavLink linkItem={{ title: "Admin", path: "/admin" }} />
            )}
            <button className="cursor-pointer rounded-sm bg-white p-[10px] font-bold text-default-bg">
              Logout
            </button>
          </>
        ) : (
          <NavLink linkItem={{ title: "Login", path: "/login" }} />
        )}
      </nav>

      {/* Menu section (small screen) */}
      <Image
        src="/menu.png"
        alt="Menubutton"
        width={30}
        height={30}
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        className="hidden cursor-pointer mmd:block"
      />
      {open && (
        <div className="absolute right-[-38px] top-[100px] z-[999] hidden h-[calc(100vh-200px)] w-[300px] flex-col items-center justify-center gap-[10px] bg-default-bg mmd:flex">
          {links.map((link) => (
            <NavLink linkItem={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
