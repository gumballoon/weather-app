import DailyStatistic from "./DailyStatistic";

export default function Daily({ isLoading, daily }) {
  return (
    <>
      <h2 className="text-white font-semibold text-lg mt-6 mb-4">
        Daily forecast
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 gap-3">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => {
          return !isLoading ? (
            <DailyStatistic
              key={"daily-" + i}
              isLoading={isLoading}
              weekday={daily.time[i]}
              weatherCode={daily.weather_code[i]}
              maxTemperature={Math.round(daily.temperature_2m_max[i])}
              minTemperature={Math.round(daily.temperature_2m_min[i])}
            />
          ) : (
            <DailyStatistic key={"daily-" + i} />
          );
        })}
      </div>
    </>
  );
}
