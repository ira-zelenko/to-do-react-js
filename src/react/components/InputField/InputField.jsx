import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './InputField.pcss'

const InputField = (props) => {

  const { value, onChange, onKeyPress, tall, withInsideButton, buttonText, placeHolderText, onClick, maxLength } = props

  return (
    <div className={styles.element}>
      <input
        className={cn(styles.input, {
          [styles.tall]: tall,
        })}
        type="text"
        placeholder={placeHolderText}
        autoFocus={true}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        maxLength={maxLength}
      />
      {withInsideButton &&
      <div
        className={cn(styles.button, {
          [styles.disable]: !value,
        })}
        onClick={onClick}
      >
        {buttonText}
      </div>
      }

    </div>
  )
}

InputField.propTypes = {
  value: PropTypes.string,
  placeHolderText: PropTypes.string,
  onChange:PropTypes.func,
  onClick:PropTypes.func,
  onKeyPress: PropTypes.func,
  isTopAngled: PropTypes.bool,
  withInsideButton: PropTypes.bool,
  maxLength: PropTypes.number,
  tall: PropTypes.bool,
  buttonText: PropTypes.string,
}

export default InputField