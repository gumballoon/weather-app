import WeatherIcon from "./WeatherIcon";

import { format } from "date-and-time";

export default function DailyStatistic({
  weekday,
  weatherCode,
  maxTemperature,
  minTemperature,
}) {
  return (
    <section className="bg-neutral-700 border-1 border-neutral-600 p-3 rounded-lg flex flex-col items-center min-h-35">
      <h4 className="font-semibold text-neutral-200">
        {format(new Date(weekday), "ddd")}
      </h4>
      {weatherCode !== null && weatherCode !== undefined && (
        <WeatherIcon code={weatherCode} size="medium" />
      )}
      {maxTemperature && minTemperature && (
        <div className="w-full flex justify-between">
          <span>{maxTemperature}°</span>
          <span>{minTemperature}°</span>
        </div>
      )}
    </section>
  );
}
