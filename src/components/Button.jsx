import React from 'react'

const Button = ({ name,icon,className,onClick }) => {
  return (
    <div>
      <button
        className={`flex font-semibold bg-[#068a8d] px-2 py-1.5  ${className}`}
        onClick={onClick}
      >
        {name}
        <span className=" py-1  ">{icon}</span>
      </button>
    </div>
  );
};

export default Button