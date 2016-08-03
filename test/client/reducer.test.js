/* global describe */
/* global it */
/* global sinon */

import chai from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import 'babel-polyfill' // For testing any es6 functions

const expect = chai.expect

import * as actions from '../../src/client/actions'
import reducer from '../../src/client/reducer'

describe('reducer', () => {
  describe('loadCatsRequest', () => {
    it('should return object with isWorking set as true', () => {
      let initialState = {}
      let action = actions.loadCatsRequest()
      let updatedState = reducer(initialState, action)

      expect(updatedState.isWorking).to.be.true
    })
  })

  describe('loadCatsSuccess', () => {
    it('should return object with isWorking set as false and cats as cats', () => {
      let initialState = {}
      let cats = [
        { id: 1, description: 'foo' },
        { id: 2, description: 'bar' }
      ]
      let action = actions.loadCatsSuccess(cats)
      let updatedState = reducer(initialState, action)

      expect(updatedState.isWorking).to.be.false
      expect(updatedState.cats.length).to.equal(2)
      expect(updatedState.cats).to.eql(cats)
      expect(updatedState.error).to.be.undefined
    })
  })

  describe('loadCatsFailure', () => {
    it('should return object with isWorking set as false and error as error', () => {
      let initialState = {}
      let error = 'We could not reach the API at this time'
      let action = actions.loadCatsFailure(error)
      let updatedState = reducer(initialState, action)

      expect(updatedState.isWorking).to.be.false
      expect(updatedState.error).to.equal(error)
      expect(updatedState.cats).to.be.undefined
    })
  })
})