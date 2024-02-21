import React from 'react'
import { NumericFormat } from 'react-number-format'

const CustomInput = ({
  register,
  label,
  icon,
  required = false,
  type = 'text',
  setChangeAmount,
  error,
}) => {
  return (
    <div
      className={`inputbox ${
        error?.[register.name]?.message && 'border-danger'
      }`}
    >
      <img
        src={icon}
        alt={label}
        className="position-absolute"
        style={{
          height: 32,
          width: 32,
          top: 12,
          bottom: 0,
          left: 0,
          paddingLeft: 18,
        }}
        loading="lazy"
      />
      {type === 'number' ? (
        // <InputMask
        //   className="input"
        //   {...register}
        //   mask="_,___,___,___"
        //   maxLength={15}
        //   replacement={{ _: /\d/ }}
        //   onBlur={(e) =>
        //     setChangeAmount(register.value && register.value + '.00')
        //   }
        // />
        <NumericFormat
          type="text"
          thousandSeparator=","
          allowNegative={false}
          decimalScale={2}
          fixedDecimalScale
          {...register}
          className="input"
          maxLength={15}
          onValueChange={(v) => setChangeAmount(v.formattedValue)}
        />
      ) : (
        <input
          {...register}
          style={{ border: 'none' }}
          className="input"
          type="text"
          id={register?.name}
          // name="firstName"
          required={required}
          autoComplete="false"
        />
      )}
      <label htmlFor={register?.name}>
        {label}
        <div className="d-inline-flex" style={{ color: '#921d1d' }}>
          {required && '*'}
        </div>
      </label>
    </div>
  )
}

export default CustomInput
