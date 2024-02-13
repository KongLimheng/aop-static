import React from 'react'
import { Controller } from 'react-hook-form'
import Select, { components } from 'react-select'

const Control = ({ children, ...props }) => {
  console.log()
  return (
    <components.Control {...props}>
      {props.selectProps.icon && (
        <img
          src={props.selectProps.icon}
          style={{
            height: 15,
            top: 23,
            bottom: 0,
            left: 0,
            zIndex: 10,
            paddingLeft: 18,
          }}
          alt="prefix-icon"
        />
      )}

      {children}
    </components.Control>
  )
}

const CustomValueContainer = ({ children, ...props }) => {
  return (
    <components.ValueContainer {...props}>
      <components.Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </components.Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== components.Placeholder ? child : null
      )}
    </components.ValueContainer>
  )
}
const styleConfig = {
  placeholder: (provided, state) => {
    return {
      ...provided,
      position: 'absolute',
      top: state.hasValue || state.selectProps.inputValue ? -24 : '20%',
      backgroundColor:
        state.hasValue || state.selectProps.inputValue
          ? 'white'
          : 'transparent',
      transition: 'top 0.4s, font-size 0.1s',
      translate: `${
        state.hasValue || state.selectProps.inputValue ? '-35px' : '-25px'
      } -0.5px`,
      fontSize: 14,
      scale: state.hasValue || state.selectProps.inputValue ? '0.87' : '1',
      padding: `1px ${
        state.hasValue || state.selectProps.inputValue ? '15px' : '23px'
      }`,
    }
  },

  valueContainer: (provided, state) => {
    return {
      ...provided,
      overflow: 'visible',
      padding: '12px 20px',
    }
  },

  container: (provided, state) => ({
    ...provided,
    flex: 1,
    border: 'none',
    height: '100%',
  }),
}

const CustomSelectDouble = ({ name, label, item, control, icon }) => {
  const { currency, accountType } = item
  console.log(currency)
  return (
    <div className="inputbox d-flex ">
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Select
            icon={icon}
            value={accountType.filter((n) => n.value === value)}
            onChange={(v) => onChange(v.value)}
            classNamePrefix="cnb-select"
            options={accountType}
            placeholder={label}
            components={{
              Control,
              ValueContainer: CustomValueContainer,
              // IndicatorSeparator: false,
            }}
            styles={{
              ...styleConfig,
              control: (provided, state) => ({
                ...provided,
                border: 'none',
                borderRadius: 0,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                minHeight: 58,
                boxShadow: 'none',
              }),
            }}
          />
        )}
      />
      <Controller
        name={name + `cur`}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Select
            value={currency.filter((n) => n.value === value)}
            onChange={(v) => onChange(v.value)}
            classNamePrefix="cnb-select-cur"
            options={currency}
            // placeholder="{label}"
            components={{
              Control,
              ValueContainer: CustomValueContainer,
              IndicatorSeparator: false,
            }}
            styles={{
              ...styleConfig,
              container: (provided, state) => ({ ...provided, width: '30%' }),
              control: (provided, state) => {
                console.log(state)
                return {
                  ...provided,
                  borderRadius: 0,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                  border: 0,
                  minHeight: 58,
                  boxShadow: 'none',
                }
              },
            }}
          />
        )}
      />
    </div>
  )
}

export default CustomSelectDouble
