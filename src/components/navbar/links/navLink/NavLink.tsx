// navigate users to the specified routes within the application without a full page reload
import Link from "next/link";

type LinksProps = {
  linkItem: {
    title: string;
    path: string;
  };
};

const NavLink = ({ linkItem }: LinksProps) => {
  // navigate user to the specified routes
  return <Link href={linkItem.path}>{linkItem.title}</Link>;
};

export default NavLink;
