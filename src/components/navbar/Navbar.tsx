import Links from "./links/Links";

const Navbar = () => {
  return (
    // header container
    <header className="flex h-[100px] items-center justify-between">
      <div className="text-[30px] font-bold">Logo</div>
      <Links />
    </header>
  );
};

export default Navbar;
