// Get temperature display element
const temperatureDisplay = document.getElementById("temperatureDisplay");

// Initial temperature value
let temperature = 25;

// List of funny song names
const funnySongNames = [
  "Funky Chicken Dance",
  "Disco Banana Boogie",
  "Silly Squirrel Serenade",
  "Hip Hop Hippo Shuffle",
  "Rockin' Rubber Duck",
  "Jazzy Jumping Jackalope",
];

let isPlaying = false;
let currentSongIndex = 0;

// Play/Pause button click event
document.getElementById("playMusic").addEventListener("click", () => {
  if (!isPlaying) {
    isPlaying = true;
    document.getElementById("songName").textContent = getRandomSongName();
    document.getElementById("playMusic").innerHTML =
      '<i class="fas fa-pause"></i> Pause';
  } else {
    isPlaying = false;
    document.getElementById("playMusic").innerHTML =
      '<i class="fas fa-play"></i> Play';
  }
});

// Stop button click event
document.getElementById("pauseMusic").addEventListener("click", () => {
  isPlaying = false;
  document.getElementById("playMusic").innerHTML =
    '<i class="fas fa-play"></i> Play';
  document.getElementById("songName").textContent = "Press Play to Get Groovy!";
});

// Next button click event
document.getElementById("nextTrack").addEventListener("click", () => {
  if (isPlaying) {
    document.getElementById("songName").textContent = getRandomSongName();
  }
});

// Function to get a random song name
const getRandomSongName = () => {
  const randomIndex = Math.floor(Math.random() * funnySongNames.length);
  return funnySongNames[randomIndex];
};

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
