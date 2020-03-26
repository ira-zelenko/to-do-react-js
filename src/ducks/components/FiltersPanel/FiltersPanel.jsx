import React from 'react'
import PropTypes from 'prop-types'
import styles from './FiltersPanel.pcss'

const FiltersPanel = (props) => {

  const { items, onClick } = props

  return (
    <div className={styles.wrap}>
      {items.map(item => (
        <div
          key={item.value}
          className={styles.filter}
          onClick={onClick}
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
}

export default FiltersPanel

