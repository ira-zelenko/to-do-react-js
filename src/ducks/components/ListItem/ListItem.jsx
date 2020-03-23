import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './ListItem.pcss'

const ListItem = (props) => {
  const { text, isDeleted, isClosed } = props

  return (
    <div className={cn(styles.element, {
      [styles.closed]: isClosed,
      [styles.deleted]: isDeleted,
    })}>
      <div className={cn(styles.mark, {
        [styles.closed]: isClosed,
        [styles.deleted]: isDeleted,
      })} />
      <div className={styles.content}>
        <div>
          <div className={styles.checkbox}></div>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.controls}>

        </div>
      </div>
    </div>
  )
}

ListItem.propTypes = {
  text: PropTypes.string,
  isDeleted: PropTypes.bool,
  isClosed: PropTypes.bool,
}

export default ListItem