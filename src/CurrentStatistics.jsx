export default function CurrentStatistics({ isLoading, current, units }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
      <section className="bg-neutral-700 border-1 border-neutral-600 p-4 rounded-lg">
        <h4 className="text-lg mb-4 text-neutral-200">Feels Like</h4>
        <p className="text-3xl font-light">
          {!isLoading ? `${current.apparent_temperature} °` : "-"}
        </p>
      </section>

      <section className="bg-neutral-700 border-1 border-neutral-600 p-4 rounded-lg">
        <h4 className="text-lg mb-4 text-neutral-200">Humidity</h4>
        <p className="text-3xl font-light">
          {!isLoading ? `${current.relative_humidity_2m} %` : "-"}
        </p>
      </section>

      <section className="bg-neutral-700 border-1 border-neutral-600 p-6 rounded-lg">
        <h4 className="text-lg mb-4 text-neutral-200">Wind</h4>
        <p className="text-3xl font-light">
          {!isLoading
            ? `${current.wind_speed_10m} ${units.wind === "kmh" ? "km/h" : units.wind}`
            : "-"}
        </p>
      </section>

      <section className="bg-neutral-700 border-1 border-neutral-600 p-6 rounded-lg">
        <h4 className="text-lg mb-4 text-neutral-200">Precipitation</h4>
        <p className="text-3xl font-light">
          {!isLoading ? `${current.precipitation} ${units.precipitation}` : "-"}
        </p>
      </section>
    </div>
  );
}
