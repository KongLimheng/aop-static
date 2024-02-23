import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SuccessIcon } from '../assets'
import { store } from '../contexts/store'
import { getRandomAccount, getSymbol } from '../utils'

const SuccessCreate = () => {
  const { fnameEn, lnameEn, accountSetup } = store((state) => state.formData)

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <img src="../images/success.svg" alt="" width={200} />
      <div className="custom-text mb-1" style={{ fontSize: 20 }}>
        Successful Created
      </div>
      <div>
        <img src={SuccessIcon} alt="" />
      </div>
      <div className="">
        We are processing and customer will be notified via SMS
      </div>
      {/* receipt section */}
      <div className="wrap-table w-75">
        <Row className="row-gap-3">
          <Col md="6">Customer ID</Col>
          <Col md="6" className="text-end ">
            {getRandomAccount(6)}
          </Col>
          <Col md="6" className=" ">
            Account Name:
          </Col>
          <Col md="6" className="text-end ">
            {fnameEn} {lnameEn}
          </Col>
        </Row>
        {accountSetup?.map(({ accountNumber, accountType, currency }) => (
          <Row key={accountNumber} className="row-gap-3 pt-3 ">
            <Col md="6" className="">
              Account Number:
            </Col>
            <Col md="6" className="text-end ">
              {accountNumber}
            </Col>
            <Col md="6" className="">
              Account Type:
            </Col>
            <Col md="6" className="text-end ">
              {accountType.value}
            </Col>
            <Col md="6" className="">
              Account Currency:
            </Col>
            <Col md="6" className="text-end ">
              {currency.label} ({getSymbol(currency.label)})
            </Col>
          </Row>
        ))}
      </div>
      <div className="w-100 d-flex justify-content-between mt-3">
        <Link to="/" className="cnb-btn rounded-3 align-self-end">
          Back Home
        </Link>
        <Link to="/quick-transfer" className="cnb-btn rounded-3 align-self-end">
          KHQR Transfer
        </Link>
      </div>
    </div>
  )
}

export default SuccessCreate
