import React, { Component } from 'react'
import moment from 'moment'

import './App.styl'
import CatList from '../components/CatList'

import { getCats } from '../service/cats'

export default class App extends Component {
  constructor(props) {
    super(props)
    
    // We manage the state of the application in our root component.
    // We could use a state container, but in the interests of
    // simplicity and not over engineering this assignment I have opted
    // to just use component state
    this.state = {
      initialLookup: null,
      error: null,
      isLookingUp: false,
      requestInfo: null,
      cats: []
    }
  }

  componentDidMount() {
    this.doLookup()
  }

  /**
   * Our lookup function that calls getCats, which returns a promise
   * and then handles both success and failure by setting appropriate state
   * with the response
   */
  doLookup() {
    this.setState({ isLookingUp: true, cats: [], error: null })
    
    getCats()
    .then((cats) => {
      this.setState({isLookingUp: false, cats})
    })
    .catch((error) => {
      this.setState({isLookingUp: false, error: error.message})
    })
  }

  render() {
    let errorElem = null

    if (this.state.error) {
      errorElem = <span className='error'>{this.state.error}</span>
    }

    return <div className='App-container'>
      <div className='App-header'>
        <h2>Cat Facts</h2>
      </div>
      <div className='App-body'>
        {errorElem}
        <CatList 
          cats={this.state.cats} 
          isLookingUp={this.state.isLookingUp} 
        />
      </div>
    </div>
  }
}