import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { loadCats } from '../actions'
import CatList from './AsyncCatList'

import './App.styl'

class App extends Component {
  componentDidMount() {
    let { dispatch } = this.props

    dispatch(loadCats())
  }

  render() {
    return <div className='App-container'>
      <div className='App-header'>
        <h2>Cat Facts</h2>
      </div>
      <div className='App-body'>
        <CatList/>
      </div>
    </div>
  }
}

export default connect()(App)