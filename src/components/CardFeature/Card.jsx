import React from 'react'
import { ForwardArrowWhiteIcon } from '../../assets'

const Card = ({ title, icon, background = false, className = '' }) => {
  return (
    <div className={className}>
      <div
        className={`p-3 text-white rounded-4 p-4 position-relative ${
          background ? 'card-bg' : ''
        }`}
        style={{
          height: '200px',
        }}
      >
        <div className="card-text">{title}</div>
        <div className="pt-1 view-more">
          view more
          <span>
            <img src={ForwardArrowWhiteIcon} alt="forward-arrow" width="20" />
          </span>
        </div>

        <img
          src={icon}
          className="position-absolute bottom-0 end-0 rounded-bottom-4"
          alt=""
        />
      </div>
    </div>
  )
}

export default Card
