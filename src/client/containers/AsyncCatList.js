import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ResponseInfo from '../components/ResponseInfo'
import CatList from '../components/CatList'

import { removeCat, loadCats, toggleOrderByLength } from '../actions'

class AsyncCatList extends Component {
  render() {
    let { 
      isWorking, 
      cats, 
      error,
      orderByLength,
      toggleOrderByLength,
      onRemoveClicked, 
      onReloadClicked 
    } = this.props
    
    return <div>
      <ResponseInfo 
        isWorking={isWorking} 
        cats={cats} 
        error={error} 
        onReloadClicked={onReloadClicked} 
        orderByLength={orderByLength} 
        toggleOrderByLength={toggleOrderByLength}
      />
      <CatList isWorking={isWorking} cats={cats} onRemoveClicked={onRemoveClicked} orderByLength={orderByLength} />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    cats: state.cats,
    isWorking: state.isWorking,
    orderByLength: state.orderByLength
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveClicked: (cat) => {
      dispatch(removeCat(cat))
    },
    onReloadClicked: () => dispatch(loadCats()),
    toggleOrderByLength: () => dispatch(toggleOrderByLength())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncCatList)


