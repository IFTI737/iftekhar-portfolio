"use client";
import Link from "next/link";
import { useRef } from "react";
import { profile, sections } from "@/data/site";
import Clock from "./Clock";
import Icon from "./Icon";

export default function Footer() {
  const giant = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const onMove = (e: React.PointerEvent) => {
    const cx = e.clientX;
    const cy = e.clientY;
    if (frame.current) return; // at most one update per frame
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const el = giant.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${cx - r.left}px`);
      el.style.setProperty("--my", `${cy - r.top}px`);
    });
  };
  return (
    <footer className="footer" onPointerMove={onMove}>
      <div className="wrap">
        <div className="f-row">
          <nav className="f-links mono" aria-label="Footer">
            {sections.slice(1).map((s) => (
              <Link key={s.id} href={`/#${s.id}`}>{s.label}</Link>
            ))}
          </nav>
          <span className="mono"><Clock mode="local" /></span>
          <button className="to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Icon name="up" size={22} />
          </button>
        </div>
      </div>
      <div ref={giant} className="giant" aria-hidden="true">{profile.shortName}</div>
      <div className="wrap">
        <div className="f-bottom mono">
          <span>© 2026 {profile.name}</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
