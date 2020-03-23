import itemsList from '../data/list-items-storage.json'

export const TOGGLE_CLOSED_STATUS = 'TOGGLE_CLOSED_STATUS'
export function toggleClosedStatus(id) {
  return {
    type: TOGGLE_CLOSED_STATUS,
    id,
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
        items: updateList(state.items, action.id)
      }

    default:
      return state
  }
}

function updateList(items, id) {
  const updated = items.filter(item => {
    if (item.id === id) {
      item.closed = !item.closed
    }
    return item
  })
  return updated
}