import React from "react";

const Alert = ({ type, msg }) => {
  return (
    <div className="absolute left-0 right-0 top-10 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-500" : "bg-green-500"
        } py-2 px-3 rounded-full text-white leading-none flex items-center`}
        role="alert"
      >
        {/* {text} */}
        <p
          className={`${
            type === "danger" ? "bg-red-800" : "bg-green-800"
          } flex rounded-full uppercase px-2 py-1 font-semibold text-xs mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{msg}</p>
      </div>
    </div>
  );
};

export default Alert;
