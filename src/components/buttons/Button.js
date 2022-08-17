import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
export const Button = (props) => {
  const { label, onClick } = props
  return (
    <div className={'wrapper-btn'}>
      <button
        onClick={onClick}
      >{label}
      </button>
    </div>
  )
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Button
