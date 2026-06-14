import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, ArrowLeft, Check } from "lucide-react";
import { useLanguage } from "../hooks/language-context";
import LanguageSwitcher from "../components/LanguageSwitcher";

export const Route = createFileRoute("/rsvp")({
  head: () => ({
    meta: [
      { title: "Confirmar Asistencia | Boda de Gorka & Paula" },
      { name: "description", content: "Confirma tu asistencia a la boda de Gorka y Paula el 11 de octubre de 2026." },
      { property: "og:title", content: "Confirmar Asistencia | Boda de Gorka & Paula" },
      { property: "og:description", content: "Confirma tu asistencia a la boda de Gorka y Paula el 11 de octubre de 2026." },
    ],
  }),
  component: RSVPPage,
});

function RSVPPage() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "1",
    dietary: "",
    message: "",
  });

  useEffect(() => {
    document.title = t("meta.rsvp.title");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t("meta.rsvp.description"));
    }
  }, [language, t]);

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
            {t("rsvp.page.back")}
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-heading text-lg text-foreground">
              G<span className="text-primary mx-0.5">&</span>P
            </span>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="py-16 md:py-24 px-6">
        <div className="mx-auto max-w-lg">
          {!submitted ? (
            <>
              <div className="text-center mb-12">
                <Heart size={28} className="mx-auto text-primary mb-4" />
                <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-3">
                  {t("rsvp.page.title")}
                </h1>
                <p className="text-muted-foreground">
                  {t("rsvp.page.subtitle")}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("rsvp.form.name.label")}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder={t("rsvp.form.name.placeholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("rsvp.form.email.label")}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder={t("rsvp.form.email.placeholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {t("rsvp.form.attending.label")}
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
                        <span className="text-foreground">{t("rsvp.form.attending.yes")}</span>
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
                        <span className="text-foreground">{t("rsvp.form.attending.no")}</span>
                      </div>
                    </label>
                  </div>
                </div>

                {form.attending === "yes" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t("rsvp.form.guests.label")}
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                      >
                        <option value="1">{t("rsvp.form.guests.option", { n: 1 })}</option>
                        <option value="2">{t("rsvp.form.guests.option_plural", { n: 2 })}</option>
                        <option value="3">{t("rsvp.form.guests.option_plural", { n: 3 })}</option>
                        <option value="4">{t("rsvp.form.guests.option_plural", { n: 4 })}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t("rsvp.form.dietary.label")}
                      </label>
                      <input
                        type="text"
                        value={form.dietary}
                        onChange={(e) => setForm({ ...form, dietary: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder={t("rsvp.form.dietary.placeholder")}
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("rsvp.form.message.label")}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder={t("rsvp.form.message.placeholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
                >
                  {t("rsvp.form.submit")}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Check size={28} className="text-primary" />
              </div>
              <h2 className="font-heading text-3xl text-foreground mb-3">
                {t("rsvp.success.title")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("rsvp.success.desc")}
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {t("rsvp.success.back")}
              </Link>
            </div>
          )}
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-border">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-lg text-foreground mb-1">
            {t("footer.title")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("footer.details")}
          </p>
        </div>
      </footer>
    </div>
  );
}
