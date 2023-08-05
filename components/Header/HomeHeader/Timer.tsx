"use client";

import React from "react";
import { useState, useEffect } from "react";
import { FcAlarmClock } from "react-icons/fc";
import { FiRefreshCcw } from "react-icons/fi";

function Timer() {
  const [TimerOpen, setTimerOpen] = useState(false);
  const [time, setTime] = useState<number>(0);

  const handleClick = () => {
    setTimerOpen(false);
    setTime(0);
  };

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (TimerOpen) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [TimerOpen]);

  return (
    <div>
      {TimerOpen ? (
        <div className="flex cursor-pointer items-center space-x-2 rounded border bg-gray-100 px-3 py-1">
          <div>{formatTime(time)}</div>
          <FiRefreshCcw onClick={handleClick} />
        </div>
      ) : (
        <div
          className="cursor-pointer text-xl hover:scale-110"
          onClick={() => setTimerOpen(true)}
        >
          <FcAlarmClock />
        </div>
      )}
    </div>
  );
}

export default Timer;
