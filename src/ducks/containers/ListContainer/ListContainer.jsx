import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleClosedStatus } from '../../../ducks/index'
import ListHeader from '../../components/ListHeader'
import ListItem from '../../components/ListItem'
import styles from './ListContainer.pcss'

const ListContainer = (props) => {
  const { items, toggleClosedStatus } = props

  const changeCloseStatus = useCallback((id) => {
    toggleClosedStatus(id)
  }, [items])

  return (
   <div className={styles.container}>
     <ListHeader />
    <div className={styles.listWrap}>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <ListItem
            text={item.text}
            deleted={item.deleted}
            closed={item.closed}
            id={item.id}
            changeCloseStatus={changeCloseStatus}
          />
        </React.Fragment>
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

const mapDispatchToProps = {
  toggleClosedStatus,
}

ListContainer.propTypes = {
  items: PropTypes.array,
  toggleClosedStatus: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)