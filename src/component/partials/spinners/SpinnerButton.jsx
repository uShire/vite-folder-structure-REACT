import React from "react";

function SpinnerButton({ color = "stroke-white" }) {
  return (
    <div className="flex justify-center items-center flex-col text-center rounded-full">
      {" "}
      <svg
        className="spinner"
        width="40"
        height="40"
        viewBox="0 0 50 50"
        role="img"
      >
        <title>Loading, please wait...</title>{" "}
        <circle
          className={`path ${color}`}
          cx="25"
          cy="25"
          r="12"
          fill="none"
          strokeWidth="3"
        ></circle>{" "}
      </svg>{" "}
    </div>
  );
}

export default SpinnerButton;
