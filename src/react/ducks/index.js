import { API_REQUEST } from '../middleware/api'
import { FILTER_ALL_ITEMS } from '../../data/filers'

export const LOAD_LIST_FETCHING = 'LOAD_LIST_FETCHING'
export const LOAD_LIST_SUCCESS = 'LOAD_LIST_SUCCESS'
export const LOAD_LIST_FAIL = 'LOAD_LIST_FAIL'

export function loadListData() {
  return {
    type: 'LOAD_LIST',
    [API_REQUEST]: {
      types: [ LOAD_LIST_FETCHING, LOAD_LIST_SUCCESS, LOAD_LIST_FAIL ],
      url: 'http://localhost:8080/get',
    },
  }
}

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

export const DELETE_ITEM = 'DELETE_ITEM'
export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
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

export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST'
export function addItemToList(item) {
  return {
    type: ADD_ITEM_TO_LIST,
    item,
  }
}

export const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER'
export function setActiveFilter(filter) {
  return {
    type: SET_ACTIVE_FILTER,
    filter,
  }
}

const defaultState = {
  items: [],
  activeFilter: FILTER_ALL_ITEMS,
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_CLOSED_STATUS:
      return {
        ...state,
        items: updateItemStatus(state.items, action.id, 'closed'),
      }
    case MARK_DELETED_ITEM:
      return {
        ...state,
        items: updateItemStatus(state.items, action.id, 'deleted'),
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      }
    case EDIT_ITEM_LABEL:
      return {
        ...state,
        items: updateItemLabel(state.items, action.id, action.label),
      }
    case ADD_ITEM_TO_LIST:
      return {
        ...state,
        items: [action.item, ...state.items],
      }
    case SET_ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.filter,
      }
    case LOAD_LIST_FETCHING: {
      return {
        ...state,
      }
    }
    case LOAD_LIST_SUCCESS: {
      return {
        ...state,
        items: action.data,
      }
    }
    case LOAD_LIST_FAIL: {
      return {
        ...state,
      }
    }
    case 'LOAD_LIST': {
      return {
        ...state,
      }
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

function updateItemLabel(items, id, label) {
  return items.map(item => {
    if (item.id === id) {
      item.text = label
    }
    return item
  })
}