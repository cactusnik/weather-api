import React, { Component } from 'react'
import { connect } from 'react-redux'

import { WithApixuService } from '../hoc'

import {
    fetchCityRequest,
    fetchCitySuccess,
    fetchCityFailure
} from "../../actions";

class InputSearch extends Component {
    constructor() {
        super()
        this.state = {
            temp: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            temp: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { fetchCityRequest, fetchCitySuccess, fetchCityFailure } = this.props
        e.preventDefault()
        fetchCityRequest()
        this.props.apixuService.getForecast(this.state.temp)
            .then((data) => {
                console.log(data)
                fetchCitySuccess(data)
            })
            .catch((err) => {
                fetchCityFailure(err)
            })
    }

    render () {
        const { temp } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={temp}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

const mapStateToProps = ({cities}) => {
    return { cities }
}

const mapDispatchToProps = {
    fetchCityRequest,
    fetchCitySuccess,
    fetchCityFailure
}

export default WithApixuService()(connect(mapStateToProps, mapDispatchToProps)(InputSearch))
