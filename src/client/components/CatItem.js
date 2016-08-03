import React, { PropTypes } from 'react'
import moment from 'moment'

import './CatItem.styl'

/**
 * This is a stateless functional component. Because we do not need
 * to store any internal state in this component we can just create
 * a component that renders based on what it is passed as props.
 */
const CatItem = (props) => <div className='CatItem-container'>
  <a href={props.url} target='_blank'><img src={props.imageUrl} alt={` Cat ${props.id}`} /></a>
  <p>{props.description || <span className='NoDescription'>No Description</span>}</p>
</div>

/**
 * This is for prop type validation
 */
CatItem.propTypes = {
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default CatItem

