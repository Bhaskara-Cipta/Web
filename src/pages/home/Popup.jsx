import React from "react";

function Popup({ message, data, bgColor, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`py-4 w-[1000px] relative rounded-lg shadow-lg ${bgColor}`}
      >
        <h1 className="mb-4 pb-3 pl-12 w-full text-white font-medium border-b-2 border-white">
          {message}
        </h1>
        <ul className="text-white pl-12">{data}</ul>
        <button
          onClick={onClose}
          className={`${bgColor} text-white py-2 px-4 rounded-lg absolute right-0 top-0`}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Popup;
