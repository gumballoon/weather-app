import IconCheckmark from "./assets/icon-checkmark.svg?react";

export default function UnitForm({
  title,
  name,
  unitOneValue,
  unitOneText,
  unitTwoValue,
  unitTwoText,
  currentUnit,
  setCurrentUnit,
}) {
  const isOneChecked = unitOneValue === currentUnit;
  const isTwoChecked = unitTwoValue === currentUnit;

  return (
    <form
      action="#"
      className="UnitForm flex flex-col items-start border-t-1 border-neutral-600 pt-2"
    >
      <span className="text-gray-400 text-sm px-1 capitalize font-light">
        {title}
      </span>
      <button
        className={`flex items-center px-2 py-2 w-full text-start rounded-md ${isOneChecked && "bg-neutral-600"}`}
      >
        <input
          type="radio"
          name={name}
          id={unitOneValue}
          value={unitOneValue}
          checked={isOneChecked ? true : false}
          onChange={() => setCurrentUnit(name, unitOneValue)}
          className="appearance-none"
        />
        <label htmlFor={unitOneValue} className="w-full hover:cursor-pointer">
          {unitOneText}
        </label>
        <IconCheckmark className={`ml-auto ${!isOneChecked && "hidden"}`} />
      </button>
      <button
        className={`flex items-center px-2 py-2 w-full text-start rounded-md ${isTwoChecked && "bg-neutral-600"}`}
      >
        <input
          type="radio"
          name={name}
          id={unitTwoValue}
          value={unitTwoValue}
          checked={isTwoChecked ? true : false}
          onChange={() => setCurrentUnit(name, unitTwoValue)}
          className="appearance-none"
        />
        <label htmlFor={unitTwoValue} className="w-full hover:cursor-pointer">
          {unitTwoText}
        </label>
        <IconCheckmark className={`ml-auto ${!isTwoChecked && "hidden"}`} />
      </button>
    </form>
  );
}
