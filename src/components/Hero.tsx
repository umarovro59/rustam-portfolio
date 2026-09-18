"use client";

import { LiveClock } from "@/components/LiveClock";
import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";

const ambientDots = [
  { x: 0.08, y: 0.18, duration: "8.4s", delay: "-2.1s" },
  { x: 0.19, y: 0.72, duration: "10.2s", delay: "-7.4s" },
  { x: 0.31, y: 0.37, duration: "7.6s", delay: "-4.8s" },
  { x: 0.43, y: 0.84, duration: "9.7s", delay: "-1.3s" },
  { x: 0.56, y: 0.22, duration: "11.1s", delay: "-8.6s" },
  { x: 0.68, y: 0.63, duration: "8.9s", delay: "-5.5s" },
  { x: 0.77, y: 0.14, duration: "10.6s", delay: "-3.2s" },
  { x: 0.87, y: 0.46, duration: "7.9s", delay: "-6.7s" },
  { x: 0.93, y: 0.78, duration: "9.3s", delay: "-2.8s" },
  { x: 0.13, y: 0.49, duration: "11.4s", delay: "-9.1s" },
] as const;

type DotPosition = { x: number; y: number };

export function Hero({
  copy,
}: {
  copy: {
    kicker: string;
    kickerDetail: string;
    role: string;
    title: string;
    body: string;
    cta: string;
  };
}) {
  const heroRef = useRef<HTMLElement>(null);
  const [dotPositions, setDotPositions] = useState<DotPosition[]>([]);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const shell = hero?.closest<HTMLElement>(".hero-shell");
    if (!hero || !shell) return;

    let frame = 0;
    const updateDotPositions = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const heroRect = hero.getBoundingClientRect();
        const shellRect = shell.getBoundingClientRect();
        const shellStyle = window.getComputedStyle(shell);
        const step = Number.parseFloat(
          shellStyle.getPropertyValue("--dot-grid-step"),
        );
        const offsetX = Number.parseFloat(
          shellStyle.getPropertyValue("--dot-grid-offset-x"),
        );
        const offsetY = Number.parseFloat(
          shellStyle.getPropertyValue("--dot-grid-offset-y"),
        );
        const originX = offsetX + step / 2;
        const originY = offsetY + step / 2;
        const heroOffsetX = heroRect.left - shellRect.left;
        const heroOffsetY = heroRect.top - shellRect.top;

        setDotPositions(
          ambientDots.map((dot) => {
            const targetX = heroOffsetX + heroRect.width * dot.x;
            const targetY = heroOffsetY + heroRect.height * dot.y;
            const column = Math.round((targetX - originX) / step);
            const row = Math.round((targetY - originY) / step);

            return {
              x: originX + column * step - heroOffsetX,
              y: originY + row * step - heroOffsetY,
            };
          }),
        );
      });
    };

    updateDotPositions();
    const observer = new ResizeObserver(updateDotPositions);
    observer.observe(hero);
    observer.observe(shell);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero section-grid"
      aria-labelledby="hero-title"
    >
      <div className="hero-ambient-dots" aria-hidden="true">
        {dotPositions.map((position, index) => (
          <span
            className="hero-ambient-dot"
            key={`${ambientDots[index].x}-${ambientDots[index].y}`}
            style={
              {
                "--dot-x": `${position.x}px`,
                "--dot-y": `${position.y}px`,
                "--dot-duration": ambientDots[index].duration,
                "--dot-delay": ambientDots[index].delay,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="hero-kicker hero-type-kicker">
        {copy.kicker} <span>{copy.kickerDetail}</span>
        <LiveClock />
      </div>
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title hero-type-title">
          {copy.title}
        </h1>
        <div className="hero-foot">
          <p className="hero-type-body">{copy.body}</p>
          <a className="text-link hero-type-cta" href="#work">
            {copy.cta} <span aria-hidden="true">&#8595;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
