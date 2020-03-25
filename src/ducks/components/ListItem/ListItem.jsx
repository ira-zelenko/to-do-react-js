import React, { Fragment, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Checkbox from '../../../components/Checkbox'
import DeleteSvg from './icons/delete.svg'
import EditSvg from './icons/pencil.svg'
import SaveSvg from './icons/save.svg'
import styles from './ListItem.pcss'

const ListItem = (props) => {
  const { text, deleted, closed, id, changeCloseStatus, markDeletedItem, editItemLabel } = props
  const [ isInputOpen, openInput ] = useState(false)
  const [ inputValue, setInputValue ] = useState(text)

  const markDeleted = useCallback(() => {
    markDeletedItem(id)
  }, [])

  const toggleLabelInput = useCallback(() => {
    openInput(!isInputOpen)
    if (isInputOpen) {
      editItemLabel(id, inputValue)
    }
  }, [isInputOpen, inputValue])

  const onInputChange = useCallback((event) => {
    const newLabel = String(event.target.value)
    setInputValue(newLabel)

  })

  const onInputKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      openInput(false)
      onInputChange(event)
      editItemLabel(id, inputValue)
    }
  })

  return (
    <div
      className={cn(styles.element, {
        [styles.closed]: closed,
        [styles.deleted]: deleted,
      })}
       onDoubleClick={toggleLabelInput}
    >
      <div className={cn(styles.mark, {
        [styles.closed]: closed,
        [styles.deleted]: deleted,
      })} />
      <div className={styles.content}>
        {!isInputOpen &&
          <Fragment>
            <Checkbox
              name={id}
              label={text}
              checked={closed}
              onChange={changeCloseStatus}
            />
            <div className={styles.controls}>
              <EditSvg
                className={styles.icon}
                onClick={toggleLabelInput}
              />
              <DeleteSvg
                className={styles.icon}
                onClick={markDeleted}
              />
            </div>
          </Fragment>
        }
        {isInputOpen &&
         <Fragment>
           <div>
             <input
               className={styles.input}
               type="text"
               autoFocus={true}
               value={inputValue}
               onChange={(event) => onInputChange(event)}
               onKeyPress={onInputKeyPress}
             />
           </div>
           <div className={styles.controls}>
             <SaveSvg
               className={styles.icon}
               onClick={toggleLabelInput}
             />
           </div>
         </Fragment>
        }
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
  markDeleted: PropTypes.func,
  editItemLabel: PropTypes.func,
}

export default ListItem