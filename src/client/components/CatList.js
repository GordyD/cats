import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import './CatList.styl'
import CatItem from './CatItem'
import Loader from './Loader'

export default class CatList extends Component {
  static propTypes = {
    cats: PropTypes.array.isRequired,
    orderBy: PropTypes.string
  }

  constructor(props) {
    super(props)

    // We'll default to using stars as the metric that we order by
    // and we'll also default to ordering by highest first
    this.state = {
      orderBy: props.orderBy || 'stargazers_count',
      desc: (typeof props.desc !== 'undefined') ? props.desc : true
    }
  }

  render() {
    // Default content if no results are present
    let contents = <div className='CatList-empty'>
      <p>No results yet!</p>
    </div>

    if (this.props.isLookingUp) {
      // If we still loading the results then display our 
      // loading animation
      contents = <Loader />
    } else if (this.props.cats.length > 0) {

      // Map each cat object to a CatItem component
      contents = <ul className='CatList-container'>
        {this.props.cats.map((cat, id) => <li key={id}><CatItem {...cat} /></li>)}
      </ul>
    }
    

    return <div className='CatList-container'>
      {contents}
    </div>
  }
}