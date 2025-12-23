import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-700 text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        E-Tix
      </Link>

      <div className="flex gap-4">
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <Link
          to="/register"
          className="bg-white text-blue-700 px-4 py-1 rounded-full font-semibold"
        >
          Daftar
        </Link>
      </div>
    </nav>
  );
}
