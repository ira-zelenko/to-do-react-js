import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListHeader.pcss'

const ListHeader = (props) => {
  const { headerValue, children } = props
  return (
    <div className={styles.container}>
      <div className={styles.header}>{headerValue}</div>
      <div className={styles.content}>{ children }</div>
    </div>
  )
}

ListHeader.propTypes = {
  headerValue: PropTypes.string,
  children: PropTypes.node,
}

export default ListHeader
