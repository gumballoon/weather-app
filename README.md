# Weather App - Frontend Mentor Challenge

A responsive weather application built with React and Vite that provides current weather conditions, daily forecasts, and hourly predictions using the Open-Meteo API.

## 🎯 Challenge Overview

This Frontend Mentor challenge focuses on building a comprehensive weather application that fetches real-time weather data and presents it in an intuitive, responsive interface. The challenge emphasizes API integration, state management, data visualization, and creating a seamless user experience across different devices.

## 💼 Portfolio Project

This project also serves as a portfolio demonstration showcasing:
- **Frontend Development**: React hooks, component architecture, and modern JavaScript
- **API Integration**: RESTful API consumption with error handling and loading states
- **State Management**: Local storage persistence and React state management
- **Responsive Design**: Mobile-first approach with Tailwind CSS and responsive layouts
- **User Experience**: Intuitive interface design with loading indicators and error handling

## ✨ Features

- **Real-time Weather Data**: Current conditions including temperature, humidity, wind speed, and precipitation
- **Location Search**: Search for weather by city name with autocomplete suggestions
- **Daily Forecasts**: 7-day weather outlook with min/max temperatures
- **Hourly Predictions**: 
  - Detailed hourly weather for the next 24 hours
  - Temperature trends and weather conditions
  - Apparent temperature and humidity levels
- **Unit Conversion**: Toggle between Celsius/Fahrenheit, km/h and mph for wind, mm and inches for precipitation
- **Data Persistence**: Remembers user's last location and preferred units using localStorage

## 🛠️ Built With

- **React 19** - Modern UI library with hooks for state management
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Open-Meteo API** - Free weather API for real-time weather data

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository: `git clone https://github.com/gumballoon/weather-app.git`
2. Navigate to project directory: `cd weather-app`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
├── index.html              # Main HTML template
├── src/
│   ├── App.jsx             # Main application component
│   ├── App.css             # Global application styles
│   ├── LocationForm.jsx    # Location search component
│   ├── Current.jsx         # Current weather display
│   ├── Daily.jsx           # Daily forecast component
│   ├── Hourly.jsx          # Hourly forecast component
│   ├── Units.jsx           # Unit conversion controls
│   ├── WeatherIcon.jsx     # Weather condition icons
│   ├── ErrorDisplay.jsx    # Error handling component
│   ├── assets/             # Static assets (icons, images)
│   ├── index.css           # Global styles and Tailwind imports
│   └── main.jsx            # React application entry point
├── public/
│   └── favicon-32x32.png   # Application favicon
└── README.md
```

## 🎨 Design Features

- **Mobile-First Design**: Optimized for mobile devices with responsive breakpoints
- **Clean Typography**: Custom Google Fonts (Bricolage Grotesque, DM Sans) for enhanced readability
- **Intuitive Icons**: Weather-specific icons for different conditions (sunny, cloudy, rainy, etc.)
- **Smooth Interactions**: Loading states and hover effects for better user feedback

## 🔧 Functionality

### Core Features Implemented:

- ✅ Real-time weather data fetching from Open-Meteo API
- ✅ Location search with geolocation coordinates
- ✅ Current weather conditions display
- ✅ 7-day daily forecast with min/max temperatures
- ✅ 24-hour hourly weather predictions
- ✅ Multiple unit system support (metric/imperial)
- ✅ Local storage for user preferences persistence
- ✅ Responsive design for all screen sizes
- ✅ Error handling for API failures and invalid locations
- ✅ Loading indicators for better user experience

### User Actions:

1. **Search Location**: Enter city name to get weather for specific location
2. **View Current Weather**: See detailed current conditions including temperature, humidity, wind
3. **Check Daily Forecast**: Browse 7-day weather outlook with high/low temperatures
4. **Explore Hourly Data**: View detailed hourly predictions for the next 24 hours
5. **Toggle Units**: Switch between Celsius/Fahrenheit, km/h and mph, mm and inches

## 💡 Key Implementation Details

- **API Integration**: Uses Open-Meteo free weather API with dynamic URL construction based on user location and unit preferences
- **State Management**: React hooks (useState, useEffect) for managing weather data, loading states, and user preferences
- **Local Storage**: Persists user's last searched location and preferred units across browser sessions
- **Error Handling**: Comprehensive error handling for network failures and invalid location searches
- **Responsive Grid**: CSS Grid and Flexbox for responsive layout adaptation across different screen sizes

## 🌟 Future Enhancements

- Weather alerts and notifications
- Interactive weather maps
- Historical weather data visualization
- Favorite locations bookmarking
- Weather-based activity recommendations
- Progressive Web App (PWA) capabilities

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for educational purposes as part of the Frontend Mentor challenge.

## Author

- Website - [franciscocristina.com](https://franciscocristina.com)
- LinkedIn - [francisco-cristina](https://www.linkedin.com/in/francisco-cristina)
- GitHub - [@gumballoon](https://github.com/gumballoon)
- Frontend Mentor - [@gumballoon](https://www.frontendmentor.io/profile/gumballoon)
- CSS Battle - [@gumballoon](https://cssbattle.dev/player/gumballoon)

## 🙏 Acknowledgments

- Frontend Mentor for the design and challenge
- Design assets and requirements provided by Frontend Mentor
- Open-Meteo team for providing free weather API
- React and Vite teams for excellent development tools

---

**Frontend Mentor Challenge**: [Weather App Challenge](https://www.frontendmentor.io/challenges)