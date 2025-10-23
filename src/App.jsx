import Units from "./Units";
import LocationForm from "./LocationForm";
import Curent from "./Current";
import Daily from "./Daily";
import Hourly from "./Hourly";
import ErrorDisplay from "./ErrorDisplay";

import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./assets/logo.svg?react";

function App() {
  const defaultUnits = {
    temperature: "celsius",
    wind: "kmh",
    precipitation: "mm",
  };
  // retrieve the user's last units' setting (or use the default)
  const getInitialUnits = () => {
    const data = JSON.parse(localStorage.getItem("units"));
    if (!data) return defaultUnits;
    else return data;
  };
  const [units, setUnits] = useState(getInitialUnits);
  // update the user's last units' setting
  useEffect(() => {
    localStorage.setItem("units", JSON.stringify(units));
  }, [units]);

  const defaultLocation = {
    place: "Berlin, Germany",
    lat: 52.52,
    long: 13.41,
  };
  // retrieve the user's last location (or use the default)
  const getInitialLocation = () => {
    const data = JSON.parse(localStorage.getItem("location"));
    if (!data) return defaultLocation;
    else return data;
  };
  const [location, setLocation] = useState(getInitialLocation);
  // update the user's last location
  useEffect(() => {
    localStorage.setItem("location", JSON.stringify(location));
  }, [location]);

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isFound, setIsFound] = useState(true);
  const [isError, setIsError] = useState(false);

  // get the API data everytime the location is updated
  useEffect(() => {
    async function fetchData(url) {
      try {
        if (location) {
          const res = await axios.get(url);
          setIsLoading(false);
          setData(res.data);
        }
      } catch (e) {
        setIsError(true);
        throw e;
      }
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.long}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=weather_code,temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code&wind_speed_unit=${units.wind}&temperature_unit=${units.temperature}&precipitation_unit=${units.precipitation}`;

    fetchData(url);
  }, [units, location]);

  return (
    <div className="w-full min-w-[375px] h-full min-h-screen bg-background text-white py-6 px-3">
      <div className="max-w-[900px] mx-auto xl:max-w-[1350px]">
        <nav className="flex justify-between items-center">
          <Logo className="w-44"/>
          <Units units={units} setUnits={setUnits} />
        </nav>
        {!isError ? (
          <>
            <h1 className="text-5xl font-bold text-center mt-12 leading-normal tracking-wide bricolage-grotesque">
              How's the sky looking today?
            </h1>
            <LocationForm
              setLocation={setLocation}
              setIsError={setIsError}
              setIsFound={setIsFound}
            />
            {isFound ? (
              <>
                <div className="w-full xl:grid xl:grid-cols-3 xl:gap-6">
                  <div className="xl:col-span-2">
                    <Curent
                      isLoading={isLoading}
                      place={location.place}
                      current={data.current}
                      units={units}
                    />
                    <Daily isLoading={isLoading} daily={data.daily} />
                  </div>
                  <Hourly isLoading={isLoading} hourly={data.hourly} />
                </div>
              </>
            ) : (
              <p className="text-xl text-center my-4">
                No search result found!
              </p>
            )}
          </>
        ) : (
          <ErrorDisplay />
        )}
      </div>
    </div>
  );
}

export default App;
