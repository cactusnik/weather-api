import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/App'
import ErrorBountry from './components/ErrorBoundry'
import OpenWeatherMapService from './services/openWeatherMap-service'
import { OpenWeatherMapServiceProvider } from "./components/OpenWeatherMapServiceContext";

import store from './store'

const openWeatherMapService = new OpenWeatherMapService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBountry>
            <OpenWeatherMapServiceProvider value={openWeatherMapService}>
                <Router>
                    <App />
                </Router>
            </OpenWeatherMapServiceProvider>
        </ErrorBountry>
    </Provider>,
    document.getElementById('root')
)
