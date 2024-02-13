import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

import { NavLink } from 'react-router-dom'
import {
  BackArrow,
  EmailIcon,
  NationalityIcon,
  NidCardIcon,
  PersonGradientIcon,
  PhoneIcon,
  PlusIcon,
} from '../assets'
import CustomDatePicker from '../components/CustomDatePicker'
import CustomInput from '../components/CustomInput'
import CustomSelect from '../components/CustomSelect'
import CustomSelectDouble from '../components/CustomSelectDouble'
import OptionGroup from '../components/OptionGroup'
import { store } from '../contexts/store'
import { accountType, currency, legalDocType } from '../utils/dataSelect'

const New = () => {
  const setIsMini = store((state) => state.setIsMini)
  const setMaxWidth = store((state) => state.setMaxWidth)

  const [gender, setGender] = useState('M')
  const { handleSubmit, register, control, formState, getValues } = useForm({
    defaultValues: {
      fnameEn: '',
      fnameKh: '',
      lnameEn: '',
      lnameKh: '',
      gender: '',
      nationality: '',
      legalDocType: '',
      nidNumber: '',
      accountSetup: [
        {
          accountType,
          currency,
        },
      ],
      // issueDate: '',
      // expireDate: '',
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'accountSetup',
  })

  const submitHandler = (data) => {
    console.log(data)
  }

  console.log(gender)

  useEffect(() => {
    setIsMini(false)
    setMaxWidth('100%')
  })

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-inline-flex">
          {/* Arrow Icon */}
          <NavLink to="/e-services" className="me-4">
            <img src={BackArrow} alt="back" width={40} />
          </NavLink>
          <div className="custom-text form-title">
            Review and Input <br />
            Information
          </div>
        </div>
        <img className="canadia-logo" src="/cana-logo.png" alt="logo" />
      </div>
      <div className="divider mt-3" />
      {/* start customer form */}
      <div className="info-container">
        <div className="mx-2 mb-2">
          <div className="form-section">Customer Information</div>
          <div className="pt-1" style={{ color: '#797979', fontSize: 14 }}>
            Please input following information to finish the process
          </div>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="container-fluid px-0">
            <div className="row gx-5 mx-0">
              <div className="col-12 col-md-6 p-2 mt-3">
                <CustomInput
                  label="First Name (KH)"
                  register={register('fnameKh')}
                  icon={PersonGradientIcon}
                  required
                />
              </div>
              <div className="col-12 col-md-6 p-2 mt-3 ">
                <CustomInput
                  label="Last Name (KH)"
                  register={register('lnameKh')}
                  icon={PersonGradientIcon}
                  required
                />
              </div>
              <div className="col-12 col-md-6 p-2 mt-3">
                <CustomInput
                  label="FirstName (EN)"
                  register={register('fnameEn')}
                  icon={PersonGradientIcon}
                  required
                />
              </div>
              <div className="col-12 col-md-6 p-2 mt-3">
                <CustomInput
                  label="Last Name (EN)"
                  register={register('lnameEn')}
                  icon={PersonGradientIcon}
                  required
                />
              </div>

              <div className="col-12 col-md-6 p-2 mt-3">
                {/* <div className="inputbox">
                  <img
                    src="../images/calendar.svg"
                    alt="dob"
                    className="position-absolute"
                    style={{
                      height: 18,
                      top: 20,
                      bottom: 0,
                      left: 0,
                      paddingLeft: 18,
                      zIndex: 10,
                    }}
                  />
                  <input
                    style={{ border: 'none' }}
                    type="text"
                    id="dob"
                    className="input"
                    name="dob"
                    required=""
                  />
                  <label>
                    Date of Birth (DD/MM/YYYY)
                    <div className="d-inline-flex" style={{ color: '#921d1d' }}>
                      *
                    </div>
                  </label>
                </div> */}
                <CustomDatePicker
                  getValues={getValues}
                  control={control}
                  label="Date of Birth (DD/MM/YYYY)"
                  name="dob"
                />
              </div>
              {/* gender */}
              <div className="col-12 col-md-6 p-2 mt-2">
                <OptionGroup register={register('gender')} label={'Gender'} />
              </div>
              <div className="col-12 col-md-6 p-2 mt-2">
                <CustomSelect
                  options={[]}
                  label="Nationality"
                  control={control}
                  icon={NationalityIcon}
                  name="nationality"
                />
              </div>

              <div className="col-12 col-md-6 p-2 mt-2">
                <CustomSelect
                  control={control}
                  name="legalDocType"
                  label="Legal Document Type"
                  icon={NidCardIcon}
                  options={legalDocType}
                />
              </div>

              <div className="col-12 col-md-6 p-2">
                <CustomInput
                  label="NID Number"
                  register={register('nidNumber')}
                  icon={NidCardIcon}
                  required
                />
              </div>
              <div className="col-12 col-md-6 p-2">
                <div className="row">
                  <div className="col-md-6 pe-1">
                    <CustomDatePicker
                      label="Issue Date"
                      control={control}
                      getValues={getValues}
                      name="issueDate"
                    />
                  </div>
                  <div className="col-md-6 ps-1">
                    <CustomDatePicker
                      label="Expire Date"
                      control={control}
                      getValues={getValues}
                      name="expireDate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 p-2">
                <CustomInput
                  label="Phone Number"
                  icon={PhoneIcon}
                  register={register('phone')}
                  required
                />
              </div>
              <div className="col-12 col-md-6 p-2">
                <CustomInput
                  label="Verify Phone Number"
                  icon={PhoneIcon}
                  register={register('verify-phone')}
                  required
                />
              </div>
              <div className="col-12 p-2">
                <CustomInput
                  label="Email"
                  register={register('email')}
                  icon={EmailIcon}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mx-2 mt-4">
            <div className="form-section">Account Setup</div>
            <div className="pt-1" style={{ color: '#797979', fontSize: 14 }}>
              Please input following information to finish the process
            </div>
          </div>

          <div className="acc-container">
            {/* input field: Account Types */}
            <div className="container-fluid">
              <div className="row">
                {fields.map((item, idx) => (
                  <>
                    <div className="col-10 col-sm-11 p-2">
                      <CustomSelectDouble
                        label="Account Type"
                        name={`acc.${idx}`}
                        options={accountType}
                        control={control}
                        key={item.id}
                        item={item}
                      />
                    </div>

                    <div
                      className="col-2 col-sm-1 p-2 mt-2 d-flex justify-content-end"
                      onClick={() => append({ accountType, currency })}
                    >
                      <img
                        src={PlusIcon}
                        id="add-acc"
                        alt="plus"
                        width={30}
                        // style={{ marginTop: 10, cursor: 'pointer' }}
                      />
                    </div>
                  </>
                ))}

                <div className="col-2 col-sm-1 p-2 mt-2 d-flex justify-content-end">
                  <img
                    src="../images/plus.svg"
                    id="add-acc"
                    alt="plus"
                    width={30}
                    style={{ marginTop: 10, cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Additional Information section */}
          <div className="additional-info-section d-none container-fluid">
            <div className="mb-2">
              <div className="form-section">
                Additional Information (Applicable for Wedding Account only)
              </div>
            </div>
            <div className="row">
              <div className="col-12 px-2">
                {/* input field: Staff  ID */}
                <div className="inputbox bg-white mt-3 d-flex align-items-center">
                  <img
                    src="../images/person.svg"
                    alt="staff"
                    className="position-absolute"
                    style={{
                      height: 32,
                      width: 32,
                      top: 12,
                      bottom: 0,
                      left: 0,
                      zIndex: 10,
                      paddingLeft: 18,
                    }}
                  />
                  <select
                    style={{ border: 'none', height: '100%', width: '100%' }}
                    className="input js-selector-marital"
                    name="maritalStatus"
                    id="maritalStatus"
                  >
                    <option value="Single">Single</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Separated">Separated</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                  <label>Marital Status</label>
                  <img
                    src="../images/arrow-down.svg"
                    alt="down"
                    className="arrow-down me-4"
                  />
                </div>
              </div>
            </div>
            {/* join holder section */}
            <div className="row">
              {/* switch join holder */}
              <div className="col-12 px-0 mb-4">
                <div className="d-flex align-items-center mt-4 mx-2">
                  <label className="switch">
                    <input
                      type="checkbox"
                      id="switchJointHolder"
                      name="switchJointHolder"
                    />
                    <div className="slider">
                      <div className="circle">
                        <svg
                          className="cross"
                          xmlSpace="preserve"
                          style={{ enableBackground: 'new 0 0 512 512' }}
                          viewBox="0 0 365.696 365.696"
                          y={0}
                          x={0}
                          height={6}
                          width={6}
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path
                              data-original="#000000"
                              fill="currentColor"
                              d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
                            />
                          </g>
                          <stop offset="0.554587" stopColor="#ED4055" />
                        </svg>
                        <svg
                          className="checkmark-switch"
                          width={14}
                          height={14}
                          xmlSpace="preserve"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                            stroke="#21005D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                            stroke="url(#paint0_radial_116_14)"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <radialGradient
                              id="paint0_radial_116_14"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(9.60409 5.47847) rotate(15.2222) scale(7.53521 8.85737)"
                            >
                              <stop stopColor="#121B67" />
                              <stop offset="0.554587" stopColor="#ED4055" />
                              <stop offset="0.96845" stopColor="#EDD62C" />
                              <stop offset="0.96855" stopColor="#EDDA2B" />
                              <stop offset="0.96865" stopColor="#EDDE2A" />
                              <stop offset="0.96875" stopColor="#EDE229" />
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
                            </radialGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </label>
                  <span className="px-3 user-select-none">
                    Joint Holder Information
                  </span>
                  <hr style={{ flexGrow: 1 }} />
                </div>
                <div className="pt-1 ps-2 sub-title">
                  Please input following information to finish the process
                </div>
              </div>
            </div>
            <div className="row join-holder-section d-none">
              <div className="col-12 mt-4">
                <div className="inputbox">
                  <img
                    src="../images/person.svg"
                    alt="first-name-en"
                    className="position-absolute"
                    style={{
                      height: 32,
                      width: 32,
                      top: 12,
                      bottom: 0,
                      left: 0,
                      zIndex: 10,
                      paddingLeft: 18,
                    }}
                  />
                  <input
                    style={{ border: 'none' }}
                    className="input"
                    type="text"
                    id="joinHolderCID"
                    name="joinHolderCID"
                    required=""
                  />
                  <label className="">Joint Holder CID</label>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-4">
                <div className="inputbox bg-white mt-3 d-flex align-items-center">
                  <img
                    src="../images/bash.svg"
                    alt="staff"
                    className="position-absolute"
                    style={{
                      height: 36,
                      width: 36,
                      top: 12,
                      bottom: 0,
                      left: 0,
                      zIndex: 10,
                      paddingLeft: 18,
                    }}
                  />
                  <select
                    style={{ border: 'none', height: '100%', width: '100%' }}
                    className="input js-selector-joinCode"
                    name="joinHolderCode"
                    id="joinHolderCode"
                  >
                    <option value="">13.Spouse</option>
                  </select>
                  <label>Joint Holder Relation Code</label>
                  <img
                    src="../images/arrow-down.svg"
                    alt="down"
                    className="arrow-down me-4"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 mt-4">
                <div style={{ color: '#6a6a6a', fontSize: 13 }}>
                  Joint Account Type
                </div>
                <div className="button-box d-flex justify-content-between">
                  <button
                    type="button"
                    id="joinAndBtn"
                    className="toggle-btn active-in"
                  >
                    <span className="pe-1" /> And
                  </button>
                  <input
                    type="radio"
                    id="andRadio"
                    defaultChecked=""
                    name="joinAccType"
                    defaultValue="and"
                    style={{ display: 'none' }}
                  />
                  <button type="button" id="joinOrBtn" className="toggle-btn">
                    <span className="pe-1"> </span> Or
                  </button>
                  <input
                    type="radio"
                    id="orRadio"
                    name="joinAccType"
                    defaultValue="or"
                    style={{ display: 'none' }}
                  />
                </div>
              </div>
              <div className="col-12" style={{ marginTop: '2.5rem' }}>
                <div className="inputbox">
                  <img
                    src="../images/note-icon.svg"
                    alt="first-name-en"
                    className="position-absolute"
                    style={{
                      height: 36,
                      width: 36,
                      top: 12,
                      bottom: 0,
                      left: 0,
                      zIndex: 10,
                      paddingLeft: 18,
                    }}
                  />
                  <input
                    style={{ border: 'none' }}
                    className="input"
                    type="text"
                    id="relationNote"
                    name="relationNote"
                    required=""
                  />
                  <label className="">Relation Note</label>
                </div>
              </div>
            </div>
            {/*end join holder section */}
          </div>
          {/* end Additional Information section */}
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-12">
                {/* Debit Card Checkbox */}
                <div className="d-flex align-items-center mt-4 mx-2">
                  {/* checkbox */}
                  <label className="check-container d-flex align-items-center">
                    <input type="checkbox" id="checkDebitCard" />
                    <div className="checkmark" />
                    <label htmlFor="checkDebitCard" className="mx-3 fs-6">
                      Debit Card
                    </label>
                  </label>
                  <hr style={{ flexGrow: 1 }} />
                </div>
                {/* debit card form */}
                <div className="input-items mt-2 container-fluid px-0 block-debit">
                  <div className="row gx-5 mx-0">
                    <div className="col-12 col-md-6 p-2">
                      {/* Types of Card */}
                      <div className="inputbox bg-white d-flex align-items-center">
                        <img
                          src="../images/credit-card.svg"
                          alt="type-card"
                          className="position-absolute"
                          style={{
                            height: 15,
                            top: 24,
                            bottom: 0,
                            left: 0,
                            zIndex: 10,
                            paddingLeft: 18,
                          }}
                        />
                        <select
                          style={{
                            border: 'none',
                            height: '100%',
                            width: '80%',
                          }}
                          className="input js-selector"
                        >
                          <option value="" />
                          <option value="Visa">Visa</option>
                          <option value="UPI ">UPI</option>
                          <option value="ATM">ATM</option>
                        </select>
                        <label>
                          Types of Card
                          <div
                            className="d-inline-flex required-d-card"
                            style={{ color: '#921d1d' }}
                          >
                            *
                          </div>
                        </label>
                        <img
                          src="../images/arrow-down.svg"
                          alt="down"
                          className="arrow-down-type-card me-4"
                        />
                        <div
                          className="d-flex"
                          style={{ borderLeft: '1px solid #797979' }}
                        >
                          <img
                            src="../images/arrow-down.svg"
                            alt="down"
                            className="arrow-down-type-card-type ms-4"
                          />
                          <select
                            className="js-selector type-card"
                            style={{
                              border: 'none',
                              outline: 'none',
                              height: 30,
                              width: '100%',
                              borderLeft: '1px solid #797979 !important',
                            }}
                          >
                            <option value="normal">Normal</option>
                            <option value="vip">VIP</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 p-2">
                      {/* Fee Charge*/}
                      <div className="inputbox bg-white d-flex align-items-center justify-content-between">
                        <svg
                          className="position-absolute"
                          style={{
                            height: 15,
                            top: 24,
                            bottom: 0,
                            zIndex: 10,
                            left: 0,
                            paddingLeft: 18,
                          }}
                          viewBox="0 0 19 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.6629 7.56981C16.6629 8.0163 16.855 8.44449 17.1969 8.76021C17.5389 9.07592 18.0027 9.25328 18.4862 9.25328V12.6202C18.4862 13.0667 18.2941 13.4949 17.9522 13.8106C17.6103 14.1263 17.1465 14.3037 16.6629 14.3037H2.07626C1.59268 14.3037 1.12891 14.1263 0.786971 13.8106C0.44503 13.4949 0.25293 13.0667 0.25293 12.6202V9.25328C1.26488 9.25328 2.07626 8.49572 2.07626 7.56981C2.07626 7.12333 1.88416 6.69513 1.54222 6.37942C1.20028 6.06371 0.736507 5.88634 0.25293 5.88634V2.51941C0.25293 1.58508 1.07343 0.835938 2.07626 0.835938H16.6629C17.1465 0.835938 17.6103 1.0133 17.9522 1.32901C18.2941 1.64473 18.4862 2.07292 18.4862 2.51941V5.88634C18.0027 5.88634 17.5389 6.06371 17.1969 6.37942C16.855 6.69513 16.6629 7.12333 16.6629 7.56981ZM13.4721 11.1472C13.4721 9.88458 10.7371 9.25328 9.36958 9.25328C8.00208 9.25328 5.26709 9.88458 5.26709 11.1472V11.7785H13.4721V11.1472ZM9.36958 7.78025C9.91361 7.78025 10.4353 7.58071 10.82 7.22554C11.2047 6.87036 11.4208 6.38864 11.4208 5.88634C11.4208 5.38405 11.2047 4.90233 10.82 4.54715C10.4353 4.19198 9.91361 3.99244 9.36958 3.99244C8.82556 3.99244 8.30382 4.19198 7.91913 4.54715C7.53445 4.90233 7.31834 5.38405 7.31834 5.88634C7.31834 6.38864 7.53445 6.87036 7.91913 7.22554C8.30382 7.58071 8.82556 7.78025 9.36958 7.78025Z"
                            fill="url(#paint0_radial_213_448)"
                          />
                          <defs>
                            <radialGradient
                              id="paint0_radial_213_448"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(14.457 4.98849) rotate(16.2963) scale(14.7986 18.4924)"
                            >
                              <stop stopColor="#121B67" />
                              <stop offset="0.635422" stopColor="#ED4055" />
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
                            </radialGradient>
                          </defs>
                        </svg>
                        <select
                          className="input js-selector"
                          style={{
                            border: 'none',
                            height: '100%',
                            width: '80%',
                          }}
                          required=""
                        >
                          <option value="" />
                          <option value="monthly">Monthly</option>
                          <option value="yearly">Yearly</option>
                          <option value="wave">Wave</option>
                        </select>
                        <label>
                          Fee Charge
                          <div
                            className="d-inline-flex required-d-card"
                            style={{ color: '#921d1d' }}
                          >
                            *
                          </div>
                        </label>
                        <img
                          src="../images/arrow-down.svg"
                          alt="down"
                          className="arrow-down me-4"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 p-2">
                      {/* pick branch */}
                      <div className="inputbox bg-white d-flex align-items-center justify-content-between">
                        <img
                          src="../images/branch.svg"
                          alt="pickup-branch"
                          className="position-absolute"
                          style={{
                            height: 15,
                            top: 20,
                            bottom: 0,
                            zIndex: 10,
                            left: 0,
                            padding: '0 18px',
                          }}
                        />
                        <select
                          className="input js-selector"
                          style={{
                            border: 'none',
                            height: '100%',
                            width: '80%',
                          }}
                          required=""
                          name="pickup-branch"
                          id="pickup-branch"
                        />
                        <label>
                          Pickup Branch
                          <div
                            className="d-inline-flex required-d-card"
                            style={{ color: '#921d1d' }}
                          >
                            *
                          </div>
                        </label>
                        <img
                          src="../images/arrow-down.svg"
                          alt="down"
                          className="arrow-down me-4"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 p-2">
                      {/* Secret Phase */}
                      <div className="inputbox">
                        <svg
                          className="position-absolute"
                          style={{
                            height: 20,
                            top: 20,
                            bottom: 0,
                            zIndex: 10,
                            left: 0,
                            paddingLeft: 18,
                          }}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 5H20V15H15V17C15 17.2652 15.1054 17.5196 15.2929 17.7071C15.4804 17.8946 15.7348 18 16 18H18V20H15.5C14.95 20 14 19.55 14 19C14 19.55 13.05 20 12.5 20H10V18H12C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H10V0H12.5C13.05 0 14 0.45 14 1C14 0.45 14.95 0 15.5 0H18V2H16C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V5ZM0 5H11V7H2V13H11V15H0V5ZM18 13V7H15V13H18ZM6.5 10C6.5 9.60218 6.34196 9.22064 6.06066 8.93934C5.77936 8.65804 5.39782 8.5 5 8.5C4.60218 8.5 4.22064 8.65804 3.93934 8.93934C3.65804 9.22064 3.5 9.60218 3.5 10C3.5 10.3978 3.65804 10.7794 3.93934 11.0607C4.22064 11.342 4.60218 11.5 5 11.5C5.39782 11.5 5.77936 11.342 6.06066 11.0607C6.34196 10.7794 6.5 10.3978 6.5 10ZM11 8.89C10.39 8.33 9.44 8.38 8.88 9C8.32 9.6 8.37 10.55 9 11.11C9.55 11.63 10.43 11.63 11 11.11V8.89Z"
                            fill="url(#paint0_linear_624_196)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_624_196"
                              x1={0}
                              y1={0}
                              x2="19.4328"
                              y2="20.5367"
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
                          style={{ border: 'none' }}
                          className="input"
                          type="text"
                          required=""
                        />
                        <label className="">
                          Secret Phrase
                          <div
                            className="d-inline-flex required-d-card"
                            style={{ color: '#921d1d' }}
                          >
                            *
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/* Mobile banking checkbox*/}
                <div className="d-flex align-items-center my-4 mx-2">
                  {/* checkbox */}
                  <label className="check-container d-flex align-items-center">
                    <input type="checkbox" id="checkMobileBankingApp" />
                    <div className="checkmark" />
                    <label
                      htmlFor="checkMobileBankingApp"
                      className="mx-3 fs-6"
                    >
                      Mobile Banking App
                    </label>
                  </label>
                  <hr style={{ flexGrow: 1 }} />
                </div>
                <div className="container-fluid mx-0">
                  <div className="row g-3 px-0 px-0">
                    <div className="col-12 col-md-4 px-0">
                      {/* take a picture of NID/Passport section */}
                      <div className="mx-2">
                        <div style={{ fontSize: '11.5px' }}>
                          Take A Picture of NID/Passport/Others
                          <div
                            className="d-inline-flex"
                            style={{ color: '#921d1d' }}
                          >
                            *
                          </div>
                        </div>
                        <label
                          htmlFor="formFile"
                          className="mt-2 d-flex flex-column justify-content-center align-items-center rounded-3"
                          style={{
                            padding: '40px 0',
                            border: '1px dashed #797979',
                          }}
                        >
                          <img
                            src="../images/empty-img.svg"
                            alt="empty-img"
                            height={28}
                          />
                          <label
                            className="pt-2 text-center"
                            style={{ fontSize: 14, color: '#797979' }}
                            htmlFor="formFile"
                          >
                            Please click here to take a
                            <br />
                            picture of NID/Passport/Others
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            accept=".png, .jpg, .jpeg"
                            name="fileName"
                            required=""
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 px-0">
                      {/* take a picture section */}
                      <div className="mx-2">
                        <div style={{ fontSize: '11.5px' }}>
                          Take Photo
                          <div
                            className="d-inline-flex"
                            style={{ color: '#921d1d' }}
                          >
                            *
                          </div>
                        </div>
                        <label
                          htmlFor="formFile"
                          className="mt-2 d-flex flex-column justify-content-center align-items-center rounded-3"
                          style={{
                            padding: '40px 0',
                            border: '1px dashed #797979',
                          }}
                        >
                          <img
                            src="../images/camera.svg"
                            alt="camera"
                            height={28}
                          />
                          <label
                            className="pt-2 text-center"
                            style={{ fontSize: 14, color: '#797979' }}
                            htmlFor="formFile"
                          >
                            Please click here to <br />
                            take photo
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            accept=".png, .jpg, .jpeg"
                            name="fileName"
                            required=""
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 px-0">
                      {/* take a picture section */}
                      <div className="mx-2">
                        <div style={{ fontSize: '11.5px' }}>
                          Take A Picture of Signature
                          <div
                            className="d-inline-flex"
                            style={{ color: '#921d1d' }}
                          >
                            *
                          </div>
                        </div>
                        <label
                          htmlFor="formFile"
                          className="mt-2 d-flex flex-column justify-content-center align-items-center rounded-3"
                          style={{
                            padding: '40px 0',
                            border: '1px dashed #797979',
                          }}
                        >
                          <img
                            src="../images/digital-signature.svg"
                            alt="camera"
                            height={28}
                          />
                          <label
                            className="pt-2 text-center"
                            style={{ fontSize: 14, color: '#797979' }}
                            htmlFor="formFile"
                          >
                            Please click here to take a<br />
                            picture of signature
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            accept=".png, .jpg, .jpeg"
                            name="fileName"
                            required=""
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* start staff referral */}
          <div className="row">
            <div className="col-12 px-4">
              <div className="mt-4 fs-5">Staff Referral</div>
              <div className="pt-1" style={{ color: '#797979', fontSize: 14 }}>
                Please select Staff ID
              </div>
              {/* input field: Staff  ID */}
              <div className="inputbox bg-white mt-3 d-flex align-items-center">
                <img
                  src="../images/person.svg"
                  alt="staff"
                  className="position-absolute"
                  style={{
                    height: 32,
                    width: 32,
                    top: 12,
                    bottom: 0,
                    left: 0,
                    zIndex: 10,
                    paddingLeft: 18,
                  }}
                />
                <select
                  style={{ border: 'none', height: '100%', width: '100%' }}
                  className="input js-selector"
                  name="staffID"
                  required=""
                >
                  <option value="" />
                </select>
                <label>
                  Staff ID
                  <div className="d-inline-flex" style={{ color: '#921d1d' }}>
                    *
                  </div>
                </label>
                <img
                  src="../images/arrow-down.svg"
                  alt="down"
                  className="arrow-down me-4"
                />
              </div>
            </div>
          </div>
          {/* button */}
          <div className="mt-5 mb-2 d-flex align-items-center justify-content-between">
            <a
              style={{ textDecoration: 'none' }}
              className="cnb-btn rounded-3 text-white"
              id="submit"
              type="submit"
              href="/templates/customer-type.html"
            >
              Back Home
            </a>
            <button
              style={{ textDecoration: 'none' }}
              className="cnb-btn rounded-3 text-white"
              id="submit"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {/* end customer form */}
      </div>
    </>
  )
}

export default New
