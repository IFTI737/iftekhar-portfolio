"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { sections, socials } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = sections.findIndex((s) => s.id === e.target.id);
            if (i >= 0) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = sections.slice(1);
  const p = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      <header className={`nav ${scrolled || open ? "scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <Link href="/#home" className="logo" onClick={() => setOpen(false)} aria-label="Iftekhar, home">
            Iftekhar<span>.dev</span>
          </Link>
          <nav className="nav-links" aria-label="Main">
            {links.map((s, i) => (
              <Link key={s.id} href={`/#${s.id}`} className={onHome && active === i + 1 ? "active" : ""}>
                {s.label}
              </Link>
            ))}
          </nav>
          <div className="mono counter" aria-hidden="true">
            <b>{p(active + 1)}</b> / {p(sections.length)}
          </div>
          <Link href="/#contact" className="btn btn-primary nav-cta">
            Let&apos;s talk
          </Link>
          <button
            className={`burger ${open ? "open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobile">
          {sections.map((s, i) => (
            <Link key={s.id} href={`/#${s.id}`} onClick={() => setOpen(false)}>
              <small>{p(i + 1)}</small>
              {s.label}
            </Link>
          ))}
        </nav>
        <div className="socials">
          {socials.slice(0, 3).map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener" className="mono muted" style={{ marginRight: 18 }}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
