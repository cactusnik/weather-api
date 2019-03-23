import React from 'react'
import { ApixuServiceConsumer } from "../ApixuServiceContext";

const WithApixuService = () => (Wrapped) => {

    return (props) => {
        return (
            <ApixuServiceConsumer>
                {(apixuService) => {
                    return <Wrapped {...props} apixuService={apixuService} />
                }}
            </ApixuServiceConsumer>
        )
    }
}

export default WithApixuService
