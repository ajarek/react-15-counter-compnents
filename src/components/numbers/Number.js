import React from 'react'
import PropTypes from 'prop-types'
import './Number.css'

export const Number = (props) => {
  const { numberProp } = props
  return (
    <div className={'wrapper-nr'}>
      <h1>{numberProp}</h1>

    </div>
  )
}

Number.propTypes = {
  numberProp: PropTypes.number
}
export default Number
