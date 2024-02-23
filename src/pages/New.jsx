import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'
import { joiResolver } from '@hookform/resolvers/joi'
import { Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {
  BackArrow,
  BashIcon,
  BranchIcon,
  CameraIcon,
  CreditCardIcon,
  DigitalSignature,
  EmailIcon,
  EmptyIcon,
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
import CaptureComponent from '../components/CaptureComponent'
import CustomDatePicker from '../components/CustomDatePicker'
import CustomInput from '../components/CustomInput'
import CustomSelect from '../components/CustomSelect'
import CustomSelectDouble from '../components/CustomSelectDouble'
import CustomSwitch from '../components/CustomSwitch'
import OptionGroup from '../components/OptionGroup'
import { setFormData, setModalData, setOpenModal } from '../contexts/store'
import { useCountries } from '../contexts/useHooks'
import { calculateAge, getRandomAccount } from '../utils'
import {
  accountType,
  cardTypes,
  currency,
  feeCharge,
  legalDocType,
  maritalStatus,
  pickBranchs,
  staffs,
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
  const [debitCardCheck, setDebitCardCheck] = useState(false)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const tranCountries = useCountries()

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    getValues,
    watch,
    resetField,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      fnameEn: '',
      // fnameKh: 'b',
      lnameEn: '',
      // lnameKh: 'c',
      // gender: 'd',
      nationality: { label: 'KH Cambodia', value: 'KH' },
      // legalDocType: '',
      // nidNumber: '',
      email: '',
      // dob: '',
      accountSetup: [
        {
          accountType: { value: 'Saving Account', label: 'Saving Account' },
          currency: { value: 'usd', label: 'USD' },
        },
      ],
      joinHolderCheck: false,

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
  const { accountSetup: liveAccountSetup, dob, joinHolderCheck } = watch()

  const hasWedding = liveAccountSetup.some((v) =>
    v.accountType.value.includes('Wedding Account')
  )
  const hadTeenAcc = liveAccountSetup.some((v) =>
    v.accountType.value.includes('Teen Account')
  )
  console.log(errors)
  const handleTeenAccount = (dob) => {
    if (!dob) return
    const age = calculateAge(dob)
    if (age >= 18 && hadTeenAcc) {
      setOpenModal(true)
      resetField('dob')
      setModalData({ modalBody: CustomBody() })
    }
  }

  const submitHandler = (data) => {
    setIsLoading(true)
    liveAccountSetup.forEach((acc) => {
      acc.accountNumber = getRandomAccount(13)
    })

    setFormData(data)
    setTimeout(() => {
      setIsLoading(false)
      navigate('/success')
    }, 3000)
  }

  useEffect(() => {
    handleTeenAccount(dob)
    const { unsubscribe } = watch((value, { name, type }) => {
      console.log(name)
    })
    return () => unsubscribe()
  }, [dob, watch])

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-inline-flex align-items-center ">
          {/* Arrow Icon */}
          <Link to="/customer-type" className="me-4">
            <img src={BackArrow} alt="back" className="back-arrow" />
          </Link>
          <div className="custom-text form-title">
            Review and Input <br />
            Information
          </div>
        </div>
        <Link to="/">
          <img
            className="canadia-logo"
            src="/cana-logo.png"
            alt="logo"
            loading="lazy"
          />
        </Link>
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
                  register={register('fnameEn', { required: true })}
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
                  options={tranCountries}
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
                  <div className="col-md-6 col-6 pe-0">
                    <CustomDatePicker
                      label="Issue Date"
                      control={control}
                      getValues={getValues}
                      name="issueDate"
                    />
                  </div>
                  <div className="col-md-6 col-6 ps-1">
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
                  type="tel"
                  label="Phone Number"
                  icon={PhoneIcon}
                  register={register('phone')}
                  required
                />
              </div>
              <div className="col-12 col-md-6 p-2">
                <CustomInput
                  type="tel"
                  label="Verify Phone Number"
                  icon={PhoneIcon}
                  register={register('verify-phone')}
                  required
                />

                <ErrorMessage
                  errors={errors}
                  name="verify-phone"
                  render={({ message }) => (
                    <span className="error-msg">{message}</span>
                  )}
                />
              </div>
              <div className="col-12 p-2">
                <CustomInput
                  label="Email"
                  register={register('email')}
                  icon={EmailIcon}
                  required
                  error={errors}
                />

                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <span className="error-msg">{message}</span>
                  )}
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

          {/* input field: Account Types */}
          <div className="acc-container">
            <div className="container-fluid">
              {fields.map((item, idx) => {
                const count = fields.length
                return (
                  <div className="row mt-3 " key={item.id}>
                    <div className="col-11 col-sm-11">
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
                        className="col-1 col-sm-1 py-2 d-flex justify-content-end user-select-auto"
                        onClick={() => remove(idx)}
                      >
                        <img
                          src={MinusIcon}
                          alt="minus"
                          className="w-100 "
                          style={{ maxWidth: 30 }}
                        />
                      </div>
                    ) : (
                      <button
                        className="col-1 col-sm-1 py-2 d-flex justify-content-end bg-transparent align-items-center"
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
                          className="w-100 "
                          style={{ maxWidth: 30 }}
                        />
                      </button>
                    )}
                  </div>
                )
              })}
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
                <div className="col-12 px-0 mb-2">
                  <div className="d-flex align-items-center mt-4 mx-2">
                    <CustomSwitch control={control} name="joinHolderCheck" />

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
                      onChange={(v) => setDebitCardCheck((prev) => !prev)}
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
                      {/* Fee Charge*/}
                      <div className="col-12 col-md-6 p-2">
                        <CustomSelect
                          label="Fee Charge"
                          control={control}
                          icon={Profile}
                          name="feeCharge"
                          options={feeCharge}
                        />
                      </div>

                      {/* pick branch */}
                      <div className="col-12 col-md-6 p-2">
                        <CustomSelect
                          control={control}
                          label="Pickup Branch"
                          icon={BranchIcon}
                          name="branch"
                          options={pickBranchs}
                        />
                      </div>
                      <div className="col-12 col-md-6 p-2">
                        {/* Secret Phase */}
                        <CustomInput
                          register={register('secretParse')}
                          icon={SecretParseIcon}
                          label="Secret Phrase"
                          required={debitCardCheck}
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
                  {/* <CaptureImageSection /> */}
                  <div className="row">
                    <CaptureComponent
                      label="Take A Picture of NID/Passport"
                      placeholder="Please click here to take a picture of NID/Passport"
                      icon={EmptyIcon}
                      id="formFileNid"
                    />

                    <CaptureComponent
                      label="Take Photo"
                      placeholder="Please click here to take a picture of NID/Passport"
                      icon={CameraIcon}
                      id="formFileTakePic"
                    />
                    <CaptureComponent
                      label="Take A Picture of Signature"
                      placeholder="Please click here to take a 
                        picture of signature"
                      icon={DigitalSignature}
                      id="formFileSign"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* start staff referral */}
          <div className="row">
            <div className="col-12 px-4">
              <div className="mt-4 fs-5">Staff Referral</div>
              <div className="py-3" style={{ color: '#797979', fontSize: 14 }}>
                Please select Staff ID
              </div>
              {/* input field: Staff  ID */}
              <CustomSelect
                control={control}
                name="staffID"
                label="Staff ID"
                icon={PersonGradientIcon}
                options={staffs}
              />
            </div>
          </div>
          {/* button */}
          <div className="mt-5 mb-2 d-flex align-items-center justify-content-between">
            <Link
              style={{ textDecoration: 'none' }}
              className="cnb-btn rounded-3 text-white"
              to="/customer-type"
            >
              Back Home
            </Link>
            <button
              style={{ textDecoration: 'none' }}
              className="cnb-btn rounded-3 text-white d-flex align-items-center gap-2"
              id="submit"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Spinner size="sm" />}
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
