import { motion } from "framer-motion";
import { Key, Hammer, Waves, Zap, Mountain, Heart, Check } from "lucide-react";

const GUARDIANS = [
  { phase: "I", name: "GrandPa Legba", role: "L'Ouverture", desc: "Réponse à l'appel", icon: Key, done: true },
  { phase: "II", name: "Babu Gu", role: "L'Avancée", desc: "Force sur le chemin", icon: Hammer, done: true },
  { phase: "III", name: "Abuela Wata", role: "La Traversée", desc: "Voyage transatlantique inverse", icon: Waves, done: true, current: true },
  { phase: "IV", name: "Avô Heviosso", role: "Le Ciel", desc: "Justice et foudre purificatrice", icon: Zap, done: false },
  { phase: "V", name: "Baba Sakpata", role: "L'Ancrage", desc: "Raffinement sur la terre du Bénin", icon: Mountain, done: false },
  { phase: "VI", name: "Nonna Minona", role: "La Bénédiction", desc: "Passage de la Porte du Retour", icon: Heart, done: false },
];

export function Guardians() {
  const currentIdx = GUARDIANS.findIndex((g) => g.current);
  const progress = ((currentIdx + 1) / GUARDIANS.length) * 100;

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
            Six bénédictions pour franchir la Porte.
          </p>
        </motion.div>

        {/* Horizontal timeline — desktop */}
        <div className="hidden md:block relative">
          {/* Base line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-zinc-200" />
          {/* Progress line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute top-8 left-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, var(--benin-green), var(--benin-yellow), var(--benin-red))",
            }}
          />

          <div className="grid grid-cols-6 gap-4 relative">
            {GUARDIANS.map((g, idx) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Node */}
                  <div
                    className={`relative w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 bg-white ${
                      g.current
                        ? "scale-110"
                        : ""
                    }`}
                    style={{
                      borderColor: g.done
                        ? "var(--benin-green)"
                        : "oklch(0.86 0 0)",
                      background: g.done && !g.current ? "var(--benin-green)" : g.current ? "white" : "white",
                      boxShadow: g.current
                        ? "0 0 0 6px color-mix(in oklab, var(--benin-yellow) 25%, transparent), 0 0 30px color-mix(in oklab, var(--benin-yellow) 40%, transparent)"
                        : "none",
                    }}
                  >
                    {g.done && !g.current ? (
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    ) : (
                      <Icon
                        className="w-5 h-5"
                        strokeWidth={1.5}
                        style={{ color: g.current ? "var(--benin-red)" : "oklch(0.45 0 0)" }}
                      />
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
            const Icon = g.icon;
            return (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-100"
              >
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0"
                  style={{
                    borderColor: g.done ? "var(--benin-green)" : "oklch(0.86 0 0)",
                    background: g.done && !g.current ? "var(--benin-green)" : "white",
                  }}
                >
                  {g.done && !g.current ? (
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  ) : (
                    <Icon className="w-4 h-4 text-zinc-700" strokeWidth={1.5} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Phase {g.phase} · {g.role}</div>
                  <div className="font-display text-base font-semibold text-zinc-950">{g.name}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{g.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
