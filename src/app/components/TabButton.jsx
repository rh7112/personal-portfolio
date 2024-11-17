import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-green-700 border-b border-orange-700"
    : "text-green-500";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-green-700 ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
