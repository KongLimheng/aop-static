import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-html5-camera-photo/build/css/index.css'
import './App.css'
import CustomModal from './components/CustomModal'
import { setOpenModal, store } from './contexts/store'
import { useAuthentication } from './contexts/useHooks'
import { Routes } from './routes'

function App() {
  const formData = store((state) => state.formData)
  const { modalBody, modalTitle } = store((state) => state.modalData)
  const openModal = store((state) => state.openModal)
  const isAuthenticated = useAuthentication()
  return (
    <>
      <Routes isAuthenticated={isAuthenticated} />

      <CustomModal
        title={modalTitle}
        show={openModal}
        onHide={() => setOpenModal(false)}
      >
        {modalBody}
      </CustomModal>
    </>
  )
}

export default App
