/** Shown while a project page loads. */
export default function Loading() {
  return (
    <div className="wrap pd-hero" aria-busy="true" aria-label="Loading project">
      <span className="sk skel sk-line" style={{ width: 120, marginBottom: 40 }} />
      <span className="sk skel" style={{ height: "clamp(48px, 9vw, 120px)", width: "60%", marginBottom: 20 }} />
      <span className="sk skel sk-line" style={{ width: "45%", marginBottom: 34 }} />
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <span className="sk skel" style={{ width: 190, height: 54, borderRadius: 999 }} />
        <span className="sk skel" style={{ width: 170, height: 54, borderRadius: 999 }} />
      </div>
      <span className="sk skel" style={{ display: "block", marginTop: 50, aspectRatio: "16 / 8", borderRadius: 28 }} />
      <div className="sk-stack" style={{ marginTop: 50 }}>
        {[90, 80, 85, 60].map((w, i) => <span key={i} className="sk skel sk-line" style={{ width: `${w}%` }} />)}
      </div>
    </div>
  );
}
