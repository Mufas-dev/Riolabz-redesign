import { Menu, ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-24 flex items-center justify-between">

          {/* Logo */}

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Rio
            <span className="text-blue-600">
              labz
            </span>
          </h1>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {[
              "Home",
              "Services",
              "Solutions",
              "Portfolio",
              "About",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="group relative text-[15px] font-semibold text-slate-700 transition duration-300 hover:text-blue-600"
              >
                {item}

                <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

              </a>
            ))}

          </nav>

          {/* CTA */}

          <button className="hidden lg:flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-sky-500 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            Get Started

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </button>

          {/* Mobile */}

          <button className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden">

            <Menu size={26} />

          </button>

        </div>

      </div>

    </header>
  );
};

export default Navbar;