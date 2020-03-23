import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './ListContainer.pcss'

const ListContainer = (props) => {
  const { children } = props
  return (
   <div className={styles.container}>
     {children}
   </div>
  )
}

ListContainer.propTypes = {
  children: PropTypes.node,
}

export default connect()(ListContainer)