import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Checkbox.pcss'

const Checkbox = (props) => {
  const { name, label, checked, onChange } = props

  const toggleValue = useCallback(() => {
    onChange(name)
  }, [])

  return (
    <div className={styles.element}>
      <input
        className={cn(styles.checkbox, {
          [styles.checked]: checked,
        })}
        name={name.toString()}
        type={'checkbox'}
        checked={checked}
        onChange={toggleValue}
      />
      <div className={styles.label}>
        {label}

        <div className={cn(styles.crossOutLine, {
          [styles.visible]: checked,
        })}/>
      </div>
    </div>
  )
}

Checkbox.propTypes ={
  name: PropTypes.number,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange:PropTypes.func,
}

export default Checkbox