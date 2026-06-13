"use client"
import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

const GetIntouch = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending…");
        const formData = new FormData(event.target);
        formData.append("access_key", "62b155bb-f6d1-4f1a-ad88-4c1cf7047056");
        const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
        const data = await response.json();
        if (data.success) { setResult("Form Submitted Successfully ✓"); event.target.reset(); }
        else { setResult(data.message); }
    };

    const chip = "flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border)] px-6 py-3 rounded-xl shadow-sm w-full sm:w-auto";

    return (
        <div className="w-full px-4 sm:px-10 lg:px-20 py-10 font-[family-name:var(--font-geist-sans)]">
            <section className="w-full">
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 mb-10 text-[var(--text-primary)]">
                    <span className="w-2 h-10 bg-blue-700 rounded-l-md"></span>
                    Contact
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Left */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row flex-wrap gap-4">
                            <div className={chip}>
                                <Mail size={18} className="text-blue-400" />
                                <span className="text-[var(--text-muted)] text-sm">i.raheem727@gmail.com</span>
                            </div>
                            <div className={chip}>
                                <Phone size={18} className="text-blue-400" />
                                <span className="text-[var(--text-muted)] text-sm">(+91) 7275138280</span>
                            </div>
                        </div>
                        <div className={chip}>
                            <MapPin size={18} className="text-blue-400" />
                            <span className="text-[var(--text-muted)] text-sm">Lucknow, Uttar Pradesh, India</span>
                        </div>

                        <div className="flex gap-5 mt-4 pt-5 border-t border-[var(--border)]">
                            {[Facebook, Twitter, Linkedin, MessageCircle].map((Icon, i) => (
                                <a key={i} href="#" className="text-[var(--text-muted)] hover:text-blue-500 transition">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="bg-[var(--bg-card)] border border-[var(--border)] px-6 sm:px-8 py-8 rounded-2xl shadow-sm">
                        <p className="text-[var(--text-muted)] text-sm mb-6 text-center">Write your query here</p>
                        <form onSubmit={onSubmit} className="flex flex-col gap-4">
                            <input type="text" placeholder="Your name" name="name"
                                className="p-3 rounded-xl bg-[var(--bg-card2)] border border-[var(--border)]
                                           text-[var(--text-primary)] placeholder-[var(--text-muted)]
                                           focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                            <input type="tel" placeholder="Phone number" name="phone"
                                className="p-3 rounded-xl bg-[var(--bg-card2)] border border-[var(--border)]
                                           text-[var(--text-primary)] placeholder-[var(--text-muted)]
                                           focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                            <input type="text" placeholder="Your query" name="query"
                                className="p-3 rounded-xl bg-[var(--bg-card2)] border border-[var(--border)]
                                           text-[var(--text-primary)] placeholder-[var(--text-muted)]
                                           focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                            <input type="submit" value="Send Message"
                                className="cursor-pointer bg-blue-600 text-white font-bold py-3 px-6 rounded-xl
                                           hover:bg-blue-700 transition w-full sm:w-[200px] mx-auto" />
                        </form>
                        {result && <p className="text-center mt-4 text-sm text-blue-400">{result}</p>}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GetIntouch
