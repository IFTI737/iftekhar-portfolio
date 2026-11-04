"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { applyTheme, type ThemePref } from "./theme";

const OPTIONS: { value: ThemePref; label: string; icon: string }[] = [
  { value: "auto", label: "Auto (match device)", icon: "monitor" },
  { value: "light", label: "Light", icon: "sun" },
  { value: "dark", label: "Dark", icon: "moon" },
];

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [pref, setPref] = useState<ThemePref>("auto");

  // read what the head script applied
  useEffect(() => {
    const p = document.documentElement.dataset.themePref as ThemePref | undefined;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing with the DOM set before hydration
    if (p) setPref(p);
  }, []);

  // in Auto, follow the device when it switches between light and dark
  useEffect(() => {
    if (pref !== "auto") return;
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => applyTheme("auto");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [pref]);

  const choose = (p: ThemePref) => {
    setPref(p);
    applyTheme(p);
  };

  return (
    <div className={`theme-toggle ${className}`} role="radiogroup" aria-label="Colour theme">
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={pref === o.value}
          aria-label={o.label}
          title={o.label}
          className={pref === o.value ? "on" : ""}
          onClick={() => choose(o.value)}
        >
          <Icon name={o.icon} size={16} />
        </button>
      ))}
    </div>
  );
}
