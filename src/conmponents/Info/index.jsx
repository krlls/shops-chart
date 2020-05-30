/* eslint-disable react/prop-types */
import React from 'react'

import './styles.scss'

import icon from '../../svg/icon.svg'

const Info = (props) => {
  const { data } = props
  const { value } = data[data.length - 1]
  const duration = value - data[data.length - 2].value

  const renderValue = (amount) => `${amount.toLocaleString()} €`

  const renderDuration = (amount) => {
    if (amount > 0) {
      return `+ ${amount.toLocaleString()} €`
    }
    if (amount < 0) {
      return `${amount.toLocaleString()} €`
    }
    return ''
  }

  return (
    <div className="info">
      <div className="info--test">
        <div>
          <div className="info--title">
            Revenue
          </div>
          <div className="info--cost-wrapper">
            <span className="info--cost">
              {renderValue(value)}
            </span>
            <span className="info--cost--duration ">
              {renderDuration(duration)}
            </span>
          </div>
        </div>
        <div>
          <div className="info--left-label--wrapper">
            <div className="info--left-label">
              Build custom report
            </div>
            <div>
              <img src={icon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
