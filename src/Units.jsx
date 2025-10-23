import UnitForm from "./UnitForm";
import { useEffect, useState } from "react";

import IconUnits from "./assets/icon-units.svg?react";
import IconDropdown from "./assets/icon-dropdown.svg?react";

export default function Units({ units, setUnits }) {
  // to keep the units window open as the component rerenders
  const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("isDropdownVisible"));
    if (!data) return false;
    else return data;
  };
  const [isDropdownVisible, setIsDropdownVisible] = useState(getInitialData);
  useEffect(() => {
    localStorage.setItem(
      "isDropdownVisible",
      JSON.stringify(isDropdownVisible)
    );
  }, [isDropdownVisible]);

  function setCurrentUnit(unit, value) {
    setUnits((oldUnits) => {
      const newUnits = { ...oldUnits, [unit]: value };
      return newUnits;
    });
  }

  function setImperialUnits() {
    setUnits({
      temperature: "celsius",
      wind: "kmh",
      precipitation: "mm",
    });
  }

  return (
    <div className="relative z-10">
      <button
        className="flex items-center bg-neutral-700 py-2 px-4 h-min rounded-md hover:cursor-pointer"
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <IconUnits />
        <span className="mx-2">Units</span>
        <IconDropdown />
      </button>
      {isDropdownVisible && (
        <div className="absolute top-12 right-0 w-60 bg-neutral-700 p-2 rounded-md">
          <button
            className="w-full text-left px-2 py-2 rounded-md border-1 border-transparent hover:cursor-pointer hover:bg-neutral-600"
            onClick={setImperialUnits}
          >
            Switch to Imperial
          </button>

          <UnitForm
            title={"temperature"}
            name={"temperature"}
            unitOneValue={"celsius"}
            unitOneText={"Celsius (°C)"}
            unitTwoValue={"fahrenheit"}
            unitTwoText={"Fahrenheit (°F)"}
            currentUnit={units.temperature}
            setCurrentUnit={setCurrentUnit}
          />

          <UnitForm
            title={"wind speed"}
            name={"wind"}
            unitOneValue={"kmh"}
            unitOneText={"km/h"}
            unitTwoValue={"mph"}
            unitTwoText={"mph"}
            currentUnit={units.wind}
            setCurrentUnit={setCurrentUnit}
          />

          <UnitForm
            title={"precipitation"}
            name={"precipitation"}
            unitOneValue={"mm"}
            unitOneText={"Millimeters (mm)"}
            unitTwoValue={"inch"}
            unitTwoText={"Inches (in)"}
            currentUnit={units.precipitation}
            setCurrentUnit={setCurrentUnit}
          />
        </div>
      )}
    </div>
  );
}
