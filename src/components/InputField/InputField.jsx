import React from 'react'
import PropTypes from 'prop-types'
import styles from './InputField.pcss'

const InputField = (props) => {

  const {value, onChange, onKeyPress } = props

  return (
    <input
      className={styles.input}
      type="text"
      autoFocus={true}
      value={value}
      onChange={(event) => onChange(event)}
      onKeyPress={onKeyPress}
    />
  )
}

InputField.propTypes = {
  value: PropTypes.string,
  onChange:PropTypes.func,
  onKeyPress: PropTypes.func,
}

export default InputField