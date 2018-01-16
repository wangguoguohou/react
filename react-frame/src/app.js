import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import routers from './routers'
import { store, history } from './redux'

import './assets/css/comm.css'
import './assets/css/reset.css'
import './styles/main.scss'

const renderApp = routers => {
    render(
        <AppContainer>
            <Provider store={ store }>
                {/* @REVIEW: 热替换时重新render路由会导致组件state丢失 */}
                {/* https://github.com/gaearon/react-hot-loader/issues/249#issuecomment-214819424 */}
                <Router routes={ routers } history={history} key={ Math.random() }/>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
}

renderApp(routers);

if (module.hot) {
    module.hot.accept(() => {
        renderApp(routers);
    })
}