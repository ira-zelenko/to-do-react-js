import React, { useCallback, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleClosedStatus, markDeletedItem, editItemLabel  } from '../../../ducks/index'
import ListHeader from '../../components/ListHeader'
import ListItem from '../../components/ListItem'
import InputField from '../../../components/InputField'
import styles from './ListContainer.pcss'

const ListContainer = (props) => {
  const { items, toggleClosedStatus, markDeletedItem, editItemLabel } = props
  const container = useRef(null)

  const changeCloseStatus = useCallback((id) => {
    toggleClosedStatus(id)
  }, [items])

  return (
   <div className={styles.container} ref={container}>
     <ListHeader />
     <div className={styles.inputWrap}>
       <InputField
         tall={true}
         withInsideButton={true}
         buttonText={'ADD'}
       />
     </div>
      <div className={styles.listWrap}>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem
              text={item.text}
              deleted={item.deleted}
              closed={item.closed}
              id={item.id}
              changeCloseStatus={changeCloseStatus}
              markDeletedItem={markDeletedItem}
              editItemLabel={editItemLabel}
              refVal={item.id}
              index={index}
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