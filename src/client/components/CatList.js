import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import './CatList.styl'
import CatItem from './CatItem'
import Loader from './Loader'

export default class CatList extends Component {
  static propTypes = {
    isWorking: PropTypes.bool.isRequired,
    cats: PropTypes.array.isRequired,
    onRemoveClicked: PropTypes.func.isRequired,
    orderByLength: PropTypes.bool.isRequired
  }

  render() {
    // Default content if no results are present
    let contents = <div className='CatList-empty'>
      <p>No cats found!</p>
    </div>

    if (this.props.isWorking) {
      // If we still loading the results then display our 
      // loading animation
      contents = <Loader />
    } else if (this.props.cats.length > 0) {
      let cats = this.props.cats

      if (this.props.orderByLength) {
        cats = _.sortBy(cats, cat => cat.description.length).reverse()
      }

      // Map each cat object to a CatItem component
      contents = <ul className='CatList-container'>
        {cats.map((cat, id) => <li key={id}><CatItem {...cat} onRemoveClicked={this.props.onRemoveClicked} /></li>)}
      </ul>
    }
    

    return <div className='CatList-container'>
      {contents}
    </div>
  }
}