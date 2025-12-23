import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerEmail = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Daftar berhasil 🎉");
    } catch (err) {
      alert(err.message);
    }
  };

  const registerGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Daftar Google berhasil 🎉");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-700">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Daftar</h2>

        <form onSubmit={registerEmail} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
            Daftar
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">atau</div>

        <button
          onClick={registerGoogle}
          className="w-full border py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-100"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5"
          />
          Daftar dengan Google
        </button>

        <p className="text-center text-sm mt-4">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
