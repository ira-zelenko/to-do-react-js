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
      {/*<div*/}
      {/*  className={cn(styles.control, {*/}
      {/*    [styles.checked]: checked,*/}
      {/*  })}*/}
      {/*/>*/}
      <label className={styles.label}>{label}</label>
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