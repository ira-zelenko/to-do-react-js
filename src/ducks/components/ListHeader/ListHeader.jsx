import React, { Component } from 'react'
import styles from './ListHeader.pcss'

export default class ListHeader extends Component {
  render() {
    return (
      <div className={styles.container}>
        {'ToDo List'}
      </div>
    )
  }
}
