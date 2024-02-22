import React from 'react'
import { Controller } from 'react-hook-form'
import Select, { components } from 'react-select'

const Control = ({ children, ...props }) => {
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

const CustomIndicatorContainer = ({ children, ...props }) => {
  console.log(props)
  return (
    <components.IndicatorsContainer {...props}>
      <components.DropdownIndicator {...props}>
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          class="css-tj5bde-Svg"
        >
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
      </components.DropdownIndicator>

      <components.IndicatorSeparator {...props}>
        {React.Children.map(children, (child) =>
          child && child.type !== components.Placeholder ? child : null
        )}
      </components.IndicatorSeparator>
    </components.IndicatorsContainer>
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
      transition: '0.4s',
      translate: `${
        state.hasValue || state.selectProps.inputValue
          ? '-25px 14px'
          : '-3px 7px'
      } `,
      fontSize: 14,
      scale: state.hasValue || state.selectProps.inputValue ? '0.87' : '1',
      padding: `0 ${
        state.hasValue || state.selectProps.inputValue ? '15px' : '23px'
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

  container: (provided, state) => ({
    ...provided,
    flex: 1,
    border: 'none',
    height: '100%',
  }),

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

  MenuPortal: (base) => ({
    ...base,
    zIndex: 999,
  }),

  dropdownIndicator: (base, { selectProps }) => ({
    ...base,
    transition: 'all .2s ease',
    transform: selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
}

const CustomSelectDouble = ({
  name,
  label,
  control,
  icon,
  child1,
  child2,
  options = [[]],
}) => {
  const option1 = options[0] || []
  const option2 = options[1] || []
  return (
    <div className="inputbox d-flex ">
      <Controller
        name={`${name}.${child1}`}
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <Select
              icon={icon}
              value={option1.filter((n) => n.value === value.value)}
              onChange={(v) => onChange(v)}
              classNamePrefix={child1}
              options={option1}
              menuPosition="fixed"
              placeholder={label}
              menuPortalTarget={document.body}
              components={{
                Control,
                ValueContainer: CustomValueContainer,
                IndicatorsContainer: CustomIndicatorContainer,
              }}
              styles={{
                ...styleConfig,
                control: (provided) => ({
                  ...provided,
                  border: 'none',
                  borderRadius: 0,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  minHeight: 58,
                  boxShadow: 'none',
                  '@media only screen and (max-width: 460px)': {
                    minHeight: 48,
                  },
                }),
              }}
            />
          )
        }}
      />
      <Controller
        name={`${name}.${child2}`}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { value, onChange } }) => {
          return (
            <Select
              value={option2.filter((c) => c.value === value.value)}
              onChange={(v) => {
                onChange(v)
              }}
              classNamePrefix={child2}
              options={option2}
              menuPortalTarget={document.body}
              menuPosition="fixed"
              components={{
                Control,
                ValueContainer: CustomValueContainer,
                IndicatorSeparator: false,
              }}
              styles={{
                ...styleConfig,
                placeholder(base) {
                  return {
                    ...base,
                    display: 'none',
                  }
                },
                container: (provided) => ({ ...provided, width: '30%' }),
                control: (provided, state) => {
                  return {
                    ...provided,
                    borderRadius: 0,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    border: 0,
                    boxShadow: 'none',
                    minHeight: 58,
                    '@media only screen and (max-width: 460px)': {
                      minHeight: 48,
                    },
                  }
                },
                valueContainer: (provided) => {
                  return {
                    ...provided,
                    padding: '12px 15px',
                  }
                },
              }}
            />
          )
        }}
      />
    </div>
  )
}

export default CustomSelectDouble
