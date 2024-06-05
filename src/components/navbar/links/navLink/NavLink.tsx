// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rendering and event handling, providing a responsive and interactive user experience
"use client";

// navigate users to the specified routes within the application without a full page reload
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  linkItem: {
    title: string;
    path: string;
  };
};

const NavLink = ({ linkItem }: NavLinkProps) => {
  // get the current pathname with 'usePathname' hook
  const pathName = usePathname();
  console.log(pathName);

  // navigate user to the specified routes
  return (
    <Link
      href={linkItem.path}
      className={`min-w-[100px] rounded-[20px] p-[10px] text-center font-medium ${pathName === linkItem.path && "bg-default-text text-default-bg"}`}
    >
      {linkItem.title}
    </Link>
  );
};

export default NavLink;
