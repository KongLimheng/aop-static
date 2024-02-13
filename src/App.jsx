import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import CustomerType from './pages/CustomerType'
import EService from './pages/EService'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/e-services" element={<EService />} />
          <Route path="/customer-type" element={<CustomerType />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
