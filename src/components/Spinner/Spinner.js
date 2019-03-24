import React from 'react'
import { SpinnerContainer } from "./StyledSpinner";

const Spinner = () => {
    return (
        <div className="lds-css ng-scope">
            <SpinnerContainer className="lds-magnify">
                <div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </SpinnerContainer>
        </div>
    )
}

export default Spinner
