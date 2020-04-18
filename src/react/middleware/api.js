import { fetchData } from '../../lib/feth-data'

export const API_REQUEST = 'API_REQUEST'

export default store => next => action => {
  if (typeof action[API_REQUEST] === 'undefined') {
    return next(action)
  }

  const { url, types } = action[API_REQUEST]

  if (typeof url !== 'string') {
    throw new Error('URL must be a string')
  }

  const [ fetchType, successType, failType ] = types

  next({ type: fetchType })

  return (async () => {
    const response = await fetchData(url)
    const result = {
      type: (response && response.ok) ? successType : failType,
      data: response.json,
    }
    next(result)
  })()
}
