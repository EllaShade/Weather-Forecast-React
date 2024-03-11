import React, { useEffect, useState } from "react";

const codeMapping = {
  "clear-sky-day": "CLEAR_DAY",
  "clear-sky-night": "CLEAR_NIGHT",
  "few-clouds-day": "PARTLY_CLOUDY_DAY",
  "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
  "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
  "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
  "broken-clouds-day": "CLOUDY",
  "broken-clouds-night": "CLOUDY",
  "shower-rain-day": "RAIN",
  "shower-rain-night": "RAIN",
  "rain-day": "RAIN",
  "rain-night": "RAIN",
  "thunderstorm-day": "RAIN",
  "thunderstorm-night": "RAIN",
  "snow-day": "SNOW",
  "snow-night": "SNOW",
  "mist-day": "FOG",
  "mist-night": "FOG",
};

const WeatherBackground = ({ currentWeatherIcon }) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const updateBackgroundImage = () => {
      console.log("Current Weather Icon:", currentWeatherIcon);
      const imageName = codeMapping[currentWeatherIcon];

      if (imageName) {
        const imagePath = `${process.env.PUBLIC_URL}/images/${imageName}.jpg`;
        console.log("Image path:", imagePath);
        setBackgroundImage(`url(${imagePath})`);
      }
    };

    updateBackgroundImage();
  }, [currentWeatherIcon]); // Der Effekt wird aktualisiert, wenn sich das currentWeatherIcon ändert.

  return (
    <div
      className="weather-background"
      style={{
        backgroundImage: backgroundImage,
        // Weitere Stilattribute für deine Hintergrundkomponente hier hinzufügen.
      }}
    />
  );
};

export default WeatherBackground;
