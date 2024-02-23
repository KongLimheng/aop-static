import { ErrorMessage } from '@hookform/error-message'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { EyeCloseIcon, EyeOpenIcon } from '../assets'

const Login = () => {
  const [showPwd, setShowPwd] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [_, setCookie] = useCookies(['user'])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: { username: 'CNB Portal', password: 'cnb@1234' },
  })
  console.log(errors)

  const submitHandler = ({ username, password }) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setCookie('user', JSON.stringify({ username, password }), {
        maxAge: 3600 * 24,
      })
      // localStorage.setItem(
      //   'token',
      //   JSON.stringify({
      //     username,
      //     password,
      //     exp: currentDate.setMinutes(currentDate.getMinutes() + 5),
      //   })
      // )

      navigate('/')
    }, 3000)
  }
  if (isLoading) {
    return (
      <div className="w-100 vh-100 position-relative bg-white">
        <div className="loader" id="loading">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      </div>
    )
  }

  return (
    // style={{
    //   background: `url("/images/bg-tower.png")`,
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'right',
    //   backgroundSize: 'contain',
    // }}

    <Row className="vh-100 w-100 ms-0">
      <Col xl="6" lg="6" md="12" className="d-none d-lg-block px-0">
        <div className="background d-flex align-items-center">
          <div className="d-flex flex-column vh-100 justify-content-around align-items-center w-100">
            <img
              src="/images/top.png"
              alt=""
              className="w-100 mb-4"
              style={{
                maxWidth: 460,
              }}
              loading="lazy"
            />
            <img
              src="/images/bottom.png"
              alt=""
              className="w-100"
              style={{
                maxWidth: 460,
              }}
              loading="lazy"
            />
            {/* <div className="l-width l-top flex-grow-1"></div>
              <div className="l-width l-bottom flex-grow-1"></div> */}
          </div>
        </div>
      </Col>
      <Col
        xl="6"
        lg="6"
        md="12"
        // style={{
        //   background: '#fff',
        // }}
        className="bg-white px-0"
      >
        <div
          className="d-flex flex-column justify-content-center w-100 h-100 px-4 px-lg-5"
          style={{
            background: `url("/images/bg-tower.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            backgroundSize: 'cover',
          }}
        >
          <div className="login-section">
            <img
              className="logo-img mb-4"
              src="/images/cnb-banner.png"
              alt="banner"
            />
            <div style={{ width: 'fit-content' }} className="my-4">
              <div className="title">Center of Excellence</div>
              <div
                style={{ fontFamily: '"Acme-Regular", sans-serif' }}
                className="subtitle"
              >
                Banking Anywhere
              </div>
            </div>
            <form className="form" onSubmit={handleSubmit(submitHandler)}>
              <div className="textbox">
                <input
                  type="text"
                  id="username"
                  className="input"
                  {...register('username')}
                  autoComplete="none"
                  required
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="textbox d-flex align-items-center w-100">
                <input
                  type={showPwd ? 'text' : 'password'}
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is required.',
                    },
                  })}
                  id="pwd"
                  className="input"
                  required
                />
                <label htmlFor="pwd">Password</label>
                <span
                  id="showPass"
                  className="position-absolute"
                  style={{ cursor: 'pointer', width: 25, right: 25 }}
                  onClick={() => setShowPwd((prev) => !prev)}
                >
                  {showPwd ? (
                    <img src={EyeOpenIcon} alt="open" className="w-100 " />
                  ) : (
                    <img src={EyeCloseIcon} alt="close" className="w-100 " />
                  )}
                </span>
              </div>

              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <span className="error-msg">{message}</span>
                )}
              />
              {/* Button trigger modal */}
              {/* Please delete this */}
              {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                      data-bs-target="#errorModal">
                      Launch demo modal
                  </button> */}
              <div className="d-flex justify-content-end align-items-center">
                <button
                  className="button-login d-flex align-items-center"
                  type="submit"
                >
                  <div className="button-text">LOGIN</div>
                  <svg
                    width={39}
                    height={34}
                    viewBox="0 0 47 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.8889 30.5L35.4444 21M35.4444 21L25.8889 11.5M35.4444 21H2M13.9444 30.5V32.875C13.9444 34.7647 14.6995 36.5769 16.0435 37.9131C17.3875 39.2493 19.2104 40 21.1111 40H37.8333C39.7341 40 41.5569 39.2493 42.9009 37.9131C44.2449 36.5769 45 34.7647 45 32.875V9.125C45 7.23533 44.2449 5.42306 42.9009 4.08686C41.5569 2.75067 39.7341 2 37.8333 2H21.1111C19.2104 2 17.3875 2.75067 16.0435 4.08686C14.6995 5.42306 13.9444 7.23533 13.9444 9.125V11.5"
                      stroke="url(#paint0_linear_97_40)"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_97_40"
                        x1={45}
                        y1={2}
                        x2="8.60515"
                        y2="45.5233"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#121B67" />
                        <stop offset="0.276042" stopColor="#ED4055" />
                        <stop offset="0.96845" stopColor="#EDD62C" />
                        <stop offset="0.96855" stopColor="#EDDA2B" />
                        <stop offset="0.96865" stopColor="#EDDE2A" />
                        <stop offset="0.96875" stopColor="#EDE229" />
                        <stop offset="0.9992" stopColor="#615E11" />
                        <stop offset="0.9993" stopColor="#EDE927" />
                        <stop offset="0.9994" stopColor="#EDEB27" />
                        <stop offset="0.9995" stopColor="#EDEC26" />
                        <stop offset="0.9996" stopColor="#EDEE26" />
                        <stop offset="0.9997" stopColor="#EDF224" />
                        <stop offset="0.9998" stopColor="#EDF623" />
                        <stop offset="0.9999" stopColor="#EDFB22" />
                        <stop offset={1} stopColor="#EDFF21" />
                        <stop offset={1} stopColor="#EDFF21" />
                        <stop offset={1} stopColor="#EDFF21" />
                        <stop offset={1} stopColor="#EDFF21" />
                        <stop offset={1} stopColor="#EDFF21" />
                        <stop offset={1} stopColor="#EDFF21" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Login
