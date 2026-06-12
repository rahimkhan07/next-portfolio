"use client";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

// ─── Add your photos here ───────────────────────────────────────────
// Drop image files into /public/gallery/ and list them below.
// Each entry: { src, caption, category }
const photos = [
  { src: "/img2.jpg",     caption: "Mountain vibes 🏔️",        category: "Nature"    },
  { src: "/headimg.jpg",  caption: "Portrait shot 📸",          category: "Portrait"  },
  { src: "/about.png",    caption: "About me look",             category: "Portrait"  },
  // Add more photos below ↓
  // { src: "/gallery/photo1.jpg", caption: "Caption here", category: "Travel" },
];

const categories = ["All", ...Array.from(new Set(photos.map((p) => p.category)))];

export default function GalleryPage() {
  const [active, setActive]     = useState("All");
  const [lightbox, setLightbox] = useState(null); // index or null

  const filtered =
    active === "All" ? photos : photos.filter((p) => p.category === active);

  const prev = () =>
    setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () =>
    setLightbox((i) => (i + 1) % filtered.length);

  // close on backdrop click
  const onBackdrop = (e) => {
    if (e.target === e.currentTarget) setLightbox(null);
  };

  return (
    <div className="min-h-screen bg-[#020421] text-white font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Camera size={28} className="text-blue-400" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Rahim&apos;s{" "}
            <span className="text-blue-400">Diary</span>
          </h1>
        </div>
        <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
          A personal collection of moments, places, and memories captured through my lens.
        </p>
      </section>

      {/* ── Category filter ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${active === cat
                  ? "bg-blue-600 text-white shadow shadow-blue-500/40"
                  : "bg-[#050941] text-gray-400 hover:text-white hover:bg-blue-800/40 border border-blue-900/40"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Masonry / Grid ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 py-24">No photos in this category yet.</div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden
                           border border-blue-900/30 hover:border-blue-600/50
                           shadow shadow-blue-900/20 hover:shadow-blue-700/30 transition-all duration-300"
              >
                <div className="relative w-full">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105
                               transition-transform duration-500"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                flex flex-col justify-end p-4">
                  <p className="text-white text-sm font-semibold">{photo.caption}</p>
                  <span className="text-xs text-blue-300 mt-1">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          onClick={onBackdrop}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div className="relative max-w-3xl w-full mx-12 sm:mx-20">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].caption}
                width={900}
                height={600}
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-white font-semibold">{filtered[lightbox].caption}</p>
              <span className="text-xs text-blue-300">{filtered[lightbox].category}</span>
            </div>
            {/* Counter */}
            <p className="text-center text-xs text-gray-500 mt-2">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
