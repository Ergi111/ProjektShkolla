import { Link, useLocation } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Book Now", path: "/book-now" },
];

export const Header = () => {
  const location = useLocation();
  return (
    <header className="w-full h-20 bg-white flex items-center justify-center shadow-md">
      <div className="p-4 flex items-center justify-between max-w-screen-lg w-full mx-auto">
        <h1 className="text-black text-2xl font-bold">Hotel</h1>

        <nav className="max-md:hidden">
          <ul className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-gray-400 hover:text-red-500 transition-opacity duration-200 ${
                    location.pathname === link.path
                      ? "text-red-500 opacity-100"
                      : "opacity-50"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <ResponsiveHeader />
        </div>
      </div>
    </header>
  );
};

const ResponsiveHeader = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2">
          <AlignJustify className="text-primary w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 rounded-none p-0">
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.name}>
              <Link
                to={link.path}
                className="block px-6 py-4 text-gray-700 hover:text-red-500 transition-colors"
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
