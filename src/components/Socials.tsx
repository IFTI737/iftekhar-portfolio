import { socials } from "@/data/site";
import Icon from "./Icon";

export default function Socials() {
  return (
    <div className="socials">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          className="icon-btn"
          target={s.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener"
          aria-label={s.label}
        >
          <Icon name={s.icon} />
          <span className="tip">{s.label}</span>
        </a>
      ))}
    </div>
  );
}
