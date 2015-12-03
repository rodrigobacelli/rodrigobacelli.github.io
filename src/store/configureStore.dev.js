import { createStore, applyMiddleware, compose } from 'redux'
import DevTools from '../cointainers/DevTools'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/createReducers'

//Create Store
const finalCreateStore = compose(
    applyMiddleware(thunk), //Thunk middleware
    DevTools.instrument() //redux-dev-tools store
)(createStore)

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/createReducers', () => {
            const nextRootReducer = require('../reducers/createReducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
