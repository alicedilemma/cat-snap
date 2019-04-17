import request from 'superagent'

const snapUrl = 'http://localhost:3000/api/v1/snaps/'

export function getSnaps () {
  return request
    .get(snapUrl)
    .then(res => {
      console.log('api', res.body)
      return res.body
    })
}
