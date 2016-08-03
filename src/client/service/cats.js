import Promise from 'bluebird'
import superagent from 'superagent'
import moment from 'moment'
import xml2js from 'xml2js'

const get = Promise.promisify(superagent.get)

const parseXML = Promise.promisify(xml2js.parseString)

const CATS_URL = 'http://mapd-cats.azurewebsites.net'

const retrieve = (url) => {
  return get(url)
  .then((response) => {
    if (response.type === 'application/json') {
      return response.body
    } else {
      return parseXML(response.text)
    }
  })
}

const retrieveCatImages = () => {
  return retrieve(`${CATS_URL}/catpics`)
  .then((response) => {
    return response.response.data[0].images[0].image // get the image array we are interested in
  })
}

const retrieveCatFacts = () => {
  return retrieve(`${CATS_URL}/catfacts`)
  .then((response) => {
    return response.facts
  })
}


/**
 * Get all of the organisations repos
 * 
 * @param  {String} organisation 
 * 
 * @return {Array}
 */
export const getCats = organisation => {
  return Promise.all([
    retrieveCatImages(),
    retrieveCatFacts()
  ])
  .then((responses) => {
    let [ images, facts ] = responses

    return images.map((image, id) => ({
      id: image.id[0],
      url: image.source_url[0],
      imageUrl: image.url[0],
      description: facts[id] 
    }))
  })
}



