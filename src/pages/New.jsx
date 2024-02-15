import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'
import { joiResolver } from '@hookform/resolvers/joi'
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import { NavLink } from 'react-router-dom'
import {
  BackArrow,
  BashIcon,
  BranchIcon,
  CreditCardIcon,
  EmailIcon,
  MinusIcon,
  NationalityIcon,
  NidCardIcon,
  NoteIcon,
  PersonGradientIcon,
  PhoneIcon,
  PlusIcon,
  Profile,
  SecretParseIcon,
} from '../assets'
import { CalenderIcon } from '../assets/index'
import CustomDatePicker from '../components/CustomDatePicker'
import CustomInput from '../components/CustomInput'
import CustomSelect from '../components/CustomSelect'
import CustomSelectDouble from '../components/CustomSelectDouble'
import CustomSwitch from '../components/CustomSwitch'
import OptionGroup from '../components/OptionGroup'
import {
  setIsMini,
  setMaxWidth,
  setModalData,
  setOpenModal,
} from '../contexts/store'
import {
  accountType,
  cardTypes,
  currency,
  feeCharge,
  legalDocType,
  maritalStatus,
  typeOfCard,
} from '../utils/dataSelect'
import { AOPValidationSchema } from '../utils/validations'

const CustomBody = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <img src={CalenderIcon} alt="" width="152" />

      <p className="mt-4 mb-0">
        Incorrect field Customer DOB , Customer DOB are not
      </p>
      <p>allowed to open teen account</p>
    </div>
  )
}

