import React, { PropTypes } from 'react'
import moment from 'moment'

import './CatItem.styl'

/**
 * This is a stateless functional component. Because we do not need
 * to store any internal state in this component we can just create
 * a component that renders based on what it is passed as props.
 */
const CatItem = (props) => <div className='CatItem-container'>
  <a className='CatItem-link' href={props.url} target='_blank'><img className='CatItem-image' src={props.imageUrl} alt={` Cat ${props.id}`} /></a>
  <p className='CatItem-description'>{props.description || <span className='NoDescription'>No Description</span>}</p>
  <button className='CatItem-remove' onClick={() => props.onRemoveClicked(props)}>Remove</button>
</div>

/**
 * This is for prop type validation
 */
CatItem.propTypes = {
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onRemoveClicked: PropTypes.func.isRequired
}

export default CatItem

