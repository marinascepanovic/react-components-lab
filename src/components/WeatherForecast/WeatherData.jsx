const WeatherData = ({ day, conditions, time }) => {
    return (
        <div className="weather-forecast">
            <h2>Day of the week: {day}</h2>
            <p>Conditions: {conditions}</p>
            <p>Time: {time}</p>
        </div>
    );
}