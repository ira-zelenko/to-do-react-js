import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleClosedStatus, markDeletedItem, editItemLabel  } from '../../../ducks/index'
import ListHeader from '../../components/ListHeader'
import ListItem from '../../components/ListItem'
import styles from './ListContainer.pcss'

const ListContainer = (props) => {
  const { items, toggleClosedStatus, markDeletedItem, editItemLabel } = props

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
            markDeletedItem={markDeletedItem}
            editItemLabel={editItemLabel}
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
  markDeletedItem,
  editItemLabel
}

ListContainer.propTypes = {
  items: PropTypes.array,
  toggleClosedStatus: PropTypes.func,
  markDeletedItem: PropTypes.func,
  editItemLabel: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)