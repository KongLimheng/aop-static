import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-html5-camera-photo/build/css/index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import CustomerType from './pages/CustomerType'
import EService from './pages/EService'
import Home from './pages/Home'
import New from './pages/New'
import QuickTransfer from './pages/QuickTransfer'
import SuccessCreate from './pages/SuccessCreate'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/e-services" element={<EService />} />
          <Route path="/customer-type" element={<CustomerType />} />
          <Route path="/new" element={<New />} />

          <Route path="/success" element={<PrivateRoute />}>
            <Route path="/success" element={<SuccessCreate />} />
          </Route>

          <Route path="/quick-transfer" element={<QuickTransfer />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
