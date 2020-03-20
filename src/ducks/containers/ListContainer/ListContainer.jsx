import React, { Component } from 'react'
import { connect } from 'react-redux'


class ListContainer extends Component {
  render() {
    return (
     <div>
       {'ListContainer'}
     </div>
    )
  }
}

export default connect()(ListContainer)