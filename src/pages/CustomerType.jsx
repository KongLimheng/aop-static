import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { BackArrow, CrossIcon, Profile } from '../assets'
import { store } from '../contexts/store'

const CustomerType = () => {
  const setMaxWidth = store((state) => state.setMaxWidth)
  const setIsMini = store((state) => state.setIsMini)

  useEffect(() => {
    setMaxWidth('640px')
    setIsMini(true)
  })

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <NavLink className="text-decoration-none" to="/e-services">
            <img src={BackArrow} alt="" width={40} />
          </NavLink>
        </div>
        <div>
          <NavLink to="/">
            <img src={CrossIcon} alt="" width={28} />
          </NavLink>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center w-100">
        <div className="pb-4 custom-text h2 ">Customer Type</div>
        <img src={Profile} alt="" width={280} />

        <div className="wrap-button d-flex flex-row w-100 align-items-center justify-content-evenly mt-5">
          <NavLink to="/existing" className="cnb-btn rounded-3 ">
            Existing
          </NavLink>
          <NavLink to="/new" className="cnb-btn rounded-3">
            New
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default CustomerType
