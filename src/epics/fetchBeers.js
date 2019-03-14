import { ajax } from 'rxjs/ajax'
import { map} from 'rxjs/operators'

import { fetchFulfilled } from '../reducers/beers/actions'

const API = 'https://api.punkapi.com/v2/beers'

export default function fetchBeers() {
  return ajax.getJSON(API).pipe(
    map(fetchFulfilled)
  )
}
