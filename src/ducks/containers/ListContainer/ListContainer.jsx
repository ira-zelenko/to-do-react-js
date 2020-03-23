import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ListHeader from '../../components/ListHeader'
import ListItem from '../../components/ListItem'
import styles from './ListContainer.pcss'

const ListContainer = (props) => {
  const { items } = props

  return (
   <div className={styles.container}>
     <ListHeader />
    <div className={styles.listWrap}>
      {items.map((item) => (
        <ListItem />
      ))}
    </div>
   </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.list.items,
  }
}

ListContainer.propTypes = {
  children: PropTypes.node,
}

export default connect(mapStateToProps)(ListContainer)