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
    <label className={styles.element}>
      <div className={styles.checkbox}>
        <input
          className={styles.eventInput}
          name={name.toString()}
          type={'checkbox'}
          checked={checked}
          onChange={toggleValue}
        />
        <div
          className={cn(styles.control, {
            [styles.checked]: checked,
          })}
        />
        <span>{label}</span>
      </div>
    </label>
  )
}

Checkbox.propTypes ={
  name: PropTypes.number,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange:PropTypes.func,
}

export default Checkbox