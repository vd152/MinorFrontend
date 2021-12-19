import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {PlaylistReducer} from './Reducers/PlaylistReducer'

const reducers = combineReducers({
    playlist: PlaylistReducer
})


const Store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
)

export default Store;