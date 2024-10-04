import React, { useState, useRef } from "react";
import styled from "styled-components";
import { DragHandle } from "@mui/icons-material"; // Example icon from Material UI
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';// Wrapper for the two images
const ImageWrapper = styled.div`
  position: relative;
  width: 500px; /* Adjust as needed */
  height: 300px; /* Adjust as needed */
  overflow: hidden;
  border: 1px solid #000;
  cursor: pointer;
`;

// First Image (Initial Image)
const FirstImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: clip-path 0.1s ease-out;
  clip-path: ${(props) => props.clipPath}; /* Dynamic clip-path based on mouse position */
`;

// Second Image (Hidden Initially)
const SecondImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Central Line (moves with mouse)
const CentralLine = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.left}px; /* Dynamic left position based on mouse X-axis */
  width: 4px;
  height: 100%;
  background-color: white;
  pointer-events: none;
`;

// Draggable Icon (centered on the line)
const DragIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-46%, -50%);
  cursor: grab;
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  pointer-events: auto; /* Allow pointer interaction with the icon */
`;

const ClickAndDragWithIcon = () => {
  const [mousePosition, setMousePosition] = useState(250); // Default center position
  const [isDragging, setIsDragging] = useState(false); // Track if user is dragging
  const imageWrapperRef = useRef(null);

  // Handle mouse down event to start dragging (only on the icon)
  const handleMouseDown = (e) => {
    setIsDragging(true); // Enable dragging
    e.preventDefault(); // Prevent default behavior
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false); // Disable dragging
  };

  // Handle mouse move event to update position while dragging
  const handleMouseMove = (e) => {
    if (isDragging && imageWrapperRef.current) {
      const rect = imageWrapperRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // Get mouse X position relative to the container
      if (x >= 0 && x <= rect.width) {
        setMousePosition(x); // Update the state with the current mouse X position
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <ImageWrapper
        ref={imageWrapperRef}
        onMouseMove={handleMouseMove} // Handle movement
        onMouseUp={handleMouseUp} // Stop dragging
        onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the container
      >
          <SecondImage
            src="https://via.placeholder.com/500x300?text=Second+Image"
            alt="Second Image"
          />
        <FirstImage
          src="https://via.placeholder.com/500x300?text=First+Image"
          alt="First Image"
          clipPath={`polygon(0 0, ${mousePosition}px 0, ${mousePosition}px 100%, 0 100%)`} // Clip the image based on mouse X position
        />


        <CentralLine left={mousePosition} />
        
        {/* Icon placed on the center of the line */}
        <DragIcon
          style={{ left: `${mousePosition}px` }}
          onMouseDown={handleMouseDown} // Start dragging only when clicking the icon
        >
          <SwapHorizIcon />
        </DragIcon>
      </ImageWrapper>
    </div>
  );
};

export default ClickAndDragWithIcon;
