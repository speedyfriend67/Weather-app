function getWeather() {
    const locationInput = document.getElementById('location');
    const weatherResults = document.getElementById('weather-results');

    const location = locationInput.value.trim();

    if (location) {
        // In a real app, you would call an API to get weather data.
        // For simplicity, we'll just display a static message here.
        const weatherMessage = `Weather for ${location}: Sunny, 25°C`;

        // Display the weather message
        const weatherItem = document.createElement('div');
        weatherItem.classList.add('weather-item');
        weatherItem.textContent = weatherMessage;

        weatherResults.innerHTML = '';
        weatherResults.appendChild(weatherItem);
    } else {
        alert('Please enter a location.');
    }
}

function clearResults() {
    const weatherResults = document.getElementById('weather-results');
    weatherResults.innerHTML = '';
}
