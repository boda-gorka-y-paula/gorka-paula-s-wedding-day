import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Meta & Document title
    "meta.title": "Gorka & Paula | Boda",
    "meta.description": "Acompáñanos a celebrar la boda de Gorka y Paula el 11 de octubre de 2026 en Valencia, España.",
    "meta.rsvp.title": "Confirmar Asistencia | Boda de Gorka & Paula",
    "meta.rsvp.description": "Confirma tu asistencia a la boda de Gorka y Paula el 11 de octubre de 2026.",

    // Nav Links
    "nav.home": "Inicio",
    "nav.story": "Nuestra Historia",
    "nav.details": "Detalles",
    "nav.schedule": "Programa",
    "nav.rsvp": "RSVP",

    // Hero Section
    "hero.wedding": "Nos casamos",
    "hero.date": "Domingo, 11 de octubre de 2026",
    "hero.location": "Valencia, España",

    // Countdown
    "countdown.days": "Días",
    "countdown.hours": "Horas",
    "countdown.minutes": "Minutos",
    "countdown.seconds": "Segundos",

    // Couple Photo
    "photo.couple": "Foto de la pareja",
    "photo.upload": "Sube tu foto aquí",

    // Story
    "story.title": "Nuestra Historia",
    "story.subtitle": "Cómo Nos Conocimos",
    "story.p1": "Cada historia de amor es bonita, pero la nuestra es nuestra favorita. Nos conocimos en un momento que pareció cosa del destino, y desde entonces cada día ha sido una aventura que elegimos compartir juntos.",
    "story.p2": "Entre risas, viajes, mañanas tranquilas y todo lo que hay en medio, hemos construido una vida que se siente como un hogar — porque el hogar es allá donde estamos juntos.",
    "story.p3": "Ahora estamos listos para dar el siguiente paso, rodeados de las personas que más nos importan. No podemos esperar a celebrar este nuevo capítulo contigo.",

    // Details
    "details.title": "Los Detalles",
    "details.subtitle": "Cuándo y Dónde",
    "details.date.title": "Fecha",
    "details.date.day": "Domingo",
    "details.date.val": "11 de octubre de 2026",
    "details.ceremony.title": "Ceremonia",
    "details.ceremony.name": "Iglesia San Juan de la Cruz",
    "details.ceremony.loc": "Valencia, España",
    "details.ceremony.time": "12:00 h",
    "details.celebration.title": "Celebración",
    "details.celebration.name": "Restaurante Nou Racó",
    "details.celebration.loc": "Valencia, España",
    "details.celebration.time": "14:00 h",
    "details.map.button": "Ver mapa",

    // Schedule
    "schedule.title": "El Día",
    "schedule.subtitle": "Programa",
    "schedule.item1.time": "11:30 h",
    "schedule.item1.title": "Llegada de Invitados",
    "schedule.item1.desc": "Los invitados llegan a la Iglesia San Juan de la Cruz",
    "schedule.item2.time": "12:00 h",
    "schedule.item2.title": "Ceremonia",
    "schedule.item2.desc": "Comienza la ceremonia de la boda",
    "schedule.item3.time": "14:00 h",
    "schedule.item3.title": "Celebración",
    "schedule.item3.desc": "Cóctel y comida en el Restaurante Nou Racó",
    "schedule.item4.time": "18:00 h",
    "schedule.item4.title": "Primer Baile",
    "schedule.item4.desc": "Comienza la fiesta y el baile",
    "schedule.item5.time": "23:00 h",
    "schedule.item5.title": "Último Baile",
    "schedule.item5.desc": "Un final mágico para un día perfecto",

    // Gallery
    "gallery.title": "Recuerdos",
    "gallery.subtitle": "Galería",
    "gallery.photo": "Foto {n}",

    // RSVP Section
    "rsvp.section.title": "Acompáñanos",
    "rsvp.section.desc": "Sería un honor que celebraras este día tan especial con nosotros. Por favor, confírmanos tu asistencia antes del 1 de septiembre de 2026.",
    "rsvp.section.button": "Confirmar Asistencia",

    // Footer
    "footer.title": "Gorka & Paula",
    "footer.details": "11 de octubre de 2026 · Valencia, España",

    // RSVP Page
    "rsvp.page.back": "Volver al Inicio",
    "rsvp.page.title": "Confirmar Asistencia",
    "rsvp.page.subtitle": "Por favor, responde antes del 1 de septiembre de 2026",
    "rsvp.form.name.label": "Nombre Completo",
    "rsvp.form.name.placeholder": "Tu nombre completo",
    "rsvp.form.email.label": "Correo Electrónico",
    "rsvp.form.email.placeholder": "your@email.com",
    "rsvp.form.attending.label": "¿Asistirás?",
    "rsvp.form.attending.yes": "Encantado de asistir",
    "rsvp.form.attending.no": "No podré asistir",
    "rsvp.form.guests.label": "Número de Invitados",
    "rsvp.form.guests.option": "{n} Invitado",
    "rsvp.form.guests.option_plural": "{n} Invitados",
    "rsvp.form.dietary.label": "Restricciones Alimentarias",
    "rsvp.form.dietary.placeholder": "Vegetariano, alergias, etc.",
    "rsvp.form.message.label": "Mensaje para la Pareja (Opcional)",
    "rsvp.form.message.placeholder": "Comparte tus buenos deseos...",
    "rsvp.form.submit": "Enviar Confirmación",
    "rsvp.success.title": "¡Gracias!",
    "rsvp.success.desc": "Hemos recibido tu respuesta y estamos deseando celebrarlo contigo.",
    "rsvp.success.back": "Volver al Inicio",
  },
  en: {
    // Meta & Document title
    "meta.title": "Gorka & Paula | Wedding",
    "meta.description": "Join us to celebrate the wedding of Gorka and Paula on October 11, 2026 in Valencia, Spain.",
    "meta.rsvp.title": "Confirm Attendance | Gorka & Paula's Wedding",
    "meta.rsvp.description": "Confirm your attendance to the wedding of Gorka and Paula on October 11, 2026.",

    // Nav Links
    "nav.home": "Home",
    "nav.story": "Our Story",
    "nav.details": "Details",
    "nav.schedule": "Schedule",
    "nav.rsvp": "RSVP",

    // Hero Section
    "hero.wedding": "We are getting married",
    "hero.date": "Sunday, October 11, 2026",
    "hero.location": "Valencia, Spain",

    // Countdown
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",

    // Couple Photo
    "photo.couple": "Couple's photo",
    "photo.upload": "Upload your photo here",

    // Story
    "story.title": "Our Story",
    "story.subtitle": "How We Met",
    "story.p1": "Every love story is beautiful, but ours is our favorite. We met at a time that felt like destiny, and since then every day has been an adventure we choose to share together.",
    "story.p2": "Through laughter, travels, quiet mornings, and everything in between, we have built a life that feels like home — because home is wherever we are together.",
    "story.p3": "Now we are ready to take the next step, surrounded by the people who matter most to us. We can't wait to celebrate this new chapter with you.",

    // Details
    "details.title": "The Details",
    "details.subtitle": "When and Where",
    "details.date.title": "Date",
    "details.date.day": "Sunday",
    "details.date.val": "October 11, 2026",
    "details.ceremony.title": "Ceremony",
    "details.ceremony.name": "Iglesia San Juan de la Cruz",
    "details.ceremony.loc": "Valencia, Spain",
    "details.ceremony.time": "12:00 PM",
    "details.celebration.title": "Celebration",
    "details.celebration.name": "Restaurante Nou Racó",
    "details.celebration.loc": "Valencia, Spain",
    "details.celebration.time": "2:00 PM",
    "details.map.button": "View map",

    // Schedule
    "schedule.title": "The Day",
    "schedule.subtitle": "Schedule",
    "schedule.item1.time": "11:30 AM",
    "schedule.item1.title": "Guest Arrival",
    "schedule.item1.desc": "Guests arrive at Iglesia San Juan de la Cruz",
    "schedule.item2.time": "12:00 PM",
    "schedule.item2.title": "Ceremony",
    "schedule.item2.desc": "The wedding ceremony begins",
    "schedule.item3.time": "2:00 PM",
    "schedule.item3.title": "Celebration",
    "schedule.item3.desc": "Cocktail and lunch at Restaurante Nou Racó",
    "schedule.item4.time": "6:00 PM",
    "schedule.item4.title": "First Dance",
    "schedule.item4.desc": "The party and dance begin",
    "schedule.item5.time": "11:00 PM",
    "schedule.item5.title": "Last Dance",
    "schedule.item5.desc": "A magical end to a perfect day",

    // Gallery
    "gallery.title": "Memories",
    "gallery.subtitle": "Gallery",
    "gallery.photo": "Photo {n}",

    // RSVP Section
    "rsvp.section.title": "Join Us",
    "rsvp.section.desc": "It would be an honor to have you celebrate this special day with us. Please confirm your attendance before September 1, 2026.",
    "rsvp.section.button": "Confirm Attendance",

    // Footer
    "footer.title": "Gorka & Paula",
    "footer.details": "October 11, 2026 · Valencia, Spain",

    // RSVP Page
    "rsvp.page.back": "Back to Home",
    "rsvp.page.title": "Confirm Attendance",
    "rsvp.page.subtitle": "Please reply before September 1, 2026",
    "rsvp.form.name.label": "Full Name",
    "rsvp.form.name.placeholder": "Your full name",
    "rsvp.form.email.label": "Email Address",
    "rsvp.form.email.placeholder": "your@email.com",
    "rsvp.form.attending.label": "Will you attend?",
    "rsvp.form.attending.yes": "Joyfully accept",
    "rsvp.form.attending.no": "Regretfully decline",
    "rsvp.form.guests.label": "Number of Guests",
    "rsvp.form.guests.option": "{n} Guest",
    "rsvp.form.guests.option_plural": "{n} Guests",
    "rsvp.form.dietary.label": "Dietary Restrictions",
    "rsvp.form.dietary.placeholder": "Vegetarian, allergies, etc.",
    "rsvp.form.message.label": "Message for the Couple (Optional)",
    "rsvp.form.message.placeholder": "Share your warm wishes...",
    "rsvp.form.submit": "Send Confirmation",
    "rsvp.success.title": "Thank you!",
    "rsvp.success.desc": "We have received your response and are looking forward to celebrating with you.",
    "rsvp.success.back": "Back to Home",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language");
    if (saved === "es" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const t = (key: string, replacements?: Record<string, string | number>): string => {
    // If not mounted yet (SSR or initial hydration), always render Spanish to match server output
    const activeLang = mounted ? language : "es";
    let text = translations[activeLang][key] || translations["es"][key] || key;

    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }

    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
