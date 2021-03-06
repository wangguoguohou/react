// configureStore dev
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'

const nextRootReducer = require('./reducers').default

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware, createLogger()),
            window.devToolsExtension ? window.devToolsExtension() : fn => fn,
        ),
    )
    if (module.hot) {
        module.hot.accept(rootReducer, () => {
            store.replaceReducer(nextRootReducer);
        })
    }
    return store;
}
