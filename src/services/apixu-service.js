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
        console.log(res)
        return this.transformForecast(res)
    }

    transformForecast = (data) => {
        return {
            city: data.location.name,
            country: data.location.country,
            forecast: {
                ...data.forecast.forecastday.map(this.transformForecastDay)
            }
        }
    }

    transformForecastDay = ({day, astro, date}) => {
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return {
            week: dayNames[new Date(date).getDay()],
            date: date,
            icon: day.condition.icon,
            temp: Math.round(day.avgtemp_c),
            details: {
                current: day.condition.text,
                wind: `${day.maxwind_kph} km/h`,
                sunrise: astro.sunrise,
                sunset: astro.sunset
            }
        }
    }
}
