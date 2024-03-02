import React from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import { FolderIcon, LogoutIcon, ThreedotIcon } from '../assets'

const Home = () => {
  const [cookie, _, removeCookies] = useCookies(['user'])
  const handleLogout = () => {
    removeCookies('user')
  }
  return (
    <>
      <div className="d-flex align-items-start justify-content-between">
        <div>
          <div className="greeting-text">
            <span className="custom-text">Hi {cookie.user.username}</span>
            👋
          </div>
          <div className="welcome-text">Welcome back to your workspace</div>
        </div>

        <div className="d-flex">
          {/* <div className="me-2 svg-icon d-flex justify-content-between align-items-center">
            <img src="../images/bell.svg" alt="bell" className="bell-icon" />
          </div> */}
          <div
            className="svg-icon d-flex justify-content-between align-items-center"
            onClick={handleLogout}
          >
            <img src={LogoutIcon} alt="logout" className="w-100" />
          </div>
        </div>
      </div>
      {/* <!-- portal menu --> */}
      <div className="d-flex align-items-center justify-content-between mt-5 mb-2">
        <div className="custom-text menu-title">Portal's Menu</div>
        <div className="text-white see-more">see more</div>
      </div>

      {/* <!-- Portal Items --> */}
      <div className="container-fluid px-0">
        <div className="row g-2 g-md-3 mx-0">
          <div className="col-12 col-md-6">
            <Link className="text-black text-decoration-none" to="/e-services">
              <div className="portal-box">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={FolderIcon} alt="" width={'31'} />
                  <img src={ThreedotIcon} alt="" width={'4'} />
                </div>
                <div className="portal-title">E-Services</div>
                <div className="portal-subtitle">3 items</div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <Link className="text-black text-decoration-none" to="#">
              <div className="portal-box">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={FolderIcon} alt="" width={'31'} />
                  <img src={ThreedotIcon} alt="" width={'4'} />
                </div>
                <div className="portal-title">Central Hub</div>
                <div className="portal-subtitle">3 items</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Feature Title --> */}
      <div className="menu-title custom-text pt-5 pb-3">Product Features</div>
      <div className="container-fluid px-0">
        <div className="row g-3 mx-0">
          <div className="col-12 col-md-8 col-xl-8">
            <img
              style={{
                borderRadius: 25,
              }}
              className=" w-100 h-100 "
              src="/images/saving-showcase.png"
              alt=""
            />
          </div>
          <div className="col-6 col-md-4 col-xl-4">
            <img
              className="w-100 h-100"
              style={{
                borderRadius: 25,
              }}
              src="/images/sm-showcase.png"
              alt=""
            />
          </div>

          <div className="col-6 col-md-4 col-xl-4">
            <img className="n w-100 h-100" src="/images/Group94.png" alt="" />
          </div>

          <div className="col-12 col-md-8 col-xl-8 image-box">
            <img
              className="w-100 h-100"
              src="/images/core-showcase.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
