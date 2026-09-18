import { LiveClock } from "@/components/LiveClock";
import type { CSSProperties } from "react";

const ambientDots = [
  { x: "8%", y: "18%", duration: "8.4s", delay: "-2.1s" },
  { x: "19%", y: "72%", duration: "10.2s", delay: "-7.4s" },
  { x: "31%", y: "37%", duration: "7.6s", delay: "-4.8s" },
  { x: "43%", y: "84%", duration: "9.7s", delay: "-1.3s" },
  { x: "56%", y: "22%", duration: "11.1s", delay: "-8.6s" },
  { x: "68%", y: "63%", duration: "8.9s", delay: "-5.5s" },
  { x: "77%", y: "14%", duration: "10.6s", delay: "-3.2s" },
  { x: "87%", y: "46%", duration: "7.9s", delay: "-6.7s" },
  { x: "93%", y: "78%", duration: "9.3s", delay: "-2.8s" },
  { x: "13%", y: "49%", duration: "11.4s", delay: "-9.1s" },
] as const;

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
  return (
    <section className="hero section-grid" aria-labelledby="hero-title">
      <div className="hero-ambient-dots" aria-hidden="true">
        {ambientDots.map((dot, index) => (
          <span
            className="hero-ambient-dot"
            key={`${dot.x}-${dot.y}`}
            style={
              {
                "--dot-x": dot.x,
                "--dot-y": dot.y,
                "--dot-duration": dot.duration,
                "--dot-delay": dot.delay,
                "--dot-index": index,
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
