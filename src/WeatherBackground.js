import React, { useEffect, useState } from "react";

const codeMapping = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "PARTLY_CLOUDY_DAY",
  "03n": "PARTLY_CLOUDY_NIGHT",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "RAIN",
  "11n": "RAIN",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};

const WeatherBackground = ({ currentWeatherIcon }) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const updateBackgroundImage = () => {
      console.log("Current Weather Icon:", currentWeatherIcon);
      const imageName = codeMapping[currentWeatherIcon];

      if (imageName) {
        const imagePath = `/images/${imageName}.jpg`;
        console.log("Image path:", imagePath);
        setBackgroundImage(`url(${imagePath})`);
      }
    };

    updateBackgroundImage();
  }, [currentWeatherIcon]);

  useEffect(() => {
    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.position = "fixed";
    document.body.style.top = 0;
    document.body.style.left = 0;
    document.body.style.width = "100%";
    document.body.style.height = "100%";

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, [backgroundImage]);

  return null;
};

export default WeatherBackground;
