import IconError from "./assets/icon-error.svg?react";
import IconRetry from "./assets/icon-retry.svg?react";

export default function ErrorDisplay() {
  function handleClick() {
    window.location.reload();
  }

  return (
    <div>
      <IconError className="w-10 h-10 mx-auto mt-12" />
      <h1 className="text-5xl font-bold text-center mt-6 leading-normal">
        Something went wrong
      </h1>
      <p className="text-xl text-center my-4">
        We couldn't connect to the sertver (API error). Please try again in a
        few moments.
      </p>
      <button
        className="bg-gray-700 flex gap-2 items-center p-2 rounded-md mx-auto hover:cursor-pointer"
        onClick={handleClick}
      >
        <IconRetry />
        <span>Retry</span>
      </button>
    </div>
  );
}
