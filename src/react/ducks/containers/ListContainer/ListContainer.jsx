import React, { useCallback, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  toggleClosedStatus,
  markDeletedItem,
  editItemLabel,
  addItemToList,
  deleteItem,
  setActiveFilter,
  loadListData,
} from '../../index'
import { FILTER_ALL_ITEMS, FILTER_ACTIVE, FILTER_COMPLETED } from '../../../../data/filers'
import ListHeader from '../../components/ListHeader'
import ListItem from '../../components/ListItem'
import InputField from '../../../components/InputField'
import FiltersPanel from '../../components/FiltersPanel'
import styles from './ListContainer.pcss'

const ListContainer = (props) => {
  const { items, activeFilter, toggleClosedStatus, markDeletedItem, editItemLabel, addItemToList, deleteItem, setActiveFilter, loadListData } = props
  const [ inputValue, setInputValue ] = useState('')
  const [ filteredItems, setFilteredItems ] = useState(items)
  const [ activeItemsCount , setActiveItemsCount ] = useState(0)

  const MAX_STRING_LENGTH = 80

  useEffect(() => {
    loadListData()
  }, [])

  useEffect(() => {
    filterListItems(activeFilter)
    recountActiveItems()
    if (!items.length) {
      setActiveFilter(FILTER_ALL_ITEMS)
    }
  }, [ items, activeItemsCount ])

  const changeCloseStatus = useCallback((id) => {
    toggleClosedStatus(id)
  }, [items])

  const onInputChange = useCallback((event) => {
    const newLabel = String(event.target.value)
    setInputValue(newLabel)
  }, [ inputValue ])

  const onInputKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      addItemList()
    }
  }, [inputValue])

  const addItemList = useCallback(() => {
    if (!inputValue) {
      return
    }

    const newItem = {
      id: Number((Math.random() * 100).toFixed(0)),
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

  const filterListItems = useCallback((filter) => {
    setActiveFilter(filter)
    const items = filterList(filter)
    setFilteredItems(items)
  }, [ items, activeFilter ])

  function filterList(filter) {
    switch (filter) {
      case FILTER_ALL_ITEMS:
        return items

      case FILTER_ACTIVE:
        return items.filter(item => item.closed === false)

      case FILTER_COMPLETED:
        return items.filter(item => item.closed === true)

      default:
        return items
    }
  }

  function recountActiveItems() {
    setActiveItemsCount(0)
    items.map(item => {
      if (!item.closed) {
        setActiveItemsCount(activeItemsCount => activeItemsCount + 1)
      }
    })
  }

  return (
    <div className={styles.container}>
      <ListHeader
        headerValue={'ToDo List'}
      >
        <FiltersPanel
          activeFilter={activeFilter}
          items={[
            {
              label: 'All',
              value: FILTER_ALL_ITEMS,
              disabled: items.length === 0,
            }, {
              label: 'Active',
              value: FILTER_ACTIVE,
              disabled: activeItemsCount === 0,
            }, {
              label: 'Completed',
              value: FILTER_COMPLETED,
              disabled: items.length - activeItemsCount === 0,
            },
          ]}
          onClick={filterListItems}
          inactive={!items.length}
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
          maxLength={MAX_STRING_LENGTH}
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
              deleteItem={deleteItem}
              editItemLabel={editItemLabel}
              refVal={item.id}
              index={index}
              maxLabelLength={MAX_STRING_LENGTH}
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
    activeFilter: state.list.activeFilter,
  }
}

const mapDispatchToProps = {
  toggleClosedStatus,
  markDeletedItem,
  editItemLabel,
  addItemToList,
  deleteItem,
  setActiveFilter,
  loadListData,
}

ListContainer.propTypes = {
  items: PropTypes.array,
  toggleClosedStatus: PropTypes.func,
  markDeletedItem: PropTypes.func,
  editItemLabel: PropTypes.func,
  addItemToList: PropTypes.func,
  deleteItem: PropTypes.func,
  setActiveFilter: PropTypes.func,
  activeFilter: PropTypes.string,
  loadListData: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)