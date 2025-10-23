import CurrentStatistics from "./CurrentStatistics";
import WeatherIcon from "./WeatherIcon";

import { format } from "date-and-time";

import "./Current.css";

export default function Current({ isLoading, place, current, units }) {
  const date = !isLoading && new Date(current.time);
  return (
    <div className="Current">
      <section
        className={`bg-neutral-700 rounded-lg py-6 px-6 xl:py-12 flex flex-col justify-center items-center xl:flex-row xl:justify-between min-h-[15rem] ${!isLoading && "herobox"}`}
      >
        {!isLoading ? (
          <>
            <div className="text-center xl:text-start">
              <h3 className="text-4xl font-semibold mb-3 bricolage-grotesque">
                {place}
              </h3>
              <p className="text-xl font-light text-neutral-200">
                {format(new Date(current.time), "dddd, MMMM DD, YYYY")}
              </p>
            </div>

            <div className="flex items-center justify-between gap-6 xl:gap-0">
              <WeatherIcon code={current.weather_code} size="large" />
              <i className="text-8xl font-semibold">
                {current.temperature_2m}°
              </i>
            </div>
          </>
        ) : (
          <div className="loading">
            <div className="h-9 mx-auto grid grid-cols-3 gap-6">
              <span />
              <span />
              <span />
            </div>
            <p className="mt-4 text-center">Loading...</p>
          </div>
        )}
      </section>

      <CurrentStatistics
        isLoading={isLoading}
        current={current}
        units={units}
      />
    </div>
  );
}
