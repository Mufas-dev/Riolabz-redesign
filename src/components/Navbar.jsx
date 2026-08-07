import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <a href="#home">
            <img
              src="/logo.png"
              alt="Riolabz"
              className="h-11 w-auto"
            />
          </a>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-[15px] font-semibold text-slate-700 transition hover:text-blue-600"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

              </a>
            ))}

          </nav>

          {/* CTA */}

          <a
            href="#contact"
            className="group hidden lg:flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Get Started

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (

          <div className="border-t border-slate-200 py-6 lg:hidden">

            <div className="flex flex-col gap-5">

              {links.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-semibold text-slate-700 hover:text-blue-600"
                >
                  {link.name}
                </a>

              ))}

              <a
                href="#contact"
                className="mt-3 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
              >
                Get Started
              </a>

            </div>

          </div>

        )}

      </div>
    </header>
  );
};

export default Navbar;