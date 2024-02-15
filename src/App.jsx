import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import CustomModal from './components/CustomModal'
import Layout from './components/Layout'
import { setOpenModal, store } from './contexts/store'
import CustomerType from './pages/CustomerType'
import EService from './pages/EService'
import Home from './pages/Home'
import New from './pages/New'

function App() {
  const openModal = store((state) => state.openModal)
  const modalData = store((state) => state.modalData)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/e-services" element={<EService />} />
          <Route path="/customer-type" element={<CustomerType />} />
          <Route path="/new" element={<New />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Layout>

      <CustomModal
        title={modalData.modalTitle}
        show={openModal}
        onHide={() => setOpenModal(false)}
      >
        {modalData.modalBody}
      </CustomModal>
    </Router>
  )
}

export default App
