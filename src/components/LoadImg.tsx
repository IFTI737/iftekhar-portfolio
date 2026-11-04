"use client";
import { useEffect, useRef, useState } from "react";

/**
 * <img> that fades in once loaded. Its container should have the `skel` class:
 * the container shows a shimmering skeleton until the image is ready
 * (CSS: .skel:has(img[data-loaded]) turns the shimmer off).
 */
export default function LoadImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // images that finished loading before React hydrated never fire onLoad again
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img
      ref={ref}
      {...props}
      className={`limg ${props.className ?? ""}`}
      data-loaded={loaded ? "" : undefined}
      onLoad={(e) => {
        setLoaded(true);
        props.onLoad?.(e);
      }}
      onError={(e) => {
        setLoaded(true); // stop the shimmer; the alt text shows instead
        props.onError?.(e);
      }}
    />
  );
}
