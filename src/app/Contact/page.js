"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { SiGithub, SiLinkedin, SiGmail, SiWhatsapp, SiX } from "react-icons/si";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const contactInfo = [
  {
    icon: <Mail size={20} className="text-blue-400" />,
    label: "Email",
    value: "i.raheem727@gmail.com",
    href: "mailto:i.raheem727@gmail.com",
  },
  {
    icon: <Phone size={20} className="text-green-400" />,
    label: "Phone",
    value: "(+91) 9682700047",
    href: "tel:+919682700047",
  },
  {
    icon: <SiWhatsapp size={20} className="text-emerald-400" />,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/919682700047?text=Hi%20Rahim%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  },
  {
    icon: <MapPin size={20} className="text-rose-400" />,
    label: "Location",
    value: "Lucknow, Uttar Pradesh, India",
    href: "https://maps.google.com/?q=Lucknow,Uttar+Pradesh,India",
  },
];

const socials = [
  { icon: <SiGithub size={18} />,   label: "GitHub",    href: "https://github.com/rahimkhan07",              color: "hover:bg-gray-700 hover:text-white" },
  { icon: <SiLinkedin size={18} />, label: "LinkedIn",   href: "https://www.linkedin.com/in/rahim-r72/",      color: "hover:bg-blue-600 hover:text-white" },
  { icon: <SiWhatsapp size={18} />, label: "WhatsApp",  href: "https://wa.me/919682700047",                  color: "hover:bg-emerald-600 hover:text-white" },
  { icon: <SiGmail size={18} />,    label: "Email",      href: "mailto:i.raheem727@gmail.com",                color: "hover:bg-red-600 hover:text-white" },
  { icon: <SiX size={18} />,        label: "X",          href: "#",                                           color: "hover:bg-gray-800 hover:text-white" },
];

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setResult("");
    const formData = new FormData(e.target);
    formData.append("access_key", "62b155bb-f6d1-4f1a-ad88-4c1cf7047056");
    const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await res.json();
    setSending(false);
    if (data.success) { setResult("success"); e.target.reset(); }
    else { setResult("error"); }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-geist-sans)]">

        {/* ── Hero ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 flex items-center justify-center gap-3">
            <span className="w-2 h-14 bg-blue-700 rounded-l-md inline-block" />
            Get In Touch
          </h1>
          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-md mx-auto">
            Have a project in mind, a question, or just want to say hi? I'm always open — let's talk.
          </p>
        </section>

        {/* ── Main grid ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* ── LEFT col (2/5) ── */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Contact cards */}
              {contactInfo.map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-[var(--bg-card)] border border-[var(--border)]
                             rounded-2xl px-5 py-4 hover:border-blue-500/50
                             hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="bg-[var(--bg-card2)] p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-semibold mb-0.5">{c.label}</p>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{c.value}</p>
                  </div>
                  <ArrowRight size={14} className="text-[var(--text-muted)] ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}

              {/* Social row */}
              <div className="mt-2">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-semibold mb-4">Find me on</p>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                      title={s.label}
                      className={`flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border)]
                                  px-4 py-2 rounded-xl text-sm text-[var(--text-muted)]
                                  transition-all duration-200 ${s.color}`}>
                      {s.icon}
                      <span className="text-xs font-medium">{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT col (3/5) — Form ── */}
            <div className="lg:col-span-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl p-7 sm:p-10">
              <h2 className="text-xl font-bold mb-1 text-[var(--text-primary)]">Send a Message</h2>
              <p className="text-xs text-[var(--text-muted)] mb-7">I usually reply within 24 hours.</p>

              <form onSubmit={onSubmit} className="space-y-4">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">Name</label>
                    <input required type="text" name="name" placeholder="Rahim Khan"
                      className="w-full bg-[var(--bg-card2)] border border-[var(--border)] text-[var(--text-primary)]
                                 placeholder-[var(--text-muted)] rounded-xl px-4 py-3 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">Email</label>
                    <input required type="email" name="email" placeholder="you@example.com"
                      className="w-full bg-[var(--bg-card2)] border border-[var(--border)] text-[var(--text-primary)]
                                 placeholder-[var(--text-muted)] rounded-xl px-4 py-3 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">Phone (optional)</label>
                  <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-[var(--bg-card2)] border border-[var(--border)] text-[var(--text-primary)]
                               placeholder-[var(--text-muted)] rounded-xl px-4 py-3 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">Subject</label>
                  <input required type="text" name="subject" placeholder="Project inquiry / Collaboration…"
                    className="w-full bg-[var(--bg-card2)] border border-[var(--border)] text-[var(--text-primary)]
                               placeholder-[var(--text-muted)] rounded-xl px-4 py-3 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">Message</label>
                  <textarea required name="message" rows={5} placeholder="Tell me about your project…"
                    className="w-full bg-[var(--bg-card2)] border border-[var(--border)] text-[var(--text-primary)]
                               placeholder-[var(--text-muted)] rounded-xl px-4 py-3 text-sm resize-none
                               focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <button type="submit" disabled={sending}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60
                               text-white font-semibold px-7 py-3 rounded-xl transition cursor-pointer">
                    {sending ? "Sending…" : <><Send size={15} /> Send Message</>}
                  </button>

                  {/* WhatsApp quick CTA */}
                  <a href="https://wa.me/919682700047?text=Hi%20Rahim%2C%20I%20found%20your%20portfolio!"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-emerald-600/15 hover:bg-emerald-600 border border-emerald-600/40
                               text-emerald-400 hover:text-white text-sm font-medium px-5 py-3 rounded-xl transition">
                    <SiWhatsapp size={16} /> WhatsApp me
                  </a>
                </div>

                {/* Feedback */}
                {result === "success" && (
                  <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">
                    ✓ Message sent! I'll get back to you soon.
                  </div>
                )}
                {result === "error" && (
                  <div className="flex items-center gap-2 text-rose-400 text-sm bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-3">
                    ✕ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
