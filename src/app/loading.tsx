/** Shown while the home page loads (e.g. a slow connection on first visit). */
export default function Loading() {
  return (
    <div className="wrap" aria-busy="true" aria-label="Loading">
      <div className="sk-hero">
        <div className="sk-stack">
          <span className="sk skel sk-line" style={{ width: 200 }} />
          <span className="sk skel" style={{ height: "clamp(50px, 7.6vw, 118px)", width: "70%" }} />
          <span className="sk skel" style={{ height: "clamp(50px, 7.6vw, 118px)", width: "85%" }} />
          <span className="sk skel sk-line" style={{ width: "60%", marginTop: 18 }} />
          <span className="sk skel sk-line" style={{ width: "90%" }} />
          <span className="sk skel sk-line" style={{ width: "75%" }} />
          <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
            {[0, 1, 2, 3].map((i) => <span key={i} className="sk skel" style={{ width: 48, height: 48, borderRadius: "50%" }} />)}
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 18, flexWrap: "wrap" }}>
            <span className="sk skel" style={{ width: 210, height: 54, borderRadius: 999 }} />
            <span className="sk skel" style={{ width: 180, height: 54, borderRadius: 999 }} />
          </div>
        </div>
        <span className="sk skel sk-photo" />
      </div>
    </div>
  );
}
