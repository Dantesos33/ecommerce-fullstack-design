import Image from "next/image";
import Searchbar from "@/components/Searchbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-18 py-4 bg-blue-500">
      <div className="flex items-center gap-2 cursor-pointer">
        <Image
          src="/assets/logo.jpg"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-lg"
        />
        <div>Dees Mart</div>
      </div>
      <Searchbar />
      <Navbar />
    </header>
  );
};

export default Header;
