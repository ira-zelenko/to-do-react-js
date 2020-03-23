import React from 'react'
import ListContainer from '../src/ducks/containers/ListContainer/ListContainer'
import ListHeader from './ducks/components/ListHeader'

const App = () => {
  return (
    <div>
      <ListContainer>
        <ListHeader />
      </ListContainer>
    </div>
  )
}

export default App
