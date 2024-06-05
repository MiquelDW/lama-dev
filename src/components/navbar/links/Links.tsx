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
  return (
    <nav className="flex items-center gap-[10px]">
      {/* create a seperate <NavLink> component instance for each Nav Link */}
      {links.map((link) => (
        <NavLink key={link.title} linkItem={link} />
      ))}
    </nav>
  );
};

export default Links;
