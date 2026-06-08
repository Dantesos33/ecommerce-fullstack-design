import { FaStore } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import NavItem from "./NavItem";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <nav className="flex flex-row-reverse md:flex-row items-center gap-3 md:gap-4 whitespace-nowrap shrink-0">
      {/* Auth-aware profile dropdown */}
      <ProfileDropdown />

      <NavItem
        className="hidden md:flex"
        href="/products"
        icon={<FaStore size={18} />}
        label="Products"
      />
      <NavItem
        className="hidden md:flex"
        href="/orders"
        icon={<FaHeart size={18} />}
        label="Orders"
      />
      <NavItem
        href="/cart"
        icon={<FaCartShopping size={18} />}
        label="My Cart"
      />
    </nav>
  );
};

export default Navbar;
