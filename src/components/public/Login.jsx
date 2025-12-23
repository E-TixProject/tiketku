import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Login Google berhasil");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#3B0764] px-4">


      {/* LOGO */}
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-3 shadow-lg">
  <img
    src={logo}
    alt="Logo E-tix"
    className="w-12 h-12 object-contain"
  />
    </div>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-1">Welcome Back!</h2>
        <p className="text-center text-gray-500 text-sm mb-5">
          Login untuk melanjutkan petualangan konser Anda
        </p>

        {/* GOOGLE */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border rounded-xl py-3 hover:bg-gray-50 transition font-medium"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5"
          />
          Continue with Google
        </button>

        {/* OR */}
        <div className="flex items-center my-5 text-gray-400 text-sm">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3">atau</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="text-sm font-medium">Email</label>
          <div className="flex items-center border rounded-xl px-3 mt-1">
            <span className="text-gray-400 mr-2">📧</span>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full py-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="mb-3">
          <label className="text-sm font-medium">Password</label>
          <div className="flex items-center border rounded-xl px-3 mt-1">
            <span className="text-gray-400 mr-2">🔒</span>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full py-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* OPTIONS */}
        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#" className="text-indigo-600 hover:underline">
            Lupa Password?
          </a>
        </div>

        {/* LOGIN BUTTON */}
        <button className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition">
          Login
        </button>

        {/* REGISTER */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Belum punya akun?{" "}
          <Link to="/register" className="text-indigo-600 font-medium">
            Daftar Sekarang
          </Link>
        </p>
      </div>

      {/* FOOTER ICONS */}
      <div className="flex gap-10 text-white mt-8 text-center">
        <div>
          🎵
          <p className="text-xs mt-1">100+ Konser</p>
        </div>
        <div>
          🎫
          <p className="text-xs mt-1">E-Ticket</p>
        </div>
        <div>
          ⭐
          <p className="text-xs mt-1">Terpercaya</p>
        </div>
      </div>
    </div>
  );
}
