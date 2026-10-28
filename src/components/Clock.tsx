"use client";
import { useEffect, useState } from "react";

/** mode "timecode": time on page as HH:MM:SS:FF. mode "local": Dhaka time. */
export default function Clock({ mode }: { mode: "timecode" | "local" }) {
  const [text, setText] = useState(mode === "timecode" ? "00:00:00:00" : "--:-- --");
  useEffect(() => {
    const start = performance.now();
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Dhaka",
    });
    const tick = () => {
      if (mode === "timecode") {
        const ms = performance.now() - start;
        const f = Math.floor((ms % 1000) / (1000 / 24));
        const s = Math.floor(ms / 1000);
        const p = (n: number) => String(n).padStart(2, "0");
        setText(`${p(Math.floor(s / 3600))}:${p(Math.floor(s / 60) % 60)}:${p(s % 60)}:${p(f)}`);
      } else {
        setText(`${fmt.format(new Date())} in Dhaka`);
      }
    };
    tick();
    const id = setInterval(tick, mode === "timecode" ? 42 : 10000);
    return () => clearInterval(id);
  }, [mode]);
  return <span suppressHydrationWarning>{text}</span>;
}
