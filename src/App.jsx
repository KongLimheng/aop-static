import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import CustomerType from './pages/CustomerType'
import EService from './pages/EService'
import Home from './pages/Home'
import New from './pages/New'

function App() {
  return (
    <Router>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/e-services" element={<EService />} />
          <Route path="/customer-type" element={<CustomerType />} />
          <Route path="/new" element={<New />} />
        </Route>

        <Route path="*" element={<div>Error</div>} />
      </Routes>
      {/* </Layout> */}
    </Router>
  )
}

export default App
