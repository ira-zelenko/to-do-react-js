import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './FiltersPanel.pcss'

const FiltersPanel = (props) => {

  const { items, onClick, inactive } = props
  const [ activeFilter, setActiveFilter ] = useState(null)

  const setFilter = useCallback((value) => {
    setActiveFilter(value)
    onClick(value)
  })

  return (
    <div className={styles.wrap}>
      {items.map(item => (
        <div
          key={item.value}
          className={cn(styles.filter, {
            [styles.disabled]: item.disabled,
            [styles.active]: activeFilter === item.value,
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
  getFilterValue: PropTypes.func,
  inactive: PropTypes.bool,
}

export default FiltersPanel

