import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  AccountCloseIcon,
  AccountWhiteIcon,
  AmendIcon,
  BackArrow,
  BankWhiteIcon,
  DigitalSignature,
  ForwardArrow,
  ForwardArrowWhiteIcon,
  PersonPlus,
} from '../assets'
import Card from '../components/CardFeature/Card'
import { setIsMini, setMaxWidth } from '../contexts/store'

const EService = () => {
  const features = [
    {
      title: 'Debit Card Registration',
      icon: AccountWhiteIcon,
      background: true,
    },
    {
      title: 'Internet Banking Registration',
      icon: BankWhiteIcon,
      background: true,
    },
    {
      title: 'Credit Card',
      icon: AccountCloseIcon,
      background: true,
    },
  ]

  useEffect(() => {
    setMaxWidth('100%')
    setIsMini(false)
  })
  return (
    <>
      <div>
        <Link to="/">
          <img src={BackArrow} alt="" width="36" />
        </Link>
        <div className="pt-3 text-gradient fs-3">E-Services</div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="my-4 text-gradient">Please Select</div>
      </div>

      <div className="container-fluid text-white" style={{ fontSize: '20px' }}>
        <div className="row g-3 g-lg-4">
          <div className="col-12 col-lg-9">
            <div className="row g-2 mb-4">
              <div className="col">
                <Link
                  to="/customer-type"
                  className="position-relative text-decoration-none"
                >
                  <div
                    className="p-3 bg-white rounded-4 p-4 position-relative z-1"
                    style={{
                      height: '200px',
                    }}
                  >
                    <div className="card-text text-gradient">
                      Account <br />
                      Opening <br />
                      Services
                    </div>

                    <div className="pt-2 view-more text-gradient">
                      view more
                      <img
                        src={ForwardArrow}
                        alt=""
                        width="20"
                        loading="lazy"
                      />
                    </div>

                    <img
                      src={PersonPlus}
                      alt=""
                      className="position-absolute bottom-0 end-0 rounded-4"
                    />
                  </div>

                  <div className="position-absolute w-100 acc-open-service">
                    <div
                      className="p-3 white-container rounded-4 p-4 position-relative"
                      style={{
                        height: '200px',
                        opacity: 0.5,
                      }}
                    >
                      <img
                        src={PersonPlus}
                        alt=""
                        className="position-absolute bottom-0 end-0 rounded-4"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row g-3 g-lg-4 pt-3">
              {features.map((f) => (
                <Card
                  key={f.title}
                  title={f.title}
                  icon={f.icon}
                  background={f.background}
                  className="col-12 col-md-4"
                />
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-3">
            {/* <!-- <div className="row"> --> */}
            <div className="row g-0 mb-4">
              <div className="col-12 col-lg-12 position-relative">
                <div
                  className="p-3 rounded-4 position-relative bg-white overflow-hidden"
                  id="cus-specimen"
                  style={{
                    height: '200px',
                    zIndex: 10,
                    cursor: 'pointer',
                  }}
                >
                  <div className="card-text text-gradient">
                    Customer <br />
                    Specimen
                  </div>
                  <div className="pt-2 view-more text-gradient">
                    view more
                    <span>
                      <img src={ForwardArrow} alt="" width="20" />
                    </span>
                  </div>

                  <span className="position-absolute bottom-0 end-0">
                    <img src={DigitalSignature} alt="" width="75" />
                  </span>
                </div>

                <div
                  className="p-3 rounded-4 position-absolute white-container w-100 overflow-hidden"
                  style={{
                    height: '200px',
                    top: 14,
                    opacity: 0.5,
                  }}
                >
                  <span className="position-absolute bottom-0 end-0">
                    <img
                      src={DigitalSignature}
                      alt=""
                      width="75"
                      style={{ opacity: 0.7 }}
                      loading="lazy"
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="row g-3 g-lg-4 pt-3">
              <div className="col-12 col-lg-12">
                <div
                  className="p-3 rounded-4 position-relative bg-white card-bg"
                  id="amendment-acc"
                  style={{
                    height: 200,
                    zIndex: 10,
                    cursor: 'pointer',
                  }}
                >
                  <div className="card-text">
                    Account <br />
                    Amendment
                  </div>
                  <div className="pt-4 view-more">
                    view more
                    <span>
                      <img
                        src={ForwardArrowWhiteIcon}
                        alt=""
                        width="20"
                        loading="lazy"
                      />
                    </span>
                  </div>

                  <img
                    src={AmendIcon}
                    alt=""
                    className="position-absolute bottom-0 end-0 rounded-4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EService
