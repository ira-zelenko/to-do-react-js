import React, { Fragment, useCallback, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Checkbox from '../../../components/Checkbox'
import InputField from '../../../components/InputField'
import DeleteSvg from './icons/delete.svg'
import EditSvg from './icons/pencil.svg'
import SaveSvg from './icons/save.svg'
import styles from './ListItem.pcss'

const ListItem = (props) => {
  const { text, deleted, closed, id, changeCloseStatus, markDeletedItem, editItemLabel, index } = props
  const [ isInputOpen, openInput ] = useState(false)
  const [ inputValue, setInputValue ] = useState(text)

  const listItem = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  })

  const handleClick = (event) => {
    if (!event.path.includes(listItem.current)  ) {
      toggleLabelInput(false)
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
    <div className={cn(styles.wrap, {
      [styles.deleted]: deleted,
    })}>
      <div
        className={cn(styles.element, {
          [styles.closed]: closed,
          [styles.deleted]: deleted,
        })}
        ref={listItem}
        onDoubleClick={(event) => {
          toggleLabelInput(true)
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
                onClick={() => {
                  toggleLabelInput(true)
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
            <div className={styles.inputWrap}>
              <InputField
                placeHolderText={'Add task'}
                value={inputValue}
                onChange={onInputChange}
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