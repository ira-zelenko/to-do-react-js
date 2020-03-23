import itemsList from '../data/list-items-storage.json'


const defaultState = {
  items: itemsList,
}

export default function reducer(state = defaultState, action) {
  return state
}