const New = () => {
  const [debitCardCheck, setDebitCardCheck] = useState(true)
  const [isJoinHolder, setIsJoinHolder] = useState(false)

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    getValues,
    watch,
    resetField,
  } = useForm({
    defaultValues: {
      fnameEn: 'a',
      // fnameKh: 'b',
      lnameEn: 'c',
      // lnameKh: 'c',
      // gender: 'd',
      // nationality: '',
      // legalDocType: '',
      // nidNumber: '',
      email: '',
      accountSetup: [
        {
          accountType: { value: 'Saving Account', label: 'Saving Account' },
          currency: { value: 'usd', label: 'USD' },
        },
      ],
      cardType: {
        card: { value: '', label: '' },
        type: { value: 'normal', label: 'Normal' },
      },
    },
    resolver: joiResolver(AOPValidationSchema),
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'accountSetup',
  })
  const { accountSetup: liveAccountSetup, joinHolderCheck, dob } = watch()
  const hasWedding = liveAccountSetup.some((v) =>
    v.accountType.value.includes('Wedding Account')
  )

  const hadTeenAcc = liveAccountSetup.some((v) =>
    v.accountType.value.includes('Teen Account')
  )

  const handleTeenAccount = (dob) => {
    if (!dob) return
    const age = calculateAge(dob)
    console.log(age)
    if (age >= 18 && hadTeenAcc) {
      setOpenModal(true)
      resetField('dob')
      setModalData({ modalBody: CustomBody() })
    }
  }

  /**
   *
   * @param {Date} dob
   * @returns
   */
  function calculateAge(dob) {
    // const str_date = dateStr.split('/')
    const today = new Date()
    // var dob = new Date(`${str_date[2]}-${str_date[1]}-${str_date[0]}`)

    let calAge =
      today.getFullYear() -
      dob.getFullYear() -
      (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() &&
          today.getDate() < dob.getDate()))

    return calAge
  }

  const submitHandler = (data) => {
    console.log(data)
  }

  useEffect(() => {
    setIsMini(false)
    setMaxWidth('100%')
  })

  useEffect(() => {
    handleTeenAccount(dob)
  }, [dob])

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
                <CustomDatePicker
                  getValues={getValues}
                  control={control}
                  label="Date of Birth (DD/MM/YYYY)"
                  name="dob"
                />
              </div>
              {/* gender */}
              <div className="col-12 col-md-6 p-2 mt-2">
                <OptionGroup
                  register={register('gender')}
                  label={'Gender'}
                  opt1="Male"
                  opt2={'Female'}
                />
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
                  <div className="col-md-6 ">
                    <CustomDatePicker
                      label="Issue Date"
                      control={control}
                      getValues={getValues}
                      name="issueDate"
                    />
                  </div>
                  <div className="col-md-6">
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

                <ErrorMessage errors={errors} name="email" />
              </div>
            </div>
          </div>
          <div className="mx-2 mt-4">
            <div className="form-section">Account Setup</div>
            <div className="pt-1" style={{ color: '#797979', fontSize: 14 }}>
              Please input following information to finish the process
            </div>
          </div>

          {/* input field: Account Types */}
          <div className="acc-container">
            <div className="container-fluid">
              {fields.map((item, idx) => {
                const count = fields.length
                return (
                  <div className="row" key={item.id}>
                    <div className="col-10 col-sm-11 p-2 mt-3">
                      <CustomSelectDouble
                        label="Account Type"
                        name={`accountSetup[${idx}]`}
                        control={control}
                        icon={Profile}
                        child1={'accountType'}
                        child2={'currency'}
                        options={[accountType, currency]}
                      />
                    </div>
                    {idx > 0 ? (
                      <div
                        className="col-2 col-sm-1 p-2 mt-3 d-flex justify-content-end user-select-auto"
                        onClick={() => remove(idx)}
                      >
                        <img src={MinusIcon} alt="minus" width="30" />
                      </div>
                    ) : (
                      <button
                        className="col-2 col-sm-1 p-2 mt-3 d-flex justify-content-end bg-transparent align-items-center"
                        style={{
                          border: 'none',
                        }}
                        disabled={count === 7}
                        type="button"
                        onClick={() =>
                          append({
                            accountType: item.accountType,
                            currency: item.currency,
                          })
                        }
                      >
                        <img
                          src={PlusIcon}
                          id="add-acc"
                          alt="plus"
                          width={30}
                          // style={{ marginTop: 10, cursor: 'pointer' }}
                        />
                      </button>
                    )}
                  </div>
                )
              })}

              {/* <div className="col-2 col-sm-1 p-2 mt-2 d-flex justify-content-end">
                <img
                  src="../images/plus.svg"
                  id="add-acc"
                  alt="plus"
                  width={30}
                  style={{ marginTop: 10, cursor: 'pointer' }}
                />
              </div> */}
              {/* </div> */}
            </div>
          </div>
          {/* Additional Information section */}

          {hasWedding && (
            <div className="additional-info-section container-fluid">
              <div className="mb-2">
                <div className="form-section">
                  Additional Information (Applicable for Wedding Account only)
                </div>
              </div>
              <div className="row">
                <div className="col-12 px-2">
                  <CustomSelect
                    control={control}
                    label="Marital Status"
                    icon={PersonGradientIcon}
                    name="maritalStatus"
                    options={maritalStatus}
                  />
                </div>
              </div>
              {/* join holder section */}
              <div className="row">
                {/* switch join holder */}
                <div className="col-12 px-0 mb-4">
                  <div className="d-flex align-items-center mt-4 mx-2">
                    <CustomSwitch register={register('joinHolderCheck')} />

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

              {joinHolderCheck && (
                <div className="row join-holder-section">
                  <div className="col-12 mt-3">
                    <CustomInput
                      register={register('joinHolderCid')}
                      label="Joint Holder CID"
                      icon={PersonGradientIcon}
                    />
                  </div>
                  <div className="col-12 col-md-6 mt-4">
                    <CustomSelect
                      label="Joint Holder Relation Code"
                      icon={BashIcon}
                      name="joinCode"
                      control={control}
                      options={[{ value: 'Spouse', label: 'Spouse' }]}
                    />
                  </div>

                  <div className="col-12 col-md-6 mt-3">
                    <OptionGroup
                      label="Joint Account Type"
                      register={register('joinAccType')}
                      opt1="And"
                      opt2="Or"
                    />
                  </div>
                  <div className="col-12" style={{ marginTop: '2.5rem' }}>
                    <CustomInput
                      label="Relation Note"
                      icon={NoteIcon}
                      register={register('relationNote')}
                    />
                  </div>
                </div>
              )}
              {/*end join holder section */}
            </div>
          )}
          {/* end Additional Information section */}

          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-12">
                {/* Debit Card Checkbox */}
                <div className="d-flex align-items-center mt-4 mx-2">
                  {/* checkbox */}
                  <label className="check-container d-flex align-items-center">
                    <input
                      type="checkbox"
                      id="checkDebitCard"
                      name="checkDebitCard"
                      defaultChecked
                      onChange={() => setDebitCardCheck((prev) => !prev)}
                    />
                    <div className="checkmark" />
                    <label htmlFor="checkDebitCard" className="mx-3 fs-6">
                      Debit Card
                    </label>
                  </label>
                  <hr style={{ flexGrow: 1 }} />
                </div>
                {/* debit card form */}

                {debitCardCheck && (
                  <div className="input-items mt-2 container-fluid px-0 block-debit">
                    <div className="row gx-5 mx-0">
                      <div className="col-12 col-md-6 p-2">
                        {/* Types of Card */}
                        <CustomSelectDouble
                          control={control}
                          label="Types of Card"
                          icon={CreditCardIcon}
                          name="cardType"
                          options={[cardTypes, typeOfCard]}
                          child1={'card'}
                          child2={'type'}
                        />
                      </div>
                      <div className="col-12 col-md-6 p-2">
                        {/* Fee Charge*/}

                        <CustomSelect
                          label="Fee Charge"
                          control={control}
                          icon={Profile}
                          name={'feeCharge'}
                          options={feeCharge}
                        />
                      </div>

                      <div className="col-12 col-md-6 p-2">
                        {/* pick branch */}

                        <CustomSelect
                          control={control}
                          label="Pickup Branch"
                          icon={BranchIcon}
                          name="branch"
                          options={[]}
                        />
                      </div>
                      <div className="col-12 col-md-6 p-2">
                        {/* Secret Phase */}
                        <CustomInput
                          register={register('secretParse')}
                          icon={SecretParseIcon}
                          label="Secret Phrase"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
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
                    {/* <CaptureImageSection /> */}
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
              <CustomSelect
                control={control}
                name="staffID"
                label="Staff ID"
                icon={PersonGradientIcon}
                options={[]}
              />
            </div>
          </div>
          {/* button */}
          <div className="mt-5 mb-2 d-flex align-items-center justify-content-between">
            <NavLink
              style={{ textDecoration: 'none' }}
              className="cnb-btn rounded-3 text-white"
              to="/customer-type"
            >
              Back Home
            </NavLink>
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
