import React, { useRef, useEffect, useState } from "react";

export const Stopwatch: React.FC = () => {
  
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  
  const formatTime = (timeInSeconds: number): string => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

};


  
  const handleStart = (): void => {
    if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        setIsRunning(true)
    }
    
  };

  
  const handleStop = (): void => {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false)
    }
  };


  const handleReset = (): void => {
    handleStop();
    setTime(0);
  };

  
  useEffect(() => {
    if (!intervalRef.current) { 
        intervalRef.current = setInterval(() => {
            setTime(time+1);
        }, 1000);
    }

    return () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
  }, []);

  return (
    <div>
      <h2>Stopwatch</h2>
      <div className='time-display'>{formatTime(time)}</div>
      <div className='controls'>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};