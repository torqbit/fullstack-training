import React from "react";

interface CountdownButtonProps {
  onComplete: () => void;
  duration?: number;
  text: string;
}

const CountdownButton: React.FC<CountdownButtonProps> = ({
  onComplete,
  duration = 5, // Default 5 seconds countdown
  text,
}) => {
  // TODO: Implement countdown functionality
  // - Set up countdown timer
  // - Update countdown display
  // - Handle button disable state
  // - Execute onComplete callback
  // - Clean up on unmount

  return (
    <button
      className='countdown-button'
      disabled={false} // TODO: Implement disable logic
      onClick={onComplete}>
      {text}
    </button>
  );
};

export default CountdownButton;
