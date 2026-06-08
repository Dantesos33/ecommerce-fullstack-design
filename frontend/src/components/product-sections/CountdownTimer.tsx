"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  endDate: string;
  className?: string;
}

function getTimeLeft(endDate: string): TimeLeft {
  const diff = Math.max(0, new Date(endDate).getTime() - Date.now());

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

const CountdownTimer = ({ endDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft(endDate));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  const display = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const units = [
    { value: display.days, label: "Days", showOnMobile: false },
    { value: display.hours, label: "Hour", showOnMobile: true },
    { value: display.minutes, label: "Min", showOnMobile: true },
    { value: display.seconds, label: "Sec", showOnMobile: true },
  ];

  return (
    <div
      className={`flex items-center gap-2 sm:gap-2.5 ${className}`}
      aria-live="polite"
      aria-label="Sale countdown timer"
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          className={`flex flex-col items-center gap-0.5 sm:gap-1 ${
            unit.showOnMobile ? "flex" : "hidden sm:flex"
          }`}
        >
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-slate-700 text-sm font-bold text-white tabular-nums">
            {pad(unit.value)}
          </span>
          <span className="text-xs text-slate-500 font-medium leading-none">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
