import React, { Fragment, useCallback, useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Checkbox from '../../../components/Checkbox'
import DeleteSvg from './icons/delete.svg'
import EditSvg from './icons/pencil.svg'
import SaveSvg from './icons/save.svg'
import styles from './ListItem.pcss'

const ListItem = (props) => {
  const { text, deleted, closed, id, changeCloseStatus, markDeletedItem, editItemLabel, index } = props
  const [ isInputOpen, openInput ] = useState(false)
  const [ inputValue, setInputValue ] = useState(text)
  const [ editedElement, setEditedElement ] = useState(null)

  const listItem = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  })

  const handleClick = (event) => {
    if (editedElement) {
      if (!event.path.includes(editedElement)  ) {
        toggleLabelInput(false)
        setEditedElement(null)
      }
    }
  }

  const markDeleted = useCallback(() => {
    markDeletedItem(id)
  }, [])

  const toggleLabelInput = useCallback((isOpened) => {
    openInput(isOpened)
    if (isInputOpen) {
      editItemLabel(id, inputValue)
    }
  }, [
    isInputOpen,
    inputValue,
  ])

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
      ref={listItem}
      onDoubleClick={(event) => {
        toggleLabelInput(true)
        setEditedElement(event.target)
      }}

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
            <div>
              <EditSvg
                className={styles.icon}
                onClick={(event) => {
                  toggleLabelInput(true)
                  setEditedElement(ReactDOM.findDOMNode(listItem.current))
                }}
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
           <SaveSvg
             className={styles.icon}
             onClick={() => toggleLabelInput(false)}
           />
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