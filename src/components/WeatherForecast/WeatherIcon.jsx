const WeatherIcon = ({img}) => {
    return (
        <div className="weather-forecast">
            <h2>Weather</h2>
            <img src={img} alt={imgAlt} />
        </div>
    );
}