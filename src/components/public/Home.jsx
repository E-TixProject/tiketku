import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">Selamat Datang di E-Tix</h1>
          <p className="text-gray-600">
            Beli tiket konser favoritmu dengan mudah 🎶
          </p>
        </div>
      </div>
    </>
  );
}
