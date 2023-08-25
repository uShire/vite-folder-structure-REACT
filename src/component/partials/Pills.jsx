import React from "react";

function Pills({ label, bgc }) {
  return (
    <span
      className={`${bgc} text-[10px] bg-green-800 
      text-center rounded-full py-1 px-3 text-white`}
    >
      {label}
    </span>
  );
}

export default Pills;
