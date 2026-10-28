import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap" style={{ minHeight: "80vh", display: "grid", placeContent: "center", textAlign: "center", paddingTop: 100 }}>
      <p className="mono accent">404 · Signal lost</p>
      <h1 className="display" style={{ fontSize: "clamp(48px, 9vw, 110px)", margin: "16px 0 24px" }}>Nothing on this feed.</h1>
      <p className="muted" style={{ marginBottom: 30 }}>The page you opened doesn&apos;t exist. Head back to the portfolio.</p>
      <Link href="/" className="btn btn-primary" style={{ justifySelf: "center" }}>Back to home</Link>
    </section>
  );
}
