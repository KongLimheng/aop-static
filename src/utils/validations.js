import Joi from 'joi'

export const AOPValidationSchema = Joi.object({
  fnameEn: Joi.string().required(),
  fnameKh: Joi.string(),
  lnameEn: Joi.string().required(),
  lnameKh: Joi.string(),
  email: Joi.string().allow(''),
  // .email({ tlds: { allow: false } })
  // .required('Email is required'),

  accountSetup: Joi.array(),
  dob: Joi.date(),
  issueDate: Joi.date(),
  expireDate: Joi.date(),
  gender: Joi.string(),
  cardType: Joi.object(),
  joinHolderCheck: Joi.bool(),
  legalDocType: Joi.object(),
  nationality: Joi.object(),
  nidNumber: Joi.string(),
  staffID: Joi.object(),
  phone: Joi.string(),
  'verify-phone': Joi.valid(Joi.ref('phone')).label('Verify Phone').messages({
    'any.only': '{{#label}} does not match.',
  }),
  feeCharge: Joi.object(),
  joinAccType: Joi.string(),
  branch: Joi.object(),
  secretParse: Joi.string().allow(''),
})
