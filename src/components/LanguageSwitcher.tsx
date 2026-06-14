import { useState, useRef, useEffect } from "react";
import { useLanguage, type Language } from "../hooks/language-context";
import { ChevronDown } from "lucide-react";

export function SpainFlag() {
  return (
    <div className="w-5 h-5 rounded-full overflow-hidden border border-black/10 flex-shrink-0 shadow-sm">
      <svg viewBox="0 0 3 2" className="w-full h-full object-cover">
        <rect width="3" height="2" fill="#c60b1e" />
        <rect y="0.5" width="3" height="1" fill="#fbe122" />
      </svg>
    </div>
  );
}

export function UKFlag() {
  return (
    <div className="w-5 h-5 rounded-full overflow-hidden border border-black/10 flex-shrink-0 shadow-sm">
      <svg viewBox="0 0 50 30" className="w-full h-full object-cover">
        <rect width="50" height="30" fill="#012169" />
        <path d="M0,0 L50,30 M50,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L50,30 M50,0 L0,30" stroke="#c8102e" strokeWidth="4" />
        <path d="M25,0 v30 M0,15 h50" stroke="#fff" strokeWidth="10" />
        <path d="M25,0 v30 M0,15 h50" stroke="#c8102e" strokeWidth="6" />
      </svg>
    </div>
  );
}

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-card/60 backdrop-blur-xs text-sm font-medium text-foreground hover:bg-accent/50 transition-all duration-300 shadow-xs hover:shadow-sm"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {language === "es" ? <SpainFlag /> : <UKFlag />}
        <span className="uppercase text-xs tracking-wider font-semibold">
          {language}
        </span>
        <ChevronDown size={14} className={`text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-36 rounded-2xl bg-card border border-border shadow-lg py-1.5 z-50 origin-top-right focus:outline-none animate-in fade-in slide-in-from-top-2 duration-200"
          role="menu"
        >
          <div className="flex flex-col gap-0.5 px-1">
            {/* Spanish Option - must be first */}
            <button
              onClick={() => handleSelect("es")}
              className={`flex items-center gap-2.5 w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                language === "es"
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
              role="menuitem"
            >
              <SpainFlag />
              <span>Español</span>
            </button>

            {/* English Option - must be second */}
            <button
              onClick={() => handleSelect("en")}
              className={`flex items-center gap-2.5 w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                language === "en"
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
              role="menuitem"
            >
              <UKFlag />
              <span>English</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
