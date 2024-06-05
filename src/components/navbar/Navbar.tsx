import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    // header container
    <header className="flex h-[100px] items-center justify-between gap-2">
      <Link href="/" className="text-[30px] font-bold">
        Logo
      </Link>
      <Links />
    </header>
  );
};

export default Navbar;
