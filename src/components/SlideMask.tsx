import React from "react";
import { View } from "vcc-ui";

const SlideMask = ({ handleSlide }: { handleSlide: Function }) => {
  let xCoordinate: null | number = null;

  /**
   * Touch event handler for touchStart event on mobile devices or any touch devices
   * @param event
   */
  const handleTouchStart = (event: React.TouchEvent) => {
    event.preventDefault();
    const { clientX } = event.touches.item(0);
    xCoordinate = clientX;
  };

  /**
   * Touch event handler for touchMove/end event on mobile devices or any touch devices
   * @param event
   */
  const handleTouchMove = (event: React.TouchEvent) => {
    event.preventDefault();
    const { clientX } = event.touches.item(0);

    if (xCoordinate) {
      if (xCoordinate - clientX > 0) {
        handleSlide("right");
      } else {
        handleSlide("left");
      }
    }
  };

  return (
    <View
      as="div"
      className="mobile-mask"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    />
  );
};
export default SlideMask;
