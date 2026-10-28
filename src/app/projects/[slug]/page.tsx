import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";
import Icon from "@/components/Icon";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.tagline } : { title: "Project not found" };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="wrap pd-hero">
      <Link href="/#projects" className="back mono">
        <Icon name="back" size={18} /> All projects
      </Link>
      <div className="sec-index mono"><b>{String(i + 1).padStart(2, "0")}</b> {p.category}</div>
      <h1 className="display pd-title">{p.name}</h1>
      <p className="pd-tag">{p.tagline}</p>
      <div className="hero-actions" style={{ marginTop: 0 }}>
        <a className="btn btn-primary" href={p.live} target="_blank" rel="noopener">
          Live project
          <span className="dot"><Icon name="arrow" size={18} /></span>
        </a>
        {p.repo ? (
          <a className="btn btn-ghost" href={p.repo} target="_blank" rel="noopener">
            <Icon name="github" /> GitHub (client)
          </a>
        ) : null}
      </div>
      {!p.repo && p.repoNote && <p className="note">{p.repoNote}</p>}

      <div className="pd-cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={`${p.name} preview`} />
      </div>

      <div className="pd-meta">
        <div><small>Role</small>{p.role}</div>
        <div><small>Year</small>{p.year}</div>
        <div><small>Type</small>{p.category}</div>
      </div>

      <section className="pd-grid">
        <h2>Tech stack</h2>
        <div className="stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
      </section>

      <section className="pd-grid">
        <h2>About the project</h2>
        <div>
          <p>{p.description}</p>
          <ul className="ticks">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      </section>

      <section className="pd-grid">
        <h2>Challenges I faced</h2>
        <div className="challenges">
          {p.challenges.map((c) => (
            <div key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pd-grid">
        <h2>Improvements & future plans</h2>
        <ul className="ticks">{p.future.map((f) => <li key={f}>{f}</li>)}</ul>
      </section>

      <div className="pd-next">
        <span className="mono muted">Next project</span>
        <Link href={`/projects/${next.slug}`} className="next-name" data-cursor="view">
          {next.name}
        </Link>
      </div>
    </article>
  );
}
