// src/components/Navbar.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-black">✦ Positivus</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer">About us</li>
          <li className="hover:text-black cursor-pointer">Services</li>
          <li className="hover:text-black cursor-pointer">Use Cases</li>
          <li className="hover:text-black cursor-pointer">Pricing</li>
          <li className="hover:text-black cursor-pointer">Blog</li>
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="px-4 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition">
            Request a quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-start space-y-4 px-6 py-4 font-medium text-gray-700">
            <li className="hover:text-black cursor-pointer">About us</li>
            <li className="hover:text-black cursor-pointer">Services</li>
            <li className="hover:text-black cursor-pointer">Use Cases</li>
            <li className="hover:text-black cursor-pointer">Pricing</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
            <li>
              <button className="w-full px-4 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition">
                Request a quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
