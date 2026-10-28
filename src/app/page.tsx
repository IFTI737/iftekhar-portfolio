import Link from "next/link";
import {
  about,
  education,
  experience,
  levelLabel,
  profile,
  projects,
  research,
  skillGroups,
} from "@/data/site";
import Clock from "@/components/Clock";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ResumeButton from "@/components/ResumeButton";
import Socials from "@/components/Socials";
import { ContactForm, ContactList } from "@/components/Contact";

function SectionHead({ n, label, title, lede }: { n: string; label: string; title: string; lede?: string }) {
  return (
    <Reveal className="sec-head">
      <div className="sec-index mono">
        <b>{n}</b> {label}
      </div>
      <h2 className="display sec-title">{title}</h2>
      {lede && <p className="sec-lede">{lede}</p>}
    </Reveal>
  );
}

export default function Home() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="hero">
        <div className="hero-glow" />
        <div className="wrap" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div className="meta-row mono">
            <Clock mode="timecode" />
            <span className="hide-sm">Scroll to explore</span>
            <span>
              <i className="live-dot" />
              {profile.location} — {profile.status}
            </span>
          </div>

          <div className="hero-grid">
            <div>
              <div className="rec mono fade-in">
                <i /> REC · {profile.designation}
              </div>
              <h1 className="display hero-name" aria-label={profile.name}>
                <span className="line"><span>{first}</span></span>
                <span className="line"><span>{rest.join(" ")}</span></span>
              </h1>
              <p className="designation fade-in" style={{ animationDelay: ".3s" }}>
                {profile.designation} <em>& {profile.secondary}</em>
              </p>
              <p className="hero-intro fade-in" style={{ animationDelay: ".4s" }}>{profile.intro}</p>
              <div className="fade-in" style={{ animationDelay: ".5s" }}>
                <Socials />
              </div>
              <div className="hero-actions fade-in" style={{ animationDelay: ".6s" }}>
                <ResumeButton />
                <Link href="/#projects" className="btn btn-light">
                  See my work
                  <span className="dot"><Icon name="arrow" size={18} /></span>
                </Link>
                <Link href="/#contact" className="btn btn-ghost">Say hello</Link>
              </div>
            </div>

            <div className="feed fade-in" style={{ animationDelay: ".2s" }}>
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
              ) : (
                <div className="placeholder">
                  <div>
                    <div className="initials">IBS</div>
                    <p className="mono" style={{ marginTop: 18 }}>Photo coming soon</p>
                  </div>
                </div>
              )}
              <div className="scan" />
              <div className="corner c1" /><div className="corner c2" />
              <div className="corner c3" /><div className="corner c4" />
              <div className="hud top mono"><span>CAM 01 · DHAKA</span><span>1080p</span></div>
              <div className="bbox"><span>person 0.99 · iftekhar</span></div>
              <div className="hud bottom mono"><span>VisionGuard</span><span>● LIVE</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section">
        <div className="wrap">
          <SectionHead n="02" label="About me" title="A builder who likes real problems." />
          <div className="about-grid">
            <Reveal>
              <p className="statement">{about.statement}</p>
              <dl className="facts">
                {about.facts.map((f) => (
                  <div key={f.k}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal className="about-body" delay={120}>
              <h3>My journey</h3>
              {about.journey.map((p, i) => <p key={i}>{p}</p>)}
              <h3>The work I enjoy</h3>
              <p>{about.work}</p>
              <h3>Outside programming</h3>
              <p>{about.outside}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <SectionHead
            n="03"
            label="Skills"
            title="What I work with."
            lede="Full-stack web is my main craft. AI and computer vision are where my research lives."
          />
          <div className="skills-grid">
            {skillGroups.map((g, gi) => (
              <Reveal key={g.title} className="skill-card" delay={gi * 80}>
                <h3>{g.title}</h3>
                <p className="blurb">{g.blurb}</p>
                {g.skills.map((s, r) => (
                  <div className="skill-row" key={s.name}>
                    <span className="name">{s.name}</span>
                    <span className="lvl mono">{levelLabel[s.level]}</span>
                    <div className="meter" aria-label={`${s.name}: ${levelLabel[s.level]}`}>
                      {[1, 2, 3, 4, 5].map((d) => (
                        <i
                          key={d}
                          className={d <= s.level ? "on" : ""}
                          style={{ "--d": d, "--r": r } as React.CSSProperties}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="section">
        <div className="wrap">
          <SectionHead n="04" label="Education" title="Where I learned." />
          <div className="timeline">
            {education.map((e) => (
              <Reveal key={e.degree} className="tl-item">
                <div className="when mono">{e.period}</div>
                <div>
                  <h3>{e.degree}</h3>
                  <div className="org">{e.school}</div>
                  <p>{e.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead
            n="05"
            label="Experience"
            title="What I've done."
            lede="Hackathons, research and hands-on training — the work that taught me the most."
          />
          <div className="timeline">
            {experience.map((x) => (
              <Reveal key={x.role} className="tl-item">
                <div className="when mono">{x.period}</div>
                <div>
                  <h3>{x.role}</h3>
                  <div className="org">{x.org}</div>
                  <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="research">
            {research.map((r) => (
              <div key={r.title}>
                <h4>{r.title}</h4>
                <p>{r.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="section" style={{ background: "var(--bg-2)", overflow: "hidden" }}>
        <div className="wrap">
          <SectionHead
            n="06"
            label="Projects"
            title="Things I've shipped."
            lede="Hover a card to pull it out of the deck. Open one to see the stack, the challenges and what comes next."
          />
          <div className="deck">
            {projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="pcard" data-cursor="view" aria-label={`${p.name} — view details`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={`${p.name} preview`} />
                <div className="tint" />
                <div className="shade" />
                <div className="top">
                  <span className="chip">{p.category}</span>
                  <span className="round"><Icon name="arrow" size={18} /></span>
                </div>
                <div className="body">
                  <h3>{p.name}</h3>
                  <p className="tag">{p.tagline}</p>
                  <span className="details">View details <Icon name="arrow" size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
          <Reveal>
            <p className="deck-caption">
              Code that ships,
              <br />
              <span className="muted">and keeps working after the demo.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section">
        <div className="wrap">
          <div className="sec-index mono" style={{ marginBottom: 24 }}>
            <b>07</b> Contact
          </div>
          <div className="contact-grid">
            <Reveal>
              <h2 className="display big-cta">
                Let&apos;s build
                <span>something.</span>
              </h2>
              <p className="sec-lede" style={{ marginBottom: 30 }}>
                I&apos;m looking for an internship in full-stack or AI. Call, message on WhatsApp, or send an email — I usually reply the same day.
              </p>
              <ContactList />
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
