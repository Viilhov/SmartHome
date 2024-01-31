// Get temperature display element
const temperatureDisplay = document.getElementById("temperatureDisplay");

// Initial temperature value
let temperature = 25;

// Update temperature display function
const updateTemperatureDisplay = () => {
  temperatureDisplay.textContent = `${temperature}°C`;
};

// Increase temperature button click event
document.getElementById("increaseTemp").addEventListener("click", () => {
  temperature++;
  updateTemperatureDisplay();
});

// Decrease temperature button click event
document.getElementById("decreaseTemp").addEventListener("click", () => {
  temperature--;
  updateTemperatureDisplay();
});

// Initialize temperature display
updateTemperatureDisplay();
