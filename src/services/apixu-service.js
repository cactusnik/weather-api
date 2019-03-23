export default class ApixuService {
    constructor() {
        this.apiBase = 'https://cors-anywhere.herokuapp.com/http://api.apixu.com/v1'
        this.key = '1ddbc75ec0ae442d988172411192303&q'
    }
    async getResource (url) {
        const res = await fetch(`${this.apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${this.apiBase}${url}, received ${res.status}`)
        }

        return await res.json()
    }

    getForecast = async (cityName, days = 7) => {
        const res = await this.getResource(`/forecast.json?key=${this.key}=${cityName}&days=${days}`)
        return this.transformForecast(res)
    }

    transformForecast = (data) => {
        return {
            ...this.transformLocation(data.location),
            forecast: {
                ...data.forecast.forecastday.map(this.transformForecastDay)
            }
        }
    }

    transformLocation = ({country, name}) => {
        return {
            country,
            name
        }
    }

    transformForecastDay = ({day}) => {
        return {
            maxtemp: day.maxtemp_c,
            mintemp: day.mintemp_c,
            icon: day.condition.icon,
            text: day.condition.text
        }
    }
}
