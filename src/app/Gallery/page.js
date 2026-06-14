"use client";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera, Quote } from "lucide-react";

const photos = [
  { src: "/img2.jpg",                           caption: "Mountain vibes 🏔️",        category: "Nature"    },
  { src: "/headimg.jpg",                        caption: "Classic portrait 📸",       category: "Portrait"  },
  { src: "/IMG-20260521-WA0017.jpg",            caption: "Latest memory 📷",          category: "Moments"   },
  { src: "/IMG-20260521-WA0042.jpg",            caption: "Smiles & stories 😄",       category: "Moments"   },
  { src: "/1716118674522.jpg",                  caption: "A moment in time ✨",       category: "Moments"   },
  { src: "/1765496904260.jpg",                  caption: "Candid shot 😊",            category: "Moments"   },
  { src: "/1770039737426-01.jpeg",              caption: "Good times 🙌",             category: "Moments"   },
  { src: "/IMG_20251018_170641851_HDR-01.jpeg", caption: "HDR day out 🌤️",           category: "Outdoor"   },
  { src: "/14_05_21_16_03_2022.jpg.png",        caption: "Throwback 2022 🕰️",        category: "Throwback" },
  { src: "/14_37_29_08_01_2022.jpg.png",        caption: "January 2022 memories ❄️", category: "Throwback" },
];

const categories = ["All", ...Array.from(new Set(photos.map((p) => p.category)))];

