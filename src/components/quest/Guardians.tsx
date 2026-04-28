import { motion } from "framer-motion";
import { Check } from "lucide-react";
import deityLegba from "@/assets/deity-legba.jpg";
import deityGu from "@/assets/deity-gu.jpg";
import deityWata from "@/assets/deity-wata.jpg";
import deityHeviosso from "@/assets/deity-heviosso.jpg";
import deitySakpata from "@/assets/deity-sakpata.jpg";
import deityMinona from "@/assets/deity-minona.jpg";
import blackHorse from "@/assets/black-horse.png";

const GUARDIANS = [
  { phase: "I", name: "GrandPa Legba", role: "L'Ouverture", desc: "Réponse à l'appel", img: deityLegba, done: true },
  { phase: "II", name: "Babu Gu", role: "L'Avancée", desc: "Force sur le chemin", img: deityGu, done: true },
  { phase: "III", name: "Abuela Wata", role: "La Traversée", desc: "Voyage transatlantique inverse", img: deityWata, done: true, current: true },
  { phase: "IV", name: "Avô Heviosso", role: "Le Ciel", desc: "Justice et foudre purificatrice", img: deityHeviosso, done: false },
  { phase: "V", name: "Baba Sakpata", role: "L'Ancrage", desc: "Raffinement sur la terre du Bénin", img: deitySakpata, done: false },
  { phase: "VI", name: "Nonna Minona", role: "La Bénédiction", desc: "Passage de la Porte du Retour", img: deityMinona, done: false },
];

export function Guardians() {
  return (
    <section className="relative py-32 px-6 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-medium mb-5">
            Le Chemin des 6 Guides
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-zinc-950 leading-[1.05]">
            Les Forces Compagnes.
          </h2>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl font-light leading-relaxed">
            Chaque groupe de 60 appels active l'influence d'une divinité qui protège une étape du retour.
            Le cheval noir suit la divinité en cours — il porte la marche du peuple vers la Porte.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative pt-20">
          <div className="grid grid-cols-6 gap-4 relative">
            {GUARDIANS.map((g, idx) => {
              return (
                <motion.div
                  key={g.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Black horse marker above current step */}
                  {g.current && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center"
                    >
                      <img src={blackHorse} alt="Cheval du Retour" className="w-20 h-auto drop-shadow-md" />
                      <div
                        className="w-px h-3"
                        style={{ background: "var(--benin-red)" }}
                      />
                    </motion.div>
                  )}

                  {/* Deity portrait node */}
                  <div
                    className={`relative w-24 h-24 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                      g.current ? "scale-110" : ""
                    }`}
                    style={{
                      borderColor: g.done
                        ? "var(--benin-green)"
                        : "oklch(0.86 0 0)",
                      boxShadow: g.current
                        ? "0 0 0 6px color-mix(in oklab, var(--benin-yellow) 30%, transparent), 0 0 40px color-mix(in oklab, var(--benin-yellow) 50%, transparent)"
                        : g.done
                        ? "0 6px 16px -8px color-mix(in oklab, var(--benin-green) 60%, transparent)"
                        : "none",
                    }}
                  >
                    <img src={g.img} alt={g.name} className="w-full h-full object-cover" />
                    {!g.done && !g.current && (
                      <div className="absolute inset-0 bg-white/55" />
                    )}
                    {g.done && !g.current && (
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center border-2 border-white" style={{ background: "var(--benin-green)" }}>
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                    )}
                  </div>

                  <div className="mt-5 text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-mono">
                    Phase {g.phase}
                  </div>
                  <div className="mt-1 font-display text-base font-semibold text-zinc-950">
                    {g.name}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">{g.role}</div>
                  <div className="text-[11px] text-zinc-400 mt-2 font-light leading-snug max-w-[140px]">
                    {g.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile stacked timeline */}
        <div className="md:hidden space-y-4">
          {GUARDIANS.map((g, idx) => {
            return (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative flex items-center gap-4 p-4 rounded-2xl border ${
                  g.current ? "border-zinc-300 bg-zinc-50" : "border-zinc-100"
                }`}
              >
                {g.current && (
                  <img
                    src={blackHorse}
                    alt="Cheval du Retour"
                    className="absolute -top-6 -right-2 w-14 h-auto drop-shadow"
                  />
                )}
                <div
                  className="relative w-14 h-14 rounded-full overflow-hidden border-2 shrink-0"
                  style={{
                    borderColor: g.done ? "var(--benin-green)" : "oklch(0.86 0 0)",
                  }}
                >
                  <img src={g.img} alt={g.name} className="w-full h-full object-cover" />
                  {!g.done && !g.current && <div className="absolute inset-0 bg-white/55" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Phase {g.phase} · {g.role}</div>
                  <div className="font-display text-base font-semibold text-zinc-950">{g.name}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{g.desc}</div>
                </div>
                {g.done && !g.current && (
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "var(--benin-green)" }}>
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
