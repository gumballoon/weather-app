import WeatherIcon from "./WeatherIcon";

import { format } from "date-and-time";

export default function HourlyStatistic({ weatherCode, time, temperature }) {
  return (
    <section className="bg-neutral-600 border-1 border-neutral-700 flex items-center w-full min-h-13 py-2.5 px-2 my-2.5 rounded-lg">
      {/* using a non-falsy conditional since weatherCode can be 0 */}
      {weatherCode !== null && weatherCode !== undefined && (
        <WeatherIcon code={weatherCode} size="small" />
      )}
      {time && (
        <h4 className="ml-2 mr-auto">{format(new Date(time), "h A")}</h4>
      )}
      {temperature && <span>{Math.round(temperature)}°</span>}
    </section>
  );
}