const thoughts = [
  { text: "Keep going. Everything you need will come to you at the right time.", author: "Unknown" },
  { text: "Code is like poetry — when written well, it tells a story.", author: "Rahim Khan" },
  { text: "Don't count the days. Make the days count.", author: "Muhammad Ali" },
  { text: "Every expert was once a beginner. Every pro was once an amateur.", author: "Robin Sharma" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Build things that matter. Ship things that help.", author: "Rahim Khan" },
  { text: "Small steps every day lead to massive results.", author: "Unknown" },
  { text: "Your only limit is your mind.", author: "Unknown" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Success is not final, failure is not fatal. It is the courage to continue that counts.", author: "Winston Churchill" },
];

export default function GalleryPage() {
  const [active, setActive]       = useState("All");
  const [lightbox, setLightbox]   = useState(null);
  const [thoughtIdx, setThoughtIdx] = useState(0);
  const [fade, setFade]           = useState(true);

  // Rotate thought every 4s with fade
  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setThoughtIdx((i) => (i + 1) % thoughts.length);
        setFade(true);
      }, 400);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  const prev = () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightbox((i) => (i + 1) % filtered.length);

  // keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, filtered.length]);

  const onBackdrop = (e) => { if (e.target === e.currentTarget) setLightbox(null); };

  const current = thoughts[thoughtIdx];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Camera size={26} className="text-blue-400" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Rahim&apos;s <span className="text-blue-400">Diary</span>
          </h1>
        </div>
        <p className="text-[var(--text-muted)] text-sm max-w-sm mx-auto">
          Moments, places & memories — captured through my lens.
        </p>
      </section>

      {/* ── Motivational Thought ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="relative bg-gradient-to-r from-[#07093a] via-[#050941] to-[#07093a] border border-[var(--border)] rounded-2xl px-6 sm:px-10 py-6 overflow-hidden shadow-lg shadow-blue-900/20">
          {/* big faint quote icon */}
          <Quote size={80} className="absolute -top-3 -left-2 text-blue-900/30 pointer-events-none" />
          <Quote size={80} className="absolute -bottom-3 -right-2 text-blue-900/20 pointer-events-none rotate-180" />

          <div
            className="relative z-10 text-center transition-all duration-400"
            style={{ opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(8px)",
                     transition: "opacity 0.4s ease, transform 0.4s ease" }}
          >
            <p className="text-base sm:text-lg md:text-xl font-medium text-white leading-relaxed italic mb-3">
              &ldquo;{current.text}&rdquo;
            </p>
            <span className="text-xs text-blue-400 font-semibold tracking-widest uppercase">
              — {current.author}
            </span>
          </div>

          {/* dot indicators */}
          <div className="flex justify-center gap-1.5 mt-5">
            {thoughts.map((_, i) => (
              <button
                key={i}
                onClick={() => { setFade(false); setTimeout(() => { setThoughtIdx(i); setFade(true); }, 300); }}
                className={`rounded-full transition-all duration-300
                  ${i === thoughtIdx ? "w-5 h-1.5 bg-blue-500" : "w-1.5 h-1.5 bg-blue-900"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Currently Reading ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 pb-6">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-lg">📚</span>
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)]">Currently Reading</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Book 1 */}
          <div className="group flex gap-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-4 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300">
            <div className="relative shrink-0 w-16 h-24 rounded-xl overflow-hidden shadow-lg shadow-black/30">
              <img
                src="https://m.media-amazon.com/images/I/61x6M3iMBWL._SY522_.jpg"
                alt="The Untouchables"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Reading badge */}
              <div className="absolute top-1 left-1 bg-blue-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                READING
              </div>
            </div>
            <div className="flex flex-col justify-between min-w-0">
              <div>
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-widest mb-1">Political History</p>
                <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug mb-1">
                  The Untouchables: Who Were They and Why They Became Untouchables?
                </h3>
                <p className="text-xs text-[var(--text-muted)]">B.R. Ambedkar</p>
              </div>
              {/* Progress bar */}
              <div className="mt-3">
                <div className="flex justify-between text-[10px] text-[var(--text-muted)] mb-1">
                  <span>Progress</span><span>45%</span>
                </div>
                <div className="w-full bg-[var(--bg-card2)] rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "45%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Book 2 */}
          <div className="group flex gap-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-4 hover:border-amber-500/50 hover:shadow-md hover:shadow-amber-500/10 transition-all duration-300">
            <div className="relative shrink-0 w-16 h-24 rounded-xl overflow-hidden shadow-lg shadow-black/30">
              <img
                src="https://m.media-amazon.com/images/I/81RKbkxGvOL._SY522_.jpg"
                alt="Ottoman Empire"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-1 left-1 bg-amber-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                READING
              </div>
            </div>
            <div className="flex flex-col justify-between min-w-0">
              <div>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-widest mb-1">World History</p>
                <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug mb-1">
                  The Ottoman Empire: The Rise and Fall of the Islamic Empire
                </h3>
                <p className="text-xs text-[var(--text-muted)]">History Series</p>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-[10px] text-[var(--text-muted)] mb-1">
                  <span>Progress</span><span>30%</span>
                </div>
                <div className="w-full bg-[var(--bg-card2)] rounded-full h-1.5">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: "30%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 pb-6">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
                ${active === cat
                  ? "bg-blue-600 text-white shadow shadow-blue-500/40 scale-105"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-white hover:bg-blue-800/40 border border-[var(--border)]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Photo Grid ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
          {filtered.map((photo, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              style={{ animationDelay: `${i * 60}ms` }}
              className="group relative cursor-pointer rounded-xl overflow-hidden aspect-square border border-blue-900/20 hover:border-blue-500/50 shadow-sm hover:shadow-blue-700/30 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 ease-out animate-fadeIn"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* default dark overlay — 50% black, removed on hover */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-300" />

              {/* caption overlay — visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
                <p className="text-white text-[10px] sm:text-xs font-semibold leading-tight line-clamp-1">
                  {photo.caption}
                </p>
                <span className="text-blue-300 text-[9px] mt-0.5">{photo.category}</span>
              </div>

              {/* top-right zoom icon */}
              <div className="absolute top-1.5 right-1.5 bg-black/50 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* photo count */}
        <p className="text-center text-xs text-gray-600 mt-6">
          {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
          {active !== "All" ? ` in ${active}` : " in total"}
        </p>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          onClick={onBackdrop}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition z-10"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 bg-white/10 hover:bg-blue-600 p-3 rounded-full transition z-10"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div className="relative max-w-2xl w-full mx-14 sm:mx-20">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/40 border border-blue-800/30">
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].caption}
                width={800}
                height={600}
                className="w-full h-auto object-contain max-h-[72vh]"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-white text-sm font-semibold">{filtered[lightbox].caption}</p>
              <span className="text-xs text-blue-300">{filtered[lightbox].category}</span>
            </div>
            <p className="text-center text-xs text-gray-600 mt-1">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 bg-white/10 hover:bg-blue-600 p-3 rounded-full transition z-10"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}

      <Footer />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)  scale(1);    }
        }
        .animate-fadeIn {
          animation: fadeIn 0.45s ease-out both;
        }
      `}</style>
    </div>
  );
}

