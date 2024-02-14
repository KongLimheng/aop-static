import React from 'react'

const CustomSwitch = ({ register }) => {
  return (
    <label className="switch">
      <input type="checkbox" {...register} />
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
  )
}

export default CustomSwitch
