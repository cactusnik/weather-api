import React, { Component } from 'react'
import { connect } from 'react-redux'

import { WithApixuService } from '../hoc'
import {
    Form,
    Input,
    Submit
} from "./StyledInputSearch";
import {
    fetchCityRequest,
    fetchCitySuccess,
    fetchCityFailure,
    setActiveCity
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
        e.preventDefault()

        const { fetchCityRequest, fetchCitySuccess, fetchCityFailure, setActiveCity, cities } = this.props

        const city = cities.find((city) => {
            return city.city.toLowerCase() === this.state.temp.toLowerCase()
        })

        if (city) {
            setActiveCity(this.state.temp)
        } else {
            fetchCityRequest()

            this.props.apixuService.getForecast(this.state.temp)
                .then((data) => {
                    fetchCitySuccess(data)
                })
                .catch((err) => {
                    fetchCityFailure(err)
                })
        }
    }

    render () {
        const { temp } = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    value={temp}
                    onChange={this.handleChange}
                />
                <Submit type="submit" value="search" />
            </Form>
        )
    }
}

const mapStateToProps = ({cities}) => {
    return { cities }
}

const mapDispatchToProps = {
    fetchCityRequest,
    fetchCitySuccess,
    fetchCityFailure,
    setActiveCity
}

export default WithApixuService()(connect(mapStateToProps, mapDispatchToProps)(InputSearch))
