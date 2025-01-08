import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { title: "Courses", link: "/courses" },
  { title: "Campus", link: "/campus" },
  { title: "Contact", link: "/contact" }, 
  { title: "About", link: "/about" },
];

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-20 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-white px-2 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-10">
          
          <button
            onClick={handleShowNav}
            aria-label="Toggle Menu"
            className="md:hidden"
          >
            {showNav ? (
              <XIcon color="#202020" strokeWidth={3} size={25} />
            ) : (
              <MenuIcon color="#202020" strokeWidth={3} size={25} />
            )}
          </button>
          <img
            src="https://rvce.edu.in/sites/default/files/logo_new.png"
            className="h-8"
            alt="Logo"
          />
          <Link 
            to="/" className="self-center whitespace-nowrap text-xl font-semibold text-stone-900 md:text-2xl" >
          <span className="">
            RVCE
          </span>
          </Link>
          {/* Nav Links */}
          <div
            className={`absolute left-0 right-0 -z-10 flex w-full flex-col gap-3 bg-white p-3 shadow transition-all duration-300 ease-in-out md:relative md:left-0 md:right-auto md:top-auto md:z-auto md:flex-row md:shadow-none ${
              showNav ? "top-[54px]" : "top-[-165px]"
            }`}
          >
            {navLinks.map(({ title, link }, index) => (
              <Link
                key={index}
                to={link}
                className="rounded-md px-3 py-2 text-slate-500 transition-colors duration-100 ease-linear hover:bg-gray-100 hover:text-black"
                onClick={() => setShowNav(false)} // Close the menu on link click
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg border bg-zinc-200 px-3.5 py-1.5 text-base font-semibold text-zinc-600 transition duration-300 ease-in-out hover:bg-black hover:text-white active:scale-95 sm:px-5 sm:py-2"
          >
            <span>HOME</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
