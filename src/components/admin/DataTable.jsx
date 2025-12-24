import React, { useState } from "react";
import { 
  Edit2, 
  Trash2, 
  Eye, 
  Search,
  Filter,
  MoreVertical,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";

// ==========================================
// A. USER MANAGEMENT TABLE
// ==========================================
const UserManagementTable = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Andi Pratama",
      email: "andi.pratama@gmail.com",
      role: "User",
      status: "Aktif",
      registeredDate: "12 Jan 2025"
    },
    {
      id: 2,
      name: "Budi Santoso",
      email: "budi.santoso@gmail.com",
      role: "Admin",
      status: "Aktif",
      registeredDate: "10 Jan 2025"
    },
    {
      id: 3,
      name: "Citra Dewi",
      email: "citra.dewi@gmail.com",
      role: "EO",
      status: "Aktif",
      registeredDate: "08 Jan 2025"
    },
    {
      id: 4,
      name: "Doni Hermawan",
      email: "doni.h@gmail.com",
      role: "User",
      status: "Nonaktif",
      registeredDate: "05 Jan 2025"
    },
    {
      id: 5,
      name: "Eka Putri",
      email: "eka.putri@gmail.com",
      role: "User",
      status: "Aktif",
      registeredDate: "03 Jan 2025"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus user ini?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Manajemen User</h2>
        <p className="text-sm text-blue-200">Kelola semua pengguna sistem</p>
      </div>

      {/* Search & Filter */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama atau email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Nama</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Role</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Tanggal Daftar</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-800">{user.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    user.role === 'Admin' ? 'bg-purple-100 text-purple-700' :
                    user.role === 'EO' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`flex items-center gap-1 w-fit px-3 py-1 rounded-full text-xs font-semibold ${
                    user.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {user.status === 'Aktif' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.registeredDate}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <p className="text-sm text-gray-600">Menampilkan {filteredUsers.length} dari {users.length} data</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">Previous</button>
          <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 text-sm">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">2</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">Next</button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// B. EVENT MANAGEMENT TABLE
// ==========================================
const EventManagementTable = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      eventName: "Konser Rock Legends",
      organizer: "Musica Production",
      date: "15 Jan 2025",
      ticketPrice: "Rp 250.000",
      status: "Aktif"
    },
    {
      id: 2,
      eventName: "Festival Jazz Indonesia",
      organizer: "Jazz Community",
      date: "22 Jan 2025",
      ticketPrice: "Rp 350.000",
      status: "Aktif"
    },
    {
      id: 3,
      eventName: "Pop Paradise Concert",
      organizer: "Live Nation ID",
      date: "05 Feb 2025",
      ticketPrice: "Rp 300.000",
      status: "Sold Out"
    },
    {
      id: 4,
      eventName: "Indie Music Fest",
      organizer: "Indie Collective",
      date: "12 Feb 2025",
      ticketPrice: "Rp 200.000",
      status: "Draft"
    },
    {
      id: 5,
      eventName: "K-Pop Night Live",
      organizer: "Hallyu Entertainment",
      date: "18 Feb 2025",
      ticketPrice: "Rp 450.000",
      status: "Aktif"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus event ini?")) {
      setEvents(events.filter(event => event.id !== id));
    }
  };

  const filteredEvents = events.filter(event => 
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.organizer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Manajemen Event</h2>
        <p className="text-sm text-purple-200">Kelola katalog event konser</p>
      </div>

      {/* Search & Filter */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama event atau penyelenggara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID Event</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Nama Event</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Penyelenggara</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Tanggal</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Harga Tiket</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredEvents.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-800">{event.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{event.eventName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{event.organizer}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{event.date}</td>
                <td className="px-6 py-4 text-sm font-semibold text-purple-600">{event.ticketPrice}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.status === 'Aktif' ? 'bg-green-100 text-green-700' :
                    event.status === 'Draft' ? 'bg-gray-100 text-gray-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(event.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <p className="text-sm text-gray-600">Menampilkan {filteredEvents.length} dari {events.length} data</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">Previous</button>
          <button className="px-4 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-800 text-sm">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">2</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">Next</button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// C. TRANSACTION TABLE
// ==========================================
const TransactionTable = () => {
  const [transactions] = useState([
    {
      id: "TRX001",
      user: "Andi Pratama",
      event: "Konser Rock Legends",
      totalPayment: "Rp 500.000",
      paymentMethod: "Bank Transfer",
      status: "Berhasil",
      transactionTime: "12 Jan 2025, 14:30"
    },
    {
      id: "TRX002",
      user: "Citra Dewi",
      event: "Festival Jazz Indonesia",
      totalPayment: "Rp 700.000",
      paymentMethod: "E-Wallet",
      status: "Berhasil",
      transactionTime: "11 Jan 2025, 10:15"
    },
    {
      id: "TRX003",
      user: "Eka Putri",
      event: "Pop Paradise Concert",
      totalPayment: "Rp 600.000",
      paymentMethod: "Credit Card",
      status: "Pending",
      transactionTime: "10 Jan 2025, 18:45"
    },
    {
      id: "TRX004",
      user: "Doni Hermawan",
      event: "Indie Music Fest",
      totalPayment: "Rp 400.000",
      paymentMethod: "Bank Transfer",
      status: "Gagal",
      transactionTime: "09 Jan 2025, 20:00"
    },
    {
      id: "TRX005",
      user: "Budi Santoso",
      event: "K-Pop Night Live",
      totalPayment: "Rp 900.000",
      paymentMethod: "E-Wallet",
      status: "Berhasil",
      transactionTime: "08 Jan 2025, 16:20"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = transactions.filter(trx => 
    trx.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trx.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trx.event.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Data Transaksi</h2>
        <p className="text-sm text-green-200">Monitor semua transaksi pembelian tiket</p>
      </div>

      {/* Search & Filter */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari ID transaksi, user, atau event..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID Transaksi</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">User</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Event</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Total Bayar</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Metode Pembayaran</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Waktu Transaksi</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTransactions.map((trx) => (
              <tr key={trx.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm font-mono text-gray-800">{trx.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{trx.user}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{trx.event}</td>
                <td className="px-6 py-4 text-sm font-semibold text-green-600">{trx.totalPayment}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{trx.paymentMethod}</td>
                <td className="px-6 py-4">
                  <span className={`flex items-center gap-1 w-fit px-3 py-1 rounded-full text-xs font-semibold ${
                    trx.status === 'Berhasil' ? 'bg-green-100 text-green-700' :
                    trx.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {trx.status === 'Berhasil' && <CheckCircle className="w-3 h-3" />}
                    {trx.status === 'Pending' && <Clock className="w-3 h-3" />}
                    {trx.status === 'Gagal' && <XCircle className="w-3 h-3" />}
                    {trx.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{trx.transactionTime}</td>
                <td className="px-6 py-4">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <p className="text-sm text-gray-600">Menampilkan {filteredTransactions.length} dari {transactions.length} data</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">Previous</button>
          <button className="px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800 text-sm">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">2</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">Next</button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT - Showcase All Tables
// ==========================================
const DataTablesAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Panel - Data Tables</h1>
          <p className="text-gray-600">Kelola User, Event, dan Transaksi</p>
        </div>
        
        <UserManagementTable />
        <EventManagementTable />
        <TransactionTable />
      </div>
    </div>
  );
};

export default DataTablesAdmin;