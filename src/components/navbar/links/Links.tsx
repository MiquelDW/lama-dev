// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rerendering and event handling, providing a responsive and interactive user experience
"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";

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
    <div>
      {/* navigation section */}
      <nav className="hidden items-center gap-[10px] md:flex">
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
      <button
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        className="block cursor-pointer text-[30px] font-bold md:hidden"
      >
        Menu
      </button>
      {open && (
        <div className="absolute right-0 top-[100px] flex h-[calc(100vh-100px)] w-1/2 flex-col items-center justify-center gap-10 bg-red-500 md:hidden">
          {links.map((link) => (
            <NavLink linkItem={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
