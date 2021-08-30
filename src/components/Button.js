import React from "react"

const Button = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    className
  }) => { 
  return (
    <button className={className}
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    {children}
    </button>
  );
}

export default Button;