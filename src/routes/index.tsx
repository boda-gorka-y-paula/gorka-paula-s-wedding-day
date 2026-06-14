import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gorka & Paula | Wedding" },
      { name: "description", content: "Join us to celebrate the wedding of Gorka and Paula." },
      { property: "og:title", content: "Gorka & Paula | Wedding" },
      { property: "og:description", content: "Join us to celebrate the wedding of Gorka and Paula." },
    ],
  }),
  component: Index,
});

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#story" },
    { label: "Details", href: "#details" },
    { label: "Schedule", href: "#schedule" },
  ];

  return (
    <div className="min-h-[100dvh] bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <a href="#home" className="font-heading text-xl tracking-wide text-foreground">
            G<span className="text-primary mx-0.5">&</span>P
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/rsvp"
              className="text-sm tracking-widest uppercase px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              RSVP
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/rsvp"
              onClick={() => setMobileOpen(false)}
              className="text-sm tracking-widest uppercase px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center"
            >
              RSVP
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 text-center"
      >
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <img
            src="/images/floral-decor.png"
            alt=""
            className="absolute top-[-10%] right-[-5%] w-[60%] max-w-lg rotate-12"
            loading="eager"
          />
          <img
            src="/images/floral-decor.png"
            alt=""
            className="absolute bottom-[-10%] left-[-5%] w-[60%] max-w-lg -rotate-12 scale-x-[-1]"
            loading="eager"
          />
        </div>

        <div className="relative z-10 max-w-2xl">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-6">
            We are getting married
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] mb-4">
            Gorka
          </h1>
          <div className="flex items-center justify-center gap-4 my-2">
            <span className="h-px w-12 bg-border" />
            <Heart className="text-primary" size={20} fill="currentColor" />
            <span className="h-px w-12 bg-border" />
          </div>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] mb-8">
            Paula
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground tracking-wide">
            Saturday, June 20, 2026
          </p>
          <p className="text-base text-muted-foreground mt-1">
            Bilbao, Spain
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#story" aria-label="Scroll down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Couple Photo Placeholder Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-[4/3] md:aspect-[16/9] bg-muted rounded-2xl overflow-hidden border border-border">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted-foreground">
              <div className="w-20 h-20 rounded-full bg-border flex items-center justify-center">
                <Heart size={32} className="text-muted-foreground/50" />
              </div>
              <p className="text-sm tracking-widest uppercase">Photo of the couple</p>
              <p className="text-xs text-muted-foreground/60">Upload your photo here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 md:py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Story</p>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-12">
            How We Met
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div className="relative aspect-[3/4] bg-muted rounded-xl overflow-hidden border border-border">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                <div className="w-16 h-16 rounded-full bg-border flex items-center justify-center">
                  <Heart size={24} className="text-muted-foreground/50" />
                </div>
                <p className="text-xs tracking-widest uppercase">Couple Photo</p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Every love story is beautiful, but ours is our favorite. We met in a moment that felt like fate,
                and since then, every day has been an adventure we choose to share together.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through laughter, travel, quiet mornings, and everything in between, we have built a life
                that feels like home — because home is wherever we are together.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Now we are ready to take the next step, surrounded by the people who mean the most to us.
                We cannot wait to celebrate this new chapter with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">The Details</p>
            <h2 className="font-heading text-4xl md:text-6xl text-foreground">
              When & Where
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center p-8 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3">Date</h3>
              <p className="text-muted-foreground">Saturday</p>
              <p className="text-foreground font-medium text-lg">June 20, 2026</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3">Ceremony</h3>
              <p className="text-muted-foreground">Basilica of Begoña</p>
              <p className="text-foreground font-medium text-lg">Bilbao, Spain</p>
              <p className="text-sm text-muted-foreground mt-2">4:00 PM</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 3 4 6 4s6-2 6-4v-5" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3">Reception</h3>
              <p className="text-muted-foreground">Grand Hotel</p>
              <p className="text-foreground font-medium text-lg">Bilbao, Spain</p>
              <p className="text-sm text-muted-foreground mt-2">7:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 md:py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">The Day</p>
            <h2 className="font-heading text-4xl md:text-6xl text-foreground">
              Schedule
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {[
              { time: "3:30 PM", title: "Guest Arrival", desc: "Guests arrive at the Basilica of Begoña" },
              { time: "4:00 PM", title: "Ceremony", desc: "The wedding ceremony begins" },
              { time: "5:30 PM", title: "Cocktail Hour", desc: "Drinks and appetizers at the church gardens" },
              { time: "7:00 PM", title: "Reception", desc: "Dinner and celebration at the Grand Hotel" },
              { time: "12:00 AM", title: "Last Dance", desc: "A magical end to a perfect day" },
            ].map((item, i) => (
              <div key={i} className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2 md:text-right">
                  {i % 2 === 0 && (
                    <>
                      <p className="font-heading text-2xl text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </>
                  )}
                  {i % 2 !== 0 && (
                    <p className="font-heading text-xl text-primary">{item.time}</p>
                  )}
                </div>

                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1.5 mt-2" />

                <div className="pl-12 md:pl-0 md:w-1/2 md:text-left">
                  {i % 2 === 0 ? (
                    <p className="font-heading text-xl text-primary">{item.time}</p>
                  ) : (
                    <>
                      <p className="font-heading text-2xl text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </>
                  )}
                  {/* Mobile only */}
                  <div className="md:hidden mt-1">
                    {i % 2 === 0 ? (
                      <>
                        <p className="font-heading text-2xl text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      </>
                    ) : (
                      <p className="font-heading text-xl text-primary">{item.time}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Memories</p>
            <h2 className="font-heading text-4xl md:text-6xl text-foreground">
              Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className={`relative bg-muted rounded-xl overflow-hidden border border-border ${n === 1 || n === 4 ? "aspect-[3/4]" : "aspect-square"}`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <Heart size={20} className="text-muted-foreground/40" />
                  <p className="text-[10px] tracking-widest uppercase">Photo {n}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP CTA */}
      <section className="py-20 md:py-32 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Heart size={32} className="mx-auto text-primary mb-6" />
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
            Join Us
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
            We would be honored to have you celebrate this special day with us.
            Please let us know if you can make it by June 1st, 2026.
          </p>
          <Link
            to="/rsvp"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
          >
            RSVP Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-xl text-foreground">
            Gorka <span className="text-primary">&</span> Paula
          </p>
          <p className="text-sm text-muted-foreground">
            June 20, 2026 · Bilbao, Spain
          </p>
        </div>
      </footer>
    </div>
  );
}
