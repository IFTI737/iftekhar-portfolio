"use client";
import { useEffect, useRef } from "react";

/**
 * mode "timecode": time on page as HH:MM:SS:FF. mode "local": Dhaka time.
 * Writes straight to the DOM (no React re-render) and pauses when off-screen or the tab is hidden.
 */
export default function Clock({ mode }: { mode: "timecode" | "local" }) {
  const el = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = el.current;
    if (!node) return;
    const start = performance.now();
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Dhaka",
    });
    const p = (n: number) => String(n).padStart(2, "0");
    let last = "";
    const tick = () => {
      let text: string;
      if (mode === "timecode") {
        const ms = performance.now() - start;
        const f = Math.floor((ms % 1000) / (1000 / 24));
        const s = Math.floor(ms / 1000);
        text = `${p(Math.floor(s / 3600))}:${p(Math.floor(s / 60) % 60)}:${p(s % 60)}:${p(f)}`;
      } else {
        text = `${fmt.format(new Date())} in Dhaka`;
      }
      if (text !== last) {
        node.textContent = text;
        last = text;
      }
    };
    let id: ReturnType<typeof setInterval> | null = null;
    let visible = true;
    const run = () => {
      if (id === null && visible && !document.hidden) {
        tick();
        id = setInterval(tick, mode === "timecode" ? 1000 / 12 : 15000);
      }
    };
    const stop = () => {
      if (id !== null) clearInterval(id);
      id = null;
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) run();
      else stop();
    });
    io.observe(node);
    const onVis = () => (document.hidden ? stop() : run());
    document.addEventListener("visibilitychange", onVis);
    run();
    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [mode]);
  return (
    <span ref={el} suppressHydrationWarning>
      {mode === "timecode" ? "00:00:00:00" : "--:-- --"}
    </span>
  );
}
