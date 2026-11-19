"use client";
import { useState } from "react";

/**
 * YouTube embed that loads nothing from YouTube until the visitor presses play:
 * shows the video's thumbnail with a play button, then swaps in the real player.
 * Keeps the page fast and avoids third-party cookies (youtube-nocookie.com).
 */
export default function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);

  if (playing) {
    return (
      <div className="yt">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button type="button" className="yt yt-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
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
  );
}
