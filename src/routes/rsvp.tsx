import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, ArrowLeft, Check } from "lucide-react";

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
            Volver al Inicio
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
                  Confirmar Asistencia
                </h1>
                <p className="text-muted-foreground">
                  Por favor, responde antes del 1 de septiembre de 2026
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Correo Electrónico
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
                    ¿Asistirás?
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
                        <span className="text-foreground">Encantado de asistir</span>
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
                        <span className="text-foreground">No podré asistir</span>
                      </div>
                    </label>
                  </div>
                </div>

                {form.attending === "yes" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Número de Invitados
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                      >
                        <option value="1">1 Invitado</option>
                        <option value="2">2 Invitados</option>
                        <option value="3">3 Invitados</option>
                        <option value="4">4 Invitados</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Restricciones Alimentarias
                      </label>
                      <input
                        type="text"
                        value={form.dietary}
                        onChange={(e) => setForm({ ...form, dietary: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="Vegetariano, alergias, etc."
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje para la Pareja (Opcional)
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Comparte tus buenos deseos..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
                >
                  Enviar Confirmación
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Check size={28} className="text-primary" />
              </div>
              <h2 className="font-heading text-3xl text-foreground mb-3">
                ¡Gracias!
              </h2>
              <p className="text-muted-foreground mb-8">
                Hemos recibido tu respuesta y estamos deseando celebrarlo contigo.
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Volver al Inicio
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
            11 de octubre de 2026 · Bilbao, España
          </p>
        </div>
      </footer>
    </div>
  );
}
