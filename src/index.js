import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/App'
import ErrorBountry from './components/ErrorBoundry'
import ApixuService from './services/apixu-service'
import { ApixuServiceProvider } from "./components/ApixuServiceContext";

import store from './store'

const apixuService = new ApixuService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBountry>
            <ApixuServiceProvider value={apixuService}>
                <Router>
                    <App />
                </Router>
            </ApixuServiceProvider>
        </ErrorBountry>
    </Provider>,
    document.getElementById('root')
)
