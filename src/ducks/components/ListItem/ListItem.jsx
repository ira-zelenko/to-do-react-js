import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Checkbox from '../../../components/Checkbox'
import styles from './ListItem.pcss'

const ListItem = (props) => {
  const { text, deleted, closed, id, changeCloseStatus } = props

  return (
    <div className={cn(styles.element, {
      [styles.closed]: closed,
      [styles.deleted]: deleted,
    })}>
      <div className={cn(styles.mark, {
        [styles.closed]: closed,
        [styles.deleted]: deleted,
      })} />
      <div className={styles.content}>
        <div>
          <Checkbox
            name={id}
            label={text}
            checked={closed}
            onChange={changeCloseStatus}
          />
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
  id: PropTypes.number,
  changeCloseStatus: PropTypes.func,
}

export default ListItem