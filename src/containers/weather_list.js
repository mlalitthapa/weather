import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData){

        const city = cityData.city;
        const cityName = city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={cityName}>
                <td>{cityName}, {city.country}</td>
                <td>
                    <Chart data={temps} color="orange" unit="k" />
                </td>
                <td>
                    <Chart data={pressures} color="green" unit="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="blue" unit="%" />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }

}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
