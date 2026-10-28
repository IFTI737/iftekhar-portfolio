"use client";
import { useState } from "react";
import { contact } from "@/data/site";
import Icon from "./Icon";
import { toast } from "./toast";

export function ContactList() {
  const copy = async (text: string, what: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast(`${what} copied`);
    } catch {
      toast(`Couldn't copy. ${what}: ${text}`);
    }
  };
  const items = [
    { icon: "mail", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: "phone", label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, "")}` },
    { icon: "whatsapp", label: "WhatsApp", value: contact.whatsappDisplay, href: `https://wa.me/${contact.whatsapp}` },
    { icon: "pin", label: "Location", value: "Dhaka, Bangladesh", href: null },
  ];
  return (
    <div className="c-list">
      {items.map((it) => (
        <div className="c-item" key={it.label}>
          <span className="ic"><Icon name={it.icon} /></span>
          <div>
            <small>{it.label}</small>
            {it.href ? (
              <a href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener">
                <strong>{it.value}</strong>
              </a>
            ) : (
              <strong>{it.value}</strong>
            )}
          </div>
          {it.href && (
            <button className="copy mono" onClick={() => copy(it.value, it.label)} aria-label={`Copy ${it.label}`}>
              Copy
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast("Add your name and a message first.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    toast("Opening your email app…");
  };
  return (
    <form className="form" onSubmit={send}>
      <label>
        Your name
        <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Jane Doe" />
      </label>
      <label>
        Message
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Hi Iftekhar, we have an internship opening…" />
      </label>
      <button className="btn btn-light" type="submit" style={{ justifySelf: "start" }}>
        Send message
        <span className="dot"><Icon name="arrow" size={18} /></span>
      </button>
    </form>
  );
}
