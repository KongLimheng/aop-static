import Joi from 'joi'

export const AOPValidationSchema = Joi.object({
  fnameEn: Joi.string().required(),
  fnameKh: Joi.string(),
  lnameEn: Joi.string().required(),
  lnameKh: Joi.string(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required('Email is required'),

  accountSetup: Joi.array(),
  dob: Joi.date(),
  issueDate: Joi.date(),
  expireDate: Joi.date(),
  gender: Joi.string(),
  cardType: Joi.object(),
  joinHolderCheck: Joi.bool(),
  legalDocType: Joi.string(),
  nationality: Joi.string(),
  nidNumber: Joi.string(),
  phone: Joi.string(),
  staffID: Joi.string(),
  'verify-phone': Joi.ref('phone'),
})
