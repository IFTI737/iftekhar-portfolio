"use client";
import { useEffect, useRef, useState } from "react";

/** Scroll progress bar, custom cursor and toast host. */
export default function Effects() {
  const bar = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [msg, setMsg] = useState<string | null>(null);

  // progress bar
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? window.scrollY / h : 0;
        if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // cursor
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    document.documentElement.classList.add("has-cursor");
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as HTMLElement | null;
      const view = t?.closest("[data-cursor='view']");
      const hover = t?.closest("a, button, input, textarea, [data-cursor='hover']");
      const r = ring.current;
      if (!r) return;
      r.classList.toggle("view", !!view);
      r.classList.toggle("hover", !view && !!hover);
      dot.current?.classList.toggle("hide", !!view);
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    const leave = () => { x = y = -200; };
    window.addEventListener("pointermove", move);
    document.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(loop);
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
        <span>VIEW</span>
      </div>
      <div className={`toast ${msg ? "show" : ""}`} role="status" aria-live="polite">
        {msg}
      </div>
    </>
  );
}
