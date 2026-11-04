export type ThemePref = "auto" | "light" | "dark";
export const THEME_KEY = "theme";

/**
 * Runs inline in <head> before the page paints, so the saved theme is applied
 * with no flash. Kept as a plain string: it must not depend on React.
 */
export const themeInitScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var p=localStorage.getItem('${"theme"}');if(p!=='light'&&p!=='dark')p='auto';var t=p==='auto'?(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'):p;d.dataset.theme=t;d.dataset.themePref=p;}catch(e){d.dataset.theme='dark';d.dataset.themePref='auto';}})();`;

export function resolveTheme(pref: ThemePref): "light" | "dark" {
  if (pref !== "auto") return pref;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function applyTheme(pref: ThemePref) {
  const d = document.documentElement;
  d.dataset.theme = resolveTheme(pref);
  d.dataset.themePref = pref;
  try {
    localStorage.setItem(THEME_KEY, pref);
  } catch {
    /* private mode: theme still applies for this visit */
  }
}
