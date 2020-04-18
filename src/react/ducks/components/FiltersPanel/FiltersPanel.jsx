import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './FiltersPanel.pcss'

const FiltersPanel = (props) => {

  const { items, onClick, inactive, activeFilter } = props

  const setFilter = useCallback((value) => {
    onClick(value)
  })

  return (
    <div className={styles.wrap}>
      {items.map(item => (
        <div
          key={item.value}
          className={cn(styles.filter, {
            [styles.disabled]: item.disabled,
            [styles.active]: activeFilter === item.value && !inactive,
            [styles.inactive]: inactive,
          })}
          onClick={() => setFilter(item.value)}
        >
          {item.label}
        </div>
      ))}
    </div>
  )
}

FiltersPanel.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  inactive: PropTypes.bool,
  activeFilter: PropTypes.string,
}

export default FiltersPanel

