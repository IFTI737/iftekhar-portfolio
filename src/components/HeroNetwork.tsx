"use client";
import { useEffect, useRef } from "react";

/**
 * Hero background: small "detection box" squares joined by thin lines.
 * Squares near the cursor light up green with corner brackets, like a detection box,
 * and the whole field leans a little toward the cursor.
 *
 * Performance notes:
 * - one <canvas>, no DOM nodes per dot
 * - lines are batched into 4 opacity buckets, so only a few stroke() calls per frame
 * - the loop stops when the hero is off-screen or the tab is hidden
 * - device pixel ratio is capped, and node count scales with the hero's area
 * - with "reduce motion" on, it draws one still frame
 */
type Node = { x: number; y: number; vx: number; vy: number; s: number };

const LINK = 150; // max distance for a line between two squares
const REACH = 190; // cursor influence radius
const BUCKETS = 4;

export default function HeroNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1;
    let nodes: Node[] = [];
    // cursor in canvas coordinates; far away until the mouse moves
    let mx = -9999, my = -9999;
    // smoothed parallax offset
    let ox = 0, oy = 0, tox = 0, toy = 0;
    let raf = 0;
    let running = false;
    let visible = true;

    const resize = () => {
      const r = host.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width));
      h = Math.max(1, Math.round(r.height));
      // cap the backing store so 4K / high-DPR screens don't paint millions of extra pixels
      dpr = Math.min(window.devicePixelRatio || 1, w * h > 1_500_000 ? 1 : 1.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(18, Math.min(72, Math.round((w * h) / 17000)));
      nodes = Array.from({ length: count }, (_, i) => {
        const old = nodes[i];
        return old && old.x < w && old.y < h
          ? old
          : {
              x: Math.random() * w,
              y: Math.random() * h,
              vx: (Math.random() - 0.5) * 0.22,
              vy: (Math.random() - 0.5) * 0.22,
              s: 5 + Math.random() * 3,
            };
      });
    };

    const paths: Path2D[] = [];
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ox += (tox - ox) * 0.06;
      oy += (toy - oy) * 0.06;

      // move
      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -20) n.x = w + 20;
          else if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h + 20;
          else if (n.y > h + 20) n.y = -20;
        }
      }

      // lines, batched by opacity
      for (let b = 0; b < BUCKETS; b++) paths[b] = new Path2D();
      const near = new Path2D();
      const L2 = LINK * LINK;
      const R2 = REACH * REACH;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const ax = a.x + ox, ay = a.y + oy;
        for (let j = i + 1; j < nodes.length; j++) {
          const c = nodes[j];
          const dx = a.x - c.x, dy = a.y - c.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < L2) {
            const b = Math.min(BUCKETS - 1, Math.floor((d2 / L2) * BUCKETS));
            paths[b].moveTo(ax, ay);
            paths[b].lineTo(c.x + ox, c.y + oy);
          }
        }
        const cx = ax - mx, cy = ay - my;
        if (cx * cx + cy * cy < R2) {
          near.moveTo(ax, ay);
          near.lineTo(mx, my);
        }
      }
      ctx.lineWidth = 1;
      for (let b = 0; b < BUCKETS; b++) {
        ctx.strokeStyle = `rgba(255,138,61,${0.15 - b * 0.033})`;
        ctx.stroke(paths[b]);
      }
      ctx.strokeStyle = "rgba(61,220,132,0.28)";
      ctx.stroke(near);

      // squares
      const plain = new Path2D();
      const hot = new Path2D();
      for (const n of nodes) {
        const x = n.x + ox, y = n.y + oy;
        const dx = x - mx, dy = y - my;
        const half = n.s / 2;
        if (dx * dx + dy * dy < R2) {
          // detection-box look: corner brackets around a slightly bigger box
          const s = n.s + 6, hs = s / 2, k = 3.5;
          const l = x - hs, t = y - hs, r = x + hs, btm = y + hs;
          hot.moveTo(l, t + k); hot.lineTo(l, t); hot.lineTo(l + k, t);
          hot.moveTo(r - k, t); hot.lineTo(r, t); hot.lineTo(r, t + k);
          hot.moveTo(l, btm - k); hot.lineTo(l, btm); hot.lineTo(l + k, btm);
          hot.moveTo(r - k, btm); hot.lineTo(r, btm); hot.lineTo(r, btm - k);
          hot.rect(x - half + 1, y - half + 1, n.s - 2, n.s - 2);
        } else {
          plain.rect(x - half, y - half, n.s, n.s);
        }
      }
      ctx.strokeStyle = "rgba(243,239,232,0.22)";
      ctx.stroke(plain);
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = "rgba(61,220,132,0.9)";
      ctx.stroke(hot);
    };

    const loop = () => {
      draw();
      raf = running ? requestAnimationFrame(loop) : 0;
    };
    const start = () => {
      if (reduce) {
        draw();
        return;
      }
      if (running || !visible || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onMove = (e: PointerEvent) => {
      if (!visible) return;
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      // lean the field up to ~14px toward the cursor
      tox = ((mx / w) - 0.5) * 28;
      toy = ((my / h) - 0.5) * 18;
      if (reduce) draw();
    };
    const onLeave = () => {
      mx = my = -9999;
      tox = toy = 0;
    };
    const onVis = () => (document.hidden ? stop() : start());

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw();
    });
    ro.observe(host);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(host);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVis);
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} className="hero-net" aria-hidden="true" />;
}
