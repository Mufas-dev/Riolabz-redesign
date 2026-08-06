import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mt-8 h-20 bg-white rounded-2xl shadow-xl border border-slate-200 flex items-center justify-between px-8">

          <h1 className="text-3xl font-bold text-slate-900">
            Rio<span className="text-blue-600">labz</span>
          </h1>

          <nav className="hidden lg:flex gap-10 text-slate-700 font-medium">

            <a href="#">Home</a>

            <a href="#">Services</a>

            <a href="#">Solutions</a>

            <a href="#">Portfolio</a>

            <a href="#">About</a>

            <a href="#">Contact</a>

          </nav>

          <button className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">

            Get Started

          </button>

          <button className="lg:hidden">

            <Menu />

          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;