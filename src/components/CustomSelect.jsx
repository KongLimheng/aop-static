import React from 'react'
import { Controller } from 'react-hook-form'
import Select, { components } from 'react-select'

const Control = ({ children, ...props }) => {
  return (
    <components.Control {...props}>
      <img
        src={props.selectProps.icon}
        style={{
          height: 15,
          top: 23,
          bottom: 0,
          left: 0,
          paddingLeft: 18,
        }}
      />
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

const CustomSelect = ({ label, control, icon, name, options = [] }) => {
  return (
    <div className="inputbox d-flex">
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <Select
              icon={icon}
              id={name}
              value={options.filter((n) => n.value === value?.value)}
              onChange={(v) => onChange(v)}
              classNamePrefix="cnb-select"
              options={options}
              placeholder={label}
              menuPosition="fixed"
              menuPortalTarget={document.body}
              components={{
                Control,
                ValueContainer: CustomValueContainer,
                IndicatorSeparator: false,
              }}
              styles={{
                control: (base) => ({
                  ...base,
                  boxShadow: 'none',
                  border: 'none',
                  minHeight: 58,
                  '@media only screen and (max-width: 460px)': {
                    minHeight: 48,
                  },
                }),
                MenuPortal: (base) => ({
                  ...base,
                  zIndex: 999,
                }),
                container: (provided, state) => {
                  return {
                    ...provided,
                    flex: 1,
                  }
                },
                placeholder: (provided, state) => {
                  return {
                    ...provided,
                    position: 'absolute',
                    top:
                      state.hasValue || state.selectProps.inputValue
                        ? -24
                        : '20%',
                    backgroundColor:
                      state.hasValue || state.selectProps.inputValue
                        ? 'white'
                        : 'transparent',
                    transition: '0.4s',
                    translate: `${
                      state.hasValue || state.selectProps.inputValue
                        ? '-25px 14px'
                        : '-3px 7px'
                    } `,
                    fontSize: 14,
                    scale:
                      state.hasValue || state.selectProps.inputValue
                        ? '0.87'
                        : '1',
                    padding: `0 ${
                      state.hasValue || state.selectProps.inputValue
                        ? '15px'
                        : '23px'
                    }`,
                    borderRadius: 3,
                    gridArea: 'unset',
                    '@media only screen and (max-width: 460px)': {
                      fontSize: 10,
                    },
                  }
                },

                valueContainer: (provided, state) => {
                  return {
                    ...provided,
                    overflow: 'visible',
                    padding: '12px 20px',
                  }
                },

                option: (styles, { isDisabled, isFocused, isSelected }) => {
                  return {
                    ...styles,
                    background: isSelected
                      ? 'var(--card-gradient-sm)'
                      : isFocused
                      ? '#B2D4FF'
                      : 'transparent',
                    color: isSelected ? '#fff' : '#000',
                    cursor: isDisabled ? 'not-allowed' : 'default',
                  }
                },

                dropdownIndicator: (base, { selectProps }) => ({
                  ...base,
                  transition: 'all .2s ease',
                  transform: selectProps.menuIsOpen ? 'rotate(180deg)' : null,
                }),
              }}
            />
          )
        }}
      />
    </div>
  )
}

export default CustomSelect
