import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { store } from '../contexts/store'
import { getRandomAccount, getSymbol } from '../utils'

const SuccessCreate = () => {
  const formData = store((state) => state.formData)
  console.log(formData.accountSetup)

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <img src="../images/success.svg" alt="" width={200} />
      <div className="custom-text mb-1" style={{ fontSize: 20 }}>
        Successful Created
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
            {formData.fnameEn} {formData.lnameEn}
          </Col>
        </Row>
        {formData.accountSetup.map(
          ({ accountNumber, accountType, currency }) => (
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
          )
        )}
      </div>
      <a href="/quick-transfer" className="cnb-btn rounded-3 align-self-end">
        KHQR Transfer
      </a>
    </div>
  )
}

export default SuccessCreate
