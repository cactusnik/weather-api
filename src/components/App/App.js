import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Normalize } from 'styled-normalize'

import { HomePage, ForecastDetails} from '../pages'

const App = () => {
    return (
        <>
            <Normalize />
            <Switch>
                <Route exact path="/" render={() => <HomePage/>}/>
                <Route path="/details" render={() => <ForecastDetails/>}/>
            </Switch>
        </>
    )
}

export default App
