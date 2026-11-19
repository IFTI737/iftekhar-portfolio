"use client";
import { useEffect, useRef, useState } from "react";

/**
 * YouTube embed that loads nothing from YouTube until the visitor presses play:
 * shows the video's thumbnail with a play button, then swaps in the real player.
 *
 * Playback rules:
 * - Scrolling the video out of view pauses it.
 * - Leaving the page stops it and puts the thumbnail back. With Next.js
 *   cacheComponents, a page you leave is kept hidden instead of removed, so a
 *   playing iframe would otherwise keep playing (and could autoplay again).
 */
export default function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  const wrap = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);

  const command = (func: "pauseVideo" | "stopVideo") => {
    frame.current?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");
  };

  useEffect(() => {
    if (!playing) return;
    const el = wrap.current;
    // pause when scrolled out of view
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) command("pauseVideo");
    }, { threshold: 0.15 });
    if (el) io.observe(el);
    const iframe = frame.current;
    return () => {
      io.disconnect();
      // page hidden or left: stop and unload the player, show the thumbnail again
      command("stopVideo");
      if (iframe) iframe.src = "about:blank";
      setPlaying(false);
    };
  }, [playing]);

  return (
    <div ref={wrap} className="yt">
      {playing ? (
        <iframe
          ref={frame}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" className="yt-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt=""
            loading="lazy"
            onError={() => setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
          />
          <span className="yt-play" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5.5v13l11-6.5z" /></svg>
          </span>
        </button>
      )}
    </div>
  );
}
