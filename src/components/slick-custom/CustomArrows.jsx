import React from "react";

const CustomArrows = ({ onClick, direction }) => {
  return (
    <button onClick={onClick} className={`custom-arrow ${direction}`}>
      {direction === "prev" ? "" : ""}
    </button>
  );
};

export default CustomArrows;
