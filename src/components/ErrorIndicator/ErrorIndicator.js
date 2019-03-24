import React from 'react'
import { Error, Boom } from "./StyledErrorIndicator";

const ErrorIndicator = () => {
    return (
        <Error>
            <Boom>BOOM</Boom>
            <span>something has done terribly wrong</span>
            <span>(There is no lousy weather, only lousy choice of clothing.)</span>
        </Error>
    )
}

export default ErrorIndicator
