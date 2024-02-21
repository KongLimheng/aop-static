import { toPng } from 'html-to-image'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { QRCode } from 'react-qrcode-logo'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { CashIcon, CrossIcon, DownloadIcon, KHQRIcon } from '../assets'
import CustomInput from '../components/CustomInput'
import { store } from '../contexts/store'

const QuickTransfer = () => {
  const { accountSetup, lnameEn, fnameEn } = store((state) => state.formData)
  const [accountList, setAccountList] = useState([])
  const [defaultSelect, setDefaultSelect] = useState({})
  const [amount, setAmount] = useState('')
  const qrRef = useRef(null)

  /**
   *
   * @param {ChangeEvent} e
   */
  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  const downloadQr = (name) => {
    toPng(qrRef.current, { cacheBust: true, quality: 0.95 }).then((v) => {
      const a = document.createElement('a')
      a.download = fnameEn + lnameEn + '.png'
      a.href = v
      a.click()
    })
  }

  useEffect(() => {
    const dataTransform = accountSetup.map(
      ({ accountNumber, accountType, currency }) => ({
        label: `${accountType.label} ${accountNumber} ${currency.label}`,
        value: accountType.value,
        currency: currency.value,
      })
    )
    setAccountList(dataTransform)
  }, [accountSetup])

  useEffect(() => {
    setDefaultSelect(accountList[0])
  }, [accountList])

  return (
    <div>
      <Link
        to="/e-services"
        className="position-absolute"
        style={{ right: 30, top: 30 }}
      >
        <img src={CrossIcon} alt="" className="close-btn" />
      </Link>
      <div className="d-flex align-items-center justify-content-center mb-2"></div>
      <div className="tab row mx-0">
        <div className="col-6 px-0">
          <button className="tablinks w-100 text-center">Quick Deposit</button>
        </div>
        <div className="col-6 px-0">
          <button className="tablinks active w-100 text-center">
            Quick Transfer-In
          </button>
        </div>
      </div>
      <div
        id="quick-deposit"
        className="tabcontent"
        style={{ display: 'none', paddingTop: 15, transition: '0.6s' }}
      >
        <div
          className="d-flex flex-column justify-content-between"
          style={{ transition: '0.6s', height: 350 }}
        >
          <div className="">
            <div className="inputbox">
              <svg
                className="position-absolute"
                style={{
                  height: 15,
                  top: 19,
                  bottom: 0,
                  left: 0,
                  paddingLeft: 18,
                }}
                viewBox="0 0 21 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.125 7C8.05 7 9.625 5.425 9.625 3.5C9.625 1.575 8.05 0 6.125 0C4.2 0 2.625 1.575 2.625 3.5C2.625 5.425 4.2 7 6.125 7ZM9.625 14V9.3625C8.6625 9.0125 7.4375 8.75 6.125 8.75C2.7125 8.75 0 10.325 0 12.25V14H9.625ZM19.25 0H13.125C12.1625 0 11.375 0.7875 11.375 1.75V12.25C11.375 13.2125 12.1625 14 13.125 14H19.25C20.2125 14 21 13.2125 21 12.25V1.75C21 0.7875 20.2125 0 19.25 0ZM15.75 12.25H14V1.75H15.75V12.25Z"
                  fill="black"
                />
                <path
                  d="M6.125 7C8.05 7 9.625 5.425 9.625 3.5C9.625 1.575 8.05 0 6.125 0C4.2 0 2.625 1.575 2.625 3.5C2.625 5.425 4.2 7 6.125 7ZM9.625 14V9.3625C8.6625 9.0125 7.4375 8.75 6.125 8.75C2.7125 8.75 0 10.325 0 12.25V14H9.625ZM19.25 0H13.125C12.1625 0 11.375 0.7875 11.375 1.75V12.25C11.375 13.2125 12.1625 14 13.125 14H19.25C20.2125 14 21 13.2125 21 12.25V1.75C21 0.7875 20.2125 0 19.25 0ZM15.75 12.25H14V1.75H15.75V12.25Z"
                  fill="url(#paint0_linear_213_130)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_213_130"
                    x1={0}
                    y1={0}
                    x2="21.6962"
                    y2="20.3722"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#121B67" />
                    <stop offset="0.554587" stopColor="#ED4055" />
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
              <input
                style={{ border: 'none', background: 'none' }}
                className="input"
                type="number"
                required=""
              />
              <label>
                Account Number
                <div className="d-inline-flex" style={{ color: '#921d1d' }}>
                  *
                </div>
              </label>
            </div>
            {/* currency section */}
            <div className="" style={{ paddingTop: 20 }}>
              <div className="currency-label">Currency</div>
              <div className="button-box d-flex justify-content-between">
                <button
                  type="button"
                  id="riel-btn"
                  className="toggle-currency active-currency d-flex align-items-center justify-content-center"
                >
                  <span
                    className="pe-2"
                    style={{ fontSize: 19, lineHeight: 12, fontWeight: 700 }}
                  >
                    ៛
                  </span>
                  <div>KHR</div>
                </button>
                <button
                  type="button"
                  id="usd-btn"
                  className="toggle-currency d-flex align-items-center justify-content-center"
                >
                  <span
                    className="pe-2"
                    style={{ fontSize: 19, lineHeight: 12 }}
                  >
                    $
                  </span>
                  <div>USD</div>
                </button>
              </div>
            </div>
            <div className="" style={{ paddingTop: 35 }}>
              <div className="inputbox">
                <svg
                  className="position-absolute"
                  style={{
                    height: 15,
                    top: 19,
                    bottom: 0,
                    left: 0,
                    paddingLeft: 18,
                  }}
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H18V12H0V0ZM9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6C12 6.79565 11.6839 7.55871 11.1213 8.12132C10.5587 8.68393 9.79565 9 9 9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3ZM4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4V8C2.53043 8 3.03914 8.21071 3.41421 8.58579C3.78929 8.96086 4 9.46957 4 10H14C14 9.46957 14.2107 8.96086 14.5858 8.58579C14.9609 8.21071 15.4696 8 16 8V4C15.4696 4 14.9609 3.78929 14.5858 3.41421C14.2107 3.03914 14 2.53043 14 2H4Z"
                    fill="url(#paint0_linear_213_134)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_213_134"
                      x1={0}
                      y1={0}
                      x2="18.5967"
                      y2="17.4619"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#121B67" />
                      <stop offset="0.554587" stopColor="#ED4055" />
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
                <input
                  style={{ border: 'none', background: 'none' }}
                  className="input"
                  type="text"
                  pattern="^(\$|៛)\d{1,3}(,\d{3})*(\.\d+)?$"
                  defaultValue=""
                  data-type="currency"
                  required=""
                />
                <label>
                  Amount
                  <div className="d-inline-flex" style={{ color: '#921d1d' }}>
                    *
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="btn-deposit">
            <button className="btn rounded-1 text-white deposit-btn">
              Deposit
            </button>
          </div>
        </div>
      </div>
      <div
        id="quick-transfer"
        className="tabcontent"
        style={{ display: 'block' }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
          <div className="khqr-container gap-4 pb-4" ref={qrRef}>
            <div className="qr-header">
              <img src={KHQRIcon} alt="khqr" width={80} />
            </div>
            <div>
              <h5 className="qr-name px-4 fs-2 ">
                {fnameEn} {lnameEn}
              </h5>
              <h1 className="px-4">
                <span className="amount-symbol">$</span>
                <span className="qr-amount">{amount || 0}</span>
              </h1>
              <div className="dash-devider w-100 border border-1" />
            </div>
            <div className="d-flex justify-content-center py-4">
              <QRCode
                value="https://www.canadiabank.com.kh/"
                logoImage="/cana-logo.png"
                ecLevel="H"
                size={250}
                logoPadding={1}
                logoPaddingStyle="circle"
                eyeRadius={15}
              />
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center  w-75">
            {/* <CustomSelect
              name="amount"
              options={accountList || []}
              label="Account"
            /> */}
            <Select
              className="w-100 "
              options={accountList || []}
              value={defaultSelect}
              onChange={(e) => setDefaultSelect(e)}
              styles={{
                control: (base) => ({
                  ...base,
                  boxShadow: 'none',
                  border: 'none',
                }),
                option: (styles, { isDisabled, isFocused, isSelected }) => {
                  return {
                    ...styles,
                    background: isSelected
                      ? 'var(--card-gradient-sm)'
                      : isFocused
                      ? '#B2D4FF'
                      : 'transparent',
                    color: isSelected ? '#fff' : '#000',
                    cursor: isDisabled ? 'not-allowed' : 'default',
                  }
                },
              }}
            />
          </div>
          {/* input amount */}

          <CustomInput
            label="Amount"
            icon={CashIcon}
            required
            register={{ onChange: handleChange, value: amount }}
            setChangeAmount={setAmount}
            type="number"
          />
          {/* screenshot & sharelink */}
          <div className="d-flex align-items-center mt-4">
            <button
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
              }}
              className="me-4 d-flex flex-column justify-content-center align-items-center"
              type="button"
              onClick={downloadQr}
            >
              <img src={DownloadIcon} alt="download" />
              <div
                className="pt-2 custom-text text-center"
                style={{ fontSize: 13 }}
              >
                Screenshot
              </div>
            </button>
            <button
              style={{
                outline: 'none',
                border: 'none',
                background: 'transparent',
              }}
              className="ms-4 d-flex flex-column justify-content-center align-items-center"
            >
              <img src={DownloadIcon} alt="share" />
              <div
                className="pt-2 custom-text text-center"
                style={{ fontSize: 13 }}
              >
                Share
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickTransfer
