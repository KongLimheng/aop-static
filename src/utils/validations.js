import Joi from 'joi'

export const AOPValidationSchema = Joi.object({
  fnameEn: Joi.string().required(),
  fnameKh: Joi.string(),
  lnameEn: Joi.string().required(),
  lnameKh: Joi.string(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
})
