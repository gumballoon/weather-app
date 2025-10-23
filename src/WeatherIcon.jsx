import IconDrizzle from "./assets/icon-drizzle.webp";
import IconFog from "./assets/icon-fog.webp";
import IconOvercast from "./assets/icon-overcast.webp";
import IconPartlyCloudy from "./assets/icon-partly-cloudy.webp";
import IconRain from "./assets/icon-rain.webp";
import IconSnow from "./assets/icon-snow.webp";
import IconStorm from "./assets/icon-storm.webp";
import IconSunny from "./assets/icon-sunny.webp";

const icons = {
  default: [IconOvercast, "overcast"],

  0: [IconSunny, "clear sky"],
  1: [IconPartlyCloudy, "mainly clear"],
  2: [IconPartlyCloudy, "partly cloudy"],
  3: [IconOvercast, "overcast"],

  45: [IconFog, "fog"],
  48: [IconFog, "depositing rime fog"],

  51: [IconDrizzle, "light drizzle"],
  53: [IconDrizzle, "moderate drizzle"],
  55: [IconDrizzle, "dense drizzle"],
  56: [IconDrizzle, "light freezing drizzle"],
  57: [IconDrizzle, "dense freezing drizzle"],

  61: [IconRain, "slight rain"],
  63: [IconRain, "moderate rain"],
  65: [IconRain, "heavy rain"],
  66: [IconRain, "light freezing rain"],
  67: [IconRain, "heavy freezing rain"],

  71: [IconSnow, "slight snow fall"],
  73: [IconSnow, "moderate snow fall"],
  75: [IconSnow, "heavy snow fall"],
  77: [IconSnow, "snow grains"],

  80: [IconRain, "slight rain showers"],
  81: [IconRain, "moderate rain showers"],
  82: [IconRain, "violent rain showers"],

  85: [IconSnow, "slight snow showers"],
  86: [IconSnow, "heavy snow showers"],

  95: [IconStorm, "thunderstorm, slight or moderate"],
  96: [IconStorm, "thunderstorm with slight hail"],
  99: [IconStorm, "thunderstorm with heavy hail"],
};

const sizes = {
  small: "w-8 h-8",
  medium: "w-16 h-16",
  large: "w-36 h-36",
};

export default function WeatherIcon({ code = "default", size = "medium" }) {
  try {
    return (
      <img
        src={icons[code][0]}
        alt={`weather icon for ${icons[code][1]}`}
        className={sizes[size]}
      />
    );
  } catch {
    return (
      <img
        src={icons.default[0]}
        alt={`weather icon for ${icons.default[1]}`}
      />
    );
  }
}
