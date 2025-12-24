import './App.css'
import Home from './pages/Home'
import AdminHeader from './components/admin/AdminHeader'
import DataTablesAdmin from './components/admin/DataTable'

function App() {
  return (
    <>
      {/* ====== USER PAGE ====== */}
      {/* <Home /> */}

      {/* ====== ADMIN PAGE ====== */}
      <AdminHeader />
      <DataTablesAdmin />
    </>
  )
}

export default App
