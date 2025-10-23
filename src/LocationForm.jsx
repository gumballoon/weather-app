import { useState, useEffect } from "react";
import axios from "axios";
import IconSearch from "./assets/icon-search.svg?react";
import IconLoading from "./assets/icon-loading.svg?react";

export default function LocationForm({ setLocation, setIsError, setIsFound }) {
  const [isSearchLoading, setIsSearchLoading] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchData(url) {
      try {
        setIsSearchLoading(true);
        setSearchOptions([]);
        const res = await axios.get(url);
        setSearchOptions(res.data.results);
        setIsSearchLoading(false);
      } catch (e) {
        setIsError(true);
        console.log(e);
      }
    }

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchName}`;

    fetchData(url);

    if (searchValue && !searchOptions) {
      setIsFound(false);
    }
  }, [searchName]);

  function handleClick(i) {
    try {
      setLocation({
        place: searchOptions[i].country
          ? `${searchOptions[i].name}, ${searchOptions[i].country}`
          : `${searchOptions[i].name}`,
        lat: searchOptions[i].latitude,
        long: searchOptions[i].longitude,
      });
      setIsFound(true);
      setSearchName("");
      setSearchValue("");
    } catch (e) {
      setIsFound(false);
      console.log(e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchName(searchValue);
  }

  return (
    <form
      className="sm:max-w-140 mx-auto my-8 flex flex-col sm:flex-row justify-center items-center gap-2"
      onSubmit={handleSubmit}
    >
      <div className="bg-neutral-700 py-3 px-4 flex items-center gap-2 rounded-md w-full relative">
        <IconSearch />
        <input
          type="search"
          name="location"
          id="location"
          placeholder="Search for a place..."
          autoComplete="off"
          className="w-full focus:outline-none appearance-none placeholder:font-normal placeholder:text-neutral-300"
          value={searchValue}
          onInput={(e) => setSearchValue(e.target.value)}
        />
        <div className="absolute w-full bg-neutral-700 top-14 left-0 rounded-md h-min">
          {isSearchLoading ? (
            <div className="flex items-center py-3 px-4">
              <IconLoading />
              <p className="ml-2 text-sm">Search in progress</p>
            </div>
          ) : (
            <div className="flex flex-col">
              {searchOptions &&
                searchOptions.map((s, i) => {
                  if (i < 5)
                    return (
                      <button
                        key={`option-${i}`}
                        className="rounded-sm my-1 p-2 block text-start hover:bg-neutral-600"
                        onClick={() => handleClick(i)}
                      >{`${searchOptions[i].name}, ${searchOptions[i].country} (${searchOptions[i].admin1})`}</button>
                    );
                })}
            </div>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 py-3 px-6 rounded-md hover:cursor-pointer w-full sm:w-min"
      >
        Search
      </button>
    </form>
  );
}
