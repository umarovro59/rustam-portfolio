"use client";

import { useEffect, useState } from "react";

type ClockTime = {
  hours: string;
  minutes: string;
  seconds: string;
};

function formatTime(date: Date): ClockTime {
  return {
    hours: String(date.getHours()).padStart(2, "0"),
    minutes: String(date.getMinutes()).padStart(2, "0"),
    seconds: String(date.getSeconds()).padStart(2, "0"),
  };
}

function formatDate(date: Date): string {
  return [
    String(date.getDate()).padStart(2, "0"),
    String(date.getMonth() + 1).padStart(2, "0"),
    date.getFullYear(),
  ].join(".");
}

export function LiveClock() {
  const [time, setTime] = useState<ClockTime>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [date, setDate] = useState("00.00.0000");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(formatTime(now));
      setDate(formatDate(now));
    };

    updateTime();
    const intervalId = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="hero-clock">
      <time
        className="hero-clock-time"
        dateTime={`${time.hours}:${time.minutes}:${time.seconds}`}
        aria-label={`Local time ${time.hours}:${time.minutes}:${time.seconds}`}
      >
        <span className="hero-clock-group">{time.hours}</span>
        <span className="hero-clock-separator" aria-hidden="true">
          :
        </span>
        <span className="hero-clock-group">{time.minutes}</span>
        <span className="hero-clock-separator" aria-hidden="true">
          :
        </span>
        <span key={time.seconds} className="hero-clock-seconds">
          {time.seconds}
        </span>
      </time>
      <time className="hero-clock-date" dateTime={date.split(".").reverse().join("-")}>
        {date}
      </time>
    </div>
  );
}
