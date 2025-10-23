import { useState, useEffect } from "react";

import HourlyStatistic from "./HourlyStatistic";
import { format } from "date-and-time";
import IconDropdown from "./assets/icon-dropdown.svg?react";

export default function Hourly({ isLoading, hourly }) {
  // to get the current time index on the 7-day hourly object
  const currTime = parseInt(format(new Date(), "HH")) + 1;
  const currDate = new Date().toISOString().slice(0, 11) + currTime + ":00";
  const currIndex = !isLoading && hourly.time.indexOf(currDate);

  // to update the state once the loading is completed
  const [hourlyIndex, setHourlyIndex] = useState(0);
  useEffect(() => {
    !isLoading && setHourlyIndex(currIndex);
  }, [isLoading]);

  const today = format(new Date(), "dddd");
  const [selectedDay, setSelectedDay] = useState(today);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // to get the weekday name for the 7-day dropdown
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const todayIndex = weekdays.indexOf(today);

  function handleClick(i, weekday) {
    setHourlyIndex(parseInt(i));
    setIsDropdownVisible(!isDropdownVisible);
    setSelectedDay(weekday);
  }

  return (
    <div className="bg-neutral-700 border-1 border-neutral-600 pt-3 pb-2 px-4 rounded-lg mt-6 lg:mt-0 mx-auto lg:mx-0">
      <div className="flex justify-between items-center mt-3 mb-2">
        <h2 className="text-white font-semibold text-lg">Hourly forecast</h2>

        <div className="bg-neutral-600 py-1 pl-3 px-8 flex items-center relative z-0 rounded-md">
          <button
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            className="w-full hover:cursor-pointer"
          >
            {selectedDay}
          </button>
          {/* ensures the icon doesn’t block clicks */}
          <IconDropdown className="absolute right-2 pointer-events-none" />

          {/* to get the current time forecast + the next 7 hours */}
          {isDropdownVisible && (
            <div className="bg-neutral-700 border-1 border-neutral-600 absolute flex flex-col gap-0.5 top-10 left-0 w-full p-1 rounded-md">
              <button
                className="py-1 px-2 block text-start rounded-md hover:bg-neutral-600 hover:cursor-pointer"
                onClick={() => handleClick(currIndex, today)}
              >
                {today}
              </button>
              <button
                className="py-1 px-2 block text-start rounded-md hover:bg-neutral-600 hover:cursor-pointer"
                onClick={() => handleClick(33, weekdays[(todayIndex + 1) % 7])}
              >
                {weekdays[(todayIndex + 1) % 7]}
              </button>
              <button
                className="py-1 px-2 block text-start rounded-md hover:bg-neutral-600 hover:cursor-pointer"
                onClick={() => handleClick(57, weekdays[(todayIndex + 2) % 7])}
              >
                {weekdays[(todayIndex + 2) % 7]}
              </button>
              <button
                className="py-1 px-2 block text-start rounded-md hover:bg-neutral-600 hover:cursor-pointer"
                onClick={() => handleClick(81, weekdays[(todayIndex + 3) % 7])}
              >
                {weekdays[(todayIndex + 3) % 7]}
              </button>
              <button
                className="py-1 px-2 block text-start rounded-md hover:bg-neutral-600 hover:cursor-pointer"
                onClick={() => handleClick(105, weekdays[(todayIndex + 4) % 7])}
              >
                {weekdays[(todayIndex + 4) % 7]}
              </button>
              <button
                className="py-1 px-2 block text-start rounded-md hover:bg-neutral-600 hover:cursor-pointer"
                onClick={() => handleClick(129, weekdays[(todayIndex + 5) % 7])}
              >
                {weekdays[(todayIndex + 5) % 7]}
              </button>
              <button
                className="py-1 px-2 block text-start rounded-md hover:bg-neutral-600 hover:cursor-pointer"
                onClick={() => handleClick(153, weekdays[(todayIndex + 6) % 7])}
              >
                {weekdays[(todayIndex + 6) % 7]}
              </button>
            </div>
          )}
        </div>
      </div>
      {[
        hourlyIndex,
        hourlyIndex + 1,
        hourlyIndex + 2,
        hourlyIndex + 3,
        hourlyIndex + 4,
        hourlyIndex + 5,
        hourlyIndex + 6,
        hourlyIndex + 7,
      ].map((i) => {
        return !isLoading ? (
          <HourlyStatistic
            key={"hourly-" + i}
            weatherCode={hourly.weather_code[i]}
            time={hourly.time[i]}
            temperature={hourly.temperature_2m[i]}
          />
        ) : (
          <HourlyStatistic key={"hourly-" + i} />
        );
      })}
    </div>
  );
}
