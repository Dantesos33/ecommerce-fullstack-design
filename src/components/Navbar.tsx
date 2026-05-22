import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-4">
      <NavItem href="/profile" icon={<FaUser size={18} />} label="Profile" />
      <NavItem href="/message" icon={<FaMessage size={18} />} label="Message" />
      <NavItem href="/orders" icon={<FaHeart size={18} />} label="Orders" />
      <NavItem
        href="/cart"
        icon={<FaCartShopping size={18} />}
        label="My Cart"
      />
    </nav>
  );
};

export default Navbar;
