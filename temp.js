function convertTemperature() {
  const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
  const unitSelection = document.getElementById('unitSelection').value;
  let convertedTemperature;

  if (isNaN(temperatureInput)) {
    document.getElementById('result').innerText = 'Please enter a valid number!';
    return;
  }

  if (unitSelection === 'celsius') {
    convertedTemperature = (temperatureInput - 32) * (5 / 9);
    document.getElementById('result').innerText = `${temperatureInput}°F is ${convertedTemperature.toFixed(2)}°C`;
  } else if (unitSelection === 'fahrenheit') {
    convertedTemperature = (temperatureInput * 9 / 5) + 32;
    document.getElementById('result').innerText = `${temperatureInput}°C is ${convertedTemperature.toFixed(2)}°F`;
  } else if (unitSelection === 'kelvin') {
    convertedTemperature = temperatureInput + 273.15;
    document.getElementById('result').innerText = `${temperatureInput}°C is ${convertedTemperature.toFixed(2)}K`;
  }
}
