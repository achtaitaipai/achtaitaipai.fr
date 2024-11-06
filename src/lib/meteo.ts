import { fetchWeatherApi } from 'openmeteo'

export const getWeatherData = async () => {
	const isDev = import.meta.env.DEV
	if (isDev) return { temperature: 42, meteoStatus: 'Le ciel était en haut' }
	const params = {
		latitude: 48.8899,
		longitude: 2.4101,
		current: ['temperature_2m', 'weather_code'],
		timezone: 'auto',
		forecast_days: 1,
	}
	const url = 'https://api.open-meteo.com/v1/forecast'
	const responses = await fetchWeatherApi(url, params)

	const response = responses[0]

	const current = response.current()!

	const codes = {
		'le ciel était ensoleillé': [0, 1],
		'le ciel était nuageux': [2],
		'le ciel était couvert': [3],
		'le temps était brumeux': [45, 48],
		'il pleuvait': [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
		'il neigait': [71, 73, 75, 77, 85, 86],
		"c'étais la tempête": [95, 96, 98],
	}

	const temperature = Math.round(current.variables(0)!.value())
	const weatherCode = current.variables(1)!.value()

	const meteoStatus = Object.entries(codes).find(([_, codes]) =>
		codes.includes(weatherCode),
	)
	return { temperature, meteoStatus: meteoStatus?.[0] }
}
