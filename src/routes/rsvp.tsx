import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/rsvp")({
  head: () => ({
    meta: [
      { title: "RSVP | Gorka & Paula Wedding" },
      { name: "description", content: "RSVP for Gorka and Paula's wedding on June 20, 2026." },
      { property: "og:title", content: "RSVP | Gorka & Paula Wedding" },
      { property: "og:description", content: "RSVP for Gorka and Paula's wedding on June 20, 2026." },
    ],
  }),
  component: RSVPPage,
});

function RSVPPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "1",
    dietary: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[100dvh] bg-background">
      {/* Simple header */}
      <header className="py-6 px-6 border-b border-border">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <span className="font-heading text-lg text-foreground">
            G<span className="text-primary">&</span>P
          </span>
        </div>
      </header>

      <main className="py-16 md:py-24 px-6">
        <div className="mx-auto max-w-lg">
          {!submitted ? (
            <>
              <div className="text-center mb-12">
                <Heart size={28} className="mx-auto text-primary mb-4" />
                <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-3">
                  RSVP
                </h1>
                <p className="text-muted-foreground">
                  Kindly respond by June 1, 2026
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Will you be attending?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={form.attending === "yes"}
                        onChange={(e) => setForm({ ...form, attending: e.target.value })}
                        className="sr-only peer"
                      />
                      <div className="text-center px-4 py-3 rounded-xl border border-border peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                        <span className="text-foreground">Joyfully Accept</span>
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={form.attending === "no"}
                        onChange={(e) => setForm({ ...form, attending: e.target.value })}
                        className="sr-only peer"
                      />
                      <div className="text-center px-4 py-3 rounded-xl border border-border peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                        <span className="text-foreground">Regretfully Decline</span>
                      </div>
                    </label>
                  </div>
                </div>

                {form.attending === "yes" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Number of Guests
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Dietary Restrictions
                      </label>
                      <input
                        type="text"
                        value={form.dietary}
                        onChange={(e) => setForm({ ...form, dietary: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="Vegetarian, allergies, etc."
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message for the Couple (Optional)
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Share your well wishes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
                >
                  Send RSVP
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Check size={28} className="text-primary" />
              </div>
              <h2 className="font-heading text-3xl text-foreground mb-3">
                Thank You!
              </h2>
              <p className="text-muted-foreground mb-8">
                We have received your response and cannot wait to celebrate with you.
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-border">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-lg text-foreground mb-1">
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
