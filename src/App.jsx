import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-html5-camera-photo/build/css/index.css'
import './App.css'
import { store } from './contexts/store'
import { Routes } from './routes'

function App() {
  const formData = store((state) => state.formData)

  return (
    // <Router>
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/e-services" element={<EService />} />
    //       <Route path="/customer-type" element={<CustomerType />} />
    //       <Route path="/new" element={<New />} />

    //       <Route path="/success" element={<PrivateRoute />}>
    //         <Route path="/success" element={<SuccessCreate />} />
    //       </Route>

    //       <Route path="/quick-transfer" element={<QuickTransfer />} />
    //       <Route path="*" element={<div>Error</div>} />
    //     </Routes>
    //   </Layout>
    // </Router>

    <Routes hasData={!!Object.keys(formData).length} />
  )
}

export default App
