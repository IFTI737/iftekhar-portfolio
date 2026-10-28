"use client";
import { profile } from "@/data/site";
import Icon from "./Icon";
import { toast } from "./toast";

export default function ResumeButton() {
  if (profile.resumeReady) {
    return (
      <a className="btn btn-primary" href={profile.resume} download target="_blank" rel="noopener">
        Download resume
        <span className="dot"><Icon name="down" size={18} /></span>
      </a>
    );
  }
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => toast("My resume is being updated. Email me and I'll send a copy today.")}
    >
      Download resume
      <span className="dot"><Icon name="down" size={18} /></span>
    </button>
  );
}
