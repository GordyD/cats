import React, { PropTypes } from 'react'
import moment from 'moment'
import cx from 'classnames'

import './ResponseInfo.styl'

/**
 * This is a stateless functional component. Because we do not need
 * to store any internal state in this component we can just create
 * a component that renders based on what it is passed as props.
 */
const ResponseInfo = (props) => {
  let responseElem = null
  let buttonClass = cx({disabled: props.isWorking})

  if (props.isWorking) {
    responseElem = <span>Loading...</span>
  } else  {
    if (props.error) {
      responseElem = <span className='error'>Error: {props.error}</span>
    } else {
      responseElem = <span className='success'>Success: {props.cats.length} in view</span>
    }
  }

  return <div className='ResponseInfo-container'>
    <div className='response'>{responseElem}</div>
    <button className={buttonClass} disabled={props.isWorking} onClick={() => props.onReloadClicked()}>
      Refresh
    </button>
    <label>Order by size of description</label>
    <input type='checkbox' name='orderByLength' checked={props.orderByLength} onChange={() => props.toggleOrderByLength()}/>
  </div>
}

/**
 * This is for prop type validation
 */
ResponseInfo.propTypes = {
  onReloadClicked: PropTypes.func.isRequired,
  toggleOrderByLength: PropTypes.func.isRequired,
  isWorking: PropTypes.bool.isRequired,
  orderByLength: PropTypes.bool.isRequired,
  error: PropTypes.string,
  cats: PropTypes.array
}

export default ResponseInfo

