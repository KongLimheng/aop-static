import React from 'react'
import { store } from '../contexts/store'

const SuccessCreate = () => {
  const formData = store((state) => state.formData)
  console.log(formData)

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
      <div className="wrap-table">
        <table className="receipt-table" style={{ color: '#7a7a7a' }}>
          <tbody>
            <tr>
              <td className="left-side">Customer ID:</td>
              <td className="right-side" id="cid">
                964484
              </td>
            </tr>
            <tr>
              <td className="left-side">Account Name:</td>
              <td className="right-side" id="cusName">
                Hak Pisey
              </td>
            </tr>
            {/* <tr>
        <td class="left-side">Account Number:</td>
        <td class="right-side">001 000 584 0417</td>
      </tr>
      <tr>
        <td class="left-side">Account Type:</td>
        <td class="right-side">Saving Account</td>
      </tr>
      <tr style="border-bottom: none">
        <td class="left-side">Account Currency:</td>
        <td class="right-side">US Dollar($)</td>
      </tr> */}
          </tbody>
        </table>
      </div>
      <a
        href="./quick-transfer.html"
        className="cnb-btn rounded-3 align-self-end"
      >
        KHQR Transfer
      </a>
    </div>
  )
}

export default SuccessCreate
