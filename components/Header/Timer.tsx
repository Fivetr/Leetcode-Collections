import React from "react";
import { useState } from "react";
import { FcAlarmClock } from "react-icons/fc";

function Timer() {
  const [TimerOpen, setTimerOpen] = useState(false);
  return (
    <div>
      {TimerOpen ? (
        <div>10:00</div>
      ) : (
        <div className="cursor-pointer text-2xl hover:scale-110">
          <FcAlarmClock />
        </div>
      )}
    </div>
  );
}

export default Timer;
