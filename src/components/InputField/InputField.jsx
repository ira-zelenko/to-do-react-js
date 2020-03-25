import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './InputField.pcss'

const InputField = (props) => {

  const {value, onChange, onKeyPress, tall, withInsideButton, buttonText } = props

  console.log(withInsideButton)
  return (
   <div className={styles.element}>
     <input
       className={cn(styles.input, {
         [styles.tall]: tall,
       })}
       type="text"
       autoFocus={true}
       value={value}
       onChange={(event) => onChange(event)}
       onKeyPress={onKeyPress}
     />
     {withInsideButton &&
      <div className={styles.button}>{buttonText}</div>
     }

   </div>
  )
}

InputField.propTypes = {
  value: PropTypes.string,
  onChange:PropTypes.func,
  onKeyPress: PropTypes.func,
  isTopAngled: PropTypes.bool,
  withInsideButton: PropTypes.bool,
}

export default InputField