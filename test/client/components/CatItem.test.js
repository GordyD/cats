/* global describe */
/* global it */
/* global sinon */

import chai from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import 'babel-polyfill' // For testing any es6 functions

const expect = chai.expect

import CatItem from '../../../src/client/components/CatItem'

describe('CatItem', () => {
  it('should be exposed as a module and be of type function', () => {
    expect(CatItem).to.be.a('function')
  })

  describe('render', () => {
    var sampleCat = {
      id: '456',
      description: 'This is a cat!',
      imageUrl: 'http://30.media.tumblr.com/tumblr_luka7aw7d31r4xjo2o1_r1_1280.jpg',
      url: 'http://thecatapi.com/?id=56',
      onRemoveClicked: sinon.stub()
    }

    it('should render all the cat information', () => {
      var elem = shallow(<CatItem {...sampleCat} />)

      expect(elem).to.be.ok

      let description = elem.find('.CatItem-description')

      expect(description).to.have.length(1)
      expect(description.text()).to.equal('This is a cat!')

      expect(elem.find('.CatItem-image')).to.have.length(1)
      expect(elem.find('.CatItem-link')).to.have.length(1)
      expect(elem.find('.CatItem-remove')).to.have.length(1)
    })

    it('should trigger onRemoveClicked when the remove button is clicked', () => {
      var elem = shallow(<CatItem {...sampleCat} />)

      expect(sampleCat.onRemoveClicked.callCount).to.equal(0)
      elem.find('.CatItem-remove').simulate('click')
      expect(sampleCat.onRemoveClicked.callCount).to.equal(1)
    })
  })
})