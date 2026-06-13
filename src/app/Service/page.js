import { Code, Rocket, Zap, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { SiWordpress, SiShopify, SiMeta } from "react-icons/si";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: <Code size={36} className="text-blue-400" />,
    title: "Web Development",
    description:
      "Custom, high-performance websites and web apps built with Next.js, React, and Node.js. Pixel-perfect UI, SEO-ready, and fully responsive across all devices.",
    tags: ["Next.js", "React", "Node.js", "Tailwind"],
  },
  {
    id: 2,
    icon: <SiWordpress size={36} className="text-sky-400" />,
    title: "WordPress Development",
    description:
      "Professional WordPress websites — from theme customization to full plugin development. Fast, secure, and easy to manage after handoff.",
    tags: ["WordPress", "WooCommerce", "Elementor", "PHP"],
  },
  {
    id: 3,
    icon: <SiShopify size={36} className="text-green-400" />,
    title: "Shopify Store Development",
    description:
      "End-to-end Shopify stores that convert — custom themes, product setup, payment integration, and speed optimization to boost your online sales.",
    tags: ["Shopify", "Liquid", "Custom Theme", "Payments"],
  },
  {
    id: 4,
    icon: <SiMeta size={36} className="text-indigo-400" />,
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "Data-driven Meta ad campaigns that reach the right audience. From creative strategy and targeting to A/B testing and ROAS optimization.",
    tags: ["Facebook Ads", "Instagram Ads", "Retargeting", "Analytics"],
  },
];

const nakOfferings = [
  {
    icon: <Code size={20} className="text-blue-400" />,
    label: "Web & E-commerce Development",
    detail: "Next.js, React, WordPress & Shopify storefronts",
  },
  {
    icon: <SiMeta size={20} className="text-indigo-400" />,
    label: "Meta Ads Management",
    detail: "ROI-focused Facebook & Instagram ad campaigns",
  },
  {
    icon: <TrendingUp size={20} className="text-green-400" />,
    label: "SEO & Performance",
    detail: "Faster load times, better rankings, more leads",
  },
  {
    icon: <Rocket size={20} className="text-yellow-400" />,
    label: "Brand & Digital Strategy",
    detail: "Identity, positioning & full digital presence",
  },
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-geist-sans)]">

        {/* ── Page Hero ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <span className="w-2 h-14 bg-blue-700 rounded-l-md inline-block" />
            What I Offer
          </h1>
          <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-xl mx-auto">
            Practical, results-driven services to help you build, grow, and scale your online presence.
          </p>
        </section>

        {/* ── Services Grid ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pb-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7
                           hover:border-blue-600/60 hover:shadow-lg hover:shadow-blue-700/20
                           hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[var(--bg-card2)] p-3 rounded-xl shrink-0">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── NAK-Digital Agency Section ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6 pb-20">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-10 bg-blue-700 rounded-l-md inline-block" />
            <h2 className="text-2xl sm:text-3xl font-bold">My Agency</h2>
          </div>

          {/* Main card */}
          <div className="relative rounded-3xl overflow-hidden border border-[var(--border)]
                          bg-gradient-to-br from-[#07093a] via-[#050941] to-[#020421]">

            {/* Decorative blobs */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-700/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-700/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 p-8 sm:p-12">

              {/* Top row — badge + pill */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="flex items-center gap-2 bg-yellow-500/10 text-yellow-300 text-xs
                                 font-semibold px-4 py-1.5 rounded-full border border-yellow-500/30">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  In Pipeline
                </span>
                <span className="text-xs text-[var(--text-muted)] bg-white/5 px-3 py-1.5 rounded-full border border-[var(--border)]">
                  Launching Q3 2025
                </span>
              </div>

              {/* Agency name + tagline */}
              <div className="mb-8">
                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
                  NAK
                  <span className="text-blue-500">-Digital</span>
                </h3>
                <p className="text-[var(--text-muted)] text-base sm:text-lg font-medium tracking-wide">
                  Your Growth. Our Mission.
                </p>
              </div>

              {/* Two-column layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                {/* Left — description + stats */}
                <div>
                  <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-8">
                    NAK-Digital is a full-service digital agency built to help businesses establish
                    and grow their online presence. We pair sharp development skills with performance
                    marketing to deliver outcomes that actually move the needle — not just deliverables.
                  </p>

                  {/* Stats row */}
                  <div className="flex flex-wrap gap-6">
                    {stats.map((s) => (
                      <div key={s.label} className="flex flex-col">
                        <span className="text-2xl font-extrabold text-white">{s.value}</span>
                        <span className="text-xs text-[var(--text-muted)] mt-0.5">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — service offerings */}
                <div>
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-5">
                    Core Services
                  </p>
                  <ul className="space-y-4">
                    {nakOfferings.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group">
                        <div className="mt-0.5 bg-[var(--bg-card2)] p-2 rounded-lg shrink-0 group-hover:bg-blue-800/40 transition">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{item.label}</p>
                          <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Divider + CTA */}
              <div className="mt-10 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row
                              items-start sm:items-center justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold text-white mb-1">
                    Interested in working with NAK-Digital?
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    We&apos;re onboarding early clients before the official launch.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/Contact"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white
                               text-sm font-semibold px-6 py-3 rounded-xl transition"
                  >
                    Get Early Access <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white
                               text-sm font-medium px-6 py-3 rounded-xl border border-[var(--border)] transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pb-24 text-center">
          <div className="bg-[var(--bg-card)] rounded-2xl p-10 border border-[var(--border)]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to work together?</h2>
            <p className="text-[var(--text-muted)] mb-6 max-w-md mx-auto text-sm sm:text-base">
              Whether it&apos;s a new website, a Shopify store, or Meta ads — let&apos;s build something great.
            </p>
            <Link
              href="/Contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700
                         text-white font-semibold px-8 py-3 rounded-xl transition"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

