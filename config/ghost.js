import GhostContentAPI from '@tryghost/content-api'
import { GHOST_API_URL, GHOST_API_KEY } from '.'

let ghostAPI

const _setup = () => {
  ghostAPI = new GhostContentAPI({
    url: GHOST_API_URL,
    key: GHOST_API_KEY,
    version: 'v3'
  })

  return ghostAPI
}

export default ghostAPI !== undefined ? ghostAPI : _setup()
