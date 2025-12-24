import React, { useState } from "react";
import {
  Bell,
  User,
  Search,
  Plus,
  ChevronDown,
  LogOut,
  Settings,
  Key,
  X,
} from "lucide-react";
import Logo from "../../assets/Logo.png";


const AdminHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Data notifikasi dummy
  const notifications = [
    {
      id: 1,
      type: "warning",
      title: "Event Hampir Sold Out",
      message: "Konser Rock Legends - 95% tiket terjual",
      time: "5 menit lalu",
      unread: true,
    },
    {
      id: 2,
      type: "error",
      title: "Pembayaran Gagal",
      message: "3 transaksi gagal dalam 1 jam terakhir",
      time: "15 menit lalu",
      unread: true,
    },
    {
      id: 3,
      type: "info",
      title: "Event Baru Terdaftar",
      message: "Jazz Festival 2025 menunggu approval",
      time: "1 jam lalu",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-full px-6">
        <div className="flex items-center justify-between h-16">
          {/* BAGIAN KIRI: Logo + Nama + Judul Halaman */}
          <div className="flex items-center gap-6">
            {/* Logo + Nama Aplikasi */}
            <div className="flex items-center gap-3 border-r border-gray-200 pr-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400 bg-white">
                <img
                  src={Logo}
                  alt="E-tix Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800">E-tix</h1>
                <p className="text-xs text-blue-600 font-semibold">
                  Admin Panel
                </p>
              </div>
            </div>

            {/* Judul Halaman Aktif */}
            <div>
              <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
              <p className="text-xs text-gray-500">Overview & Statistik</p>
            </div>
          </div>

          {/* BAGIAN TENGAH: Search Bar (Opsional) */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari event, user, transaksi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* BAGIAN KANAN: Quick Action + Notifikasi + Profil */}
          <div className="flex items-center gap-4">
            {/* Quick Action: Tambah Event */}
            <button className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition font-medium">
              <Plus className="w-5 h-5" />
              <span>Tambah Event</span>
            </button>

            {/* Notifikasi */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <Bell className="w-6 h-6 text-gray-600" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Dropdown Notifikasi */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 py-3 flex items-center justify-between">
                    <h3 className="font-bold text-white">Notifikasi</h3>
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-white hover:text-gray-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                          notif.unread ? "bg-blue-50" : ""
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              notif.type === "warning"
                                ? "bg-yellow-500"
                                : notif.type === "error"
                                ? "bg-red-500"
                                : "bg-blue-500"
                            }`}
                          ></div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 text-sm">
                              {notif.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {notif.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {notif.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-gray-50 text-center">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Lihat Semua Notifikasi
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gray-300"></div>

            {/* Profil Admin */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-800">
                    Admin Budi
                  </p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>

              {/* Dropdown Menu Profil */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="p-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Admin Budi</p>
                        <p className="text-xs text-blue-200">budi@etix.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700">
                      <User className="w-4 h-4" />
                      <span className="text-sm">Profil Saya</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700">
                      <Settings className="w-4 h-4" />
                      <span className="text-sm">Pengaturan</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700">
                      <Key className="w-4 h-4" />
                      <span className="text-sm">Ganti Password</span>
                    </button>
                  </div>

                  <div className="border-t border-gray-200 py-2">
                    <button className="w-full px-4 py-2 text-left hover:bg-red-50 flex items-center gap-3 text-red-600">
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
