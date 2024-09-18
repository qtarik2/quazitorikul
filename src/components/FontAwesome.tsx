import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";

interface Props {
  className?: string;
  icon: IconProp;
  size?: SizeProp;
  styleSheet?: CSSProperties;
  isHovered?: boolean; // Add this prop,
}

function GetFontAwesomeIcon({
  className = "",
  icon,
  size,
  styleSheet,
  isHovered,
}: Props) {
  return (
    <>
      <FontAwesomeIcon
        className={`icon ${className}`}
        icon={icon}
        size={size}
        style={{
          ...styleSheet,
          color: isHovered ? "white" : styleSheet?.color,
          transition: "color 0.3s ease", // Add transition effect
        }} // Adjust color based on hover state
      />
    </>
  );
}

export default GetFontAwesomeIcon;
