import React from 'react'
import ListContainer from '../src/ducks/containers/ListContainer/ListContainer'
import ListHeader from './ducks/components/ListHeader'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <ListContainer />
        <ListHeader />
      </div>
    );
  }
}

export default App;
