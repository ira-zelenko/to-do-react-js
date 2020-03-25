import itemsList from '../data/list-items-storage.json'

export const TOGGLE_CLOSED_STATUS = 'TOGGLE_CLOSED_STATUS'
export function toggleClosedStatus(id) {
  return {
    type: TOGGLE_CLOSED_STATUS,
    id,
  }
}

export const MARK_DELETED_ITEM = 'MARK_DELETED_ITEM'
export function markDeletedItem(id) {
  return {
    type: MARK_DELETED_ITEM,
    id,
  }
}

export const EDIT_ITEM_LABEL = 'EDIT_ITEM_LABEL'
export function editItemLabel(id, label) {
  return {
    type: EDIT_ITEM_LABEL,
    id,
    label,
  }
}

const defaultState = {
  items: itemsList || [],
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_CLOSED_STATUS:
      return {
        ...state,
        items: updateItemStatus(state.items, action.id, 'closed')
      }
    case MARK_DELETED_ITEM:
      return {
        ...state,
        items: updateItemStatus(state.items, action.id, 'deleted')
      }
    case EDIT_ITEM_LABEL:
      return  {
        ...state,
        items: updateItemLabel(state.items, action.id, action.label, 'text')
      }

    default:
      return state
  }
}

function updateItemStatus(items, id, field) {
  return items.map(item => {
    if (item.id === id) {
      item[field] = !item[field]
    }
    return item
  })
}

function updateItemLabel(items, id, label, field) {
  return items.map(item => {
    if (item.id === id) {
      item[field] = label
    }
    return item
  })
}