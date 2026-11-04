"use client";
import { useEffect, useRef, useState } from "react";

/** Scroll progress bar, custom cursor and toast host. */
export default function Effects() {
  const bar = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [msg, setMsg] = useState<string | null>(null);

  // progress bar: one transform update per frame, only while scrolling
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // cursor: the animation loop runs only while the ring is catching up
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    document.documentElement.classList.add("has-cursor");
    let x = -100, y = -100, rx = -100, ry = -100;
    let raf = 0;
    let state = "";
    const loop = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      if (Math.abs(x - rx) < 0.1 && Math.abs(y - ry) < 0.1) {
        rx = x;
        ry = y;
      }
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = rx === x && ry === y ? 0 : requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const t = e.target as Element | null;
      const next = t?.closest("[data-cursor='view']")
        ? "view"
        : t?.closest("a, button, input, textarea, [data-cursor='hover']")
          ? "hover"
          : "";
      if (next !== state && ring.current && dot.current) {
        state = next;
        ring.current.classList.toggle("view", next === "view");
        ring.current.classList.toggle("hover", next === "hover");
        dot.current.classList.toggle("hide", next === "view");
      }
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const leave = () => {
      x = y = -200;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  // toasts
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const on = (e: Event) => {
      setMsg((e as CustomEvent<string>).detail);
      clearTimeout(t);
      t = setTimeout(() => setMsg(null), 3200);
    };
    window.addEventListener("app:toast", on);
    return () => {
      window.removeEventListener("app:toast", on);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <div ref={bar} className="progress" aria-hidden="true" />
      <div ref={dot} className="cursor" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true">
        <div className="ring" />
        <span>VIEW</span>
      </div>
      <div className={`toast ${msg ? "show" : ""}`} role="status" aria-live="polite">
        {msg}
      </div>
    </>
  );
}
