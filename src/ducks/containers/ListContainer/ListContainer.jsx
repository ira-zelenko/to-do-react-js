import React, { useCallback, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleClosedStatus, markDeletedItem, editItemLabel, addItemToList, deletedItem } from '../../../ducks/index'
import ListHeader from '../../components/ListHeader'
import ListItem from '../../components/ListItem'
import InputField from '../../../components/InputField'
import FiltersPanel from '../../components/FiltersPanel'
import styles from './ListContainer.pcss'

const ListContainer = (props) => {
  const { items, toggleClosedStatus, markDeletedItem, editItemLabel, addItemToList, deletedItem } = props
  const [ inputValue, setInputValue ] = useState('')
  const [ filteredItems, setFilteredItems ] = useState(items)
  const [ filter, setFilter] = useState(null)

  useEffect(() => {
    setFilteredItems(items)
    filterListItems(filter)
  }, [ items ])

  const changeCloseStatus = useCallback((id) => {
    toggleClosedStatus(id)
  }, [items])

  const addItemList = useCallback(() => {
    const newItem = {
      id: items.length + 1,
      text: inputValue,
      closed: false,
      deleted: false,
    }
    addItemToList(newItem)
    setInputValue('')
  }, [
    inputValue,
    items,
  ])

  const onInputChange = useCallback((event) => {
    const newLabel = String(event.target.value)
    setInputValue(newLabel)
  }, [ inputValue ])

  const onInputKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      addItemList()
    }
  }, [inputValue])

  const filterList = useCallback((filter) => {
      switch (filter) {
        case 'all':
          return items
        case 'active':
          return items.filter(item => item.closed === false)
        case 'completed':
          return items.filter(item => item.closed === true)
        default:
          return items
      }
  }, [ items ])

  const filterListItems = useCallback((filter) => {
    setFilter(filter)
    const items = filterList(filter)
    setFilteredItems(items)
  }, [ items ])

  return (
   <div className={styles.container}>
     <ListHeader
       headerValue={'ToDo List'}
     >
       <FiltersPanel
         items={[
           {
             label: 'All',
             value: 'all',
             disabled: false,
           },
           {
             label: 'Active',
             value: 'active',
             disabled: false,
           },
           {
             label: 'Completed',
             value: 'completed',
             disabled: false,
           },
         ]}
         onClick={filterListItems}
       />
     </ListHeader>
     <div className={styles.inputWrap}>
       <InputField
         value={inputValue}
         tall={true}
         withInsideButton={true}
         buttonText={'ADD'}
         placeHolderText={'Add task'}
         onChange={onInputChange}
         onKeyPress={onInputKeyPress}
         onClick={addItemList}
       />
     </div>
      <div className={styles.listWrap}>
        {filteredItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem
              text={item.text}
              deleted={item.deleted}
              closed={item.closed}
              id={item.id}
              changeCloseStatus={changeCloseStatus}
              markDeletedItem={markDeletedItem}
              deletedItem={deletedItem}
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
  editItemLabel,
  addItemToList,
  deletedItem,
}

ListContainer.propTypes = {
  items: PropTypes.array,
  toggleClosedStatus: PropTypes.func,
  markDeletedItem: PropTypes.func,
  editItemLabel: PropTypes.func,
  addItemToList: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)