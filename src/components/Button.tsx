import { CSSProperties, ReactElement, ReactNode, useState } from "react";
import React from "react";

interface Props {
  children: ReactNode; // Accept JSX as children
  btnColor?: string; // Optional Bootstrap button color class
  textColor?: string; // Optional text color
  styleSheet?: CSSProperties; // Allow passing inline styles as a CSSProperties object
  onClick: () => void; // Function to handle button click
  className?: string;
}

const Button = ({
  children,
  btnColor = "transparent",
  textColor = "white",
  onClick,
  styleSheet, // Now treated as inline styles
  className = "",
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const classes = styleSheet
    ? `btn ${className}`
    : `btn ${className} btn-${btnColor} text-${textColor}`;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      type="button"
      className={classes}
      style={{
        ...styleSheet,
        color: isHovered ? "white" : styleSheet?.color || textColor,
        transition: isHovered
          ? "color 0.3s ease, background-color 0.3s ease"
          : "none", // Add transition effect
        // backgroundColor: isHovered ? "#e29ba7" : "transparent",
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* {children} */}
      {React.Children.map(children, (child) => {
        if (child && typeof child === "object" && "props" in child) {
          // Ensure we're passing isHovered to FontAwesomeIcon, if present
          const childArray = child.props.children;

          if (childArray && Array.isArray(childArray)) {
            return React.Children.map(childArray, (c) => {
              if (c && c.type && c.type.name === "GetFontAwesomeIcon") {
                
                return React.cloneElement(c as ReactElement, { isHovered });
              }
              return c;
            });
          }
        }
        return child;
      })}
    </button>
  );
};

export default Button;
