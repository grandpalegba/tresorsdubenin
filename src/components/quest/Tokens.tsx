import { motion } from "framer-motion";
import { Sparkles, Eye, BookOpen, Scale, MessageCircle } from "lucide-react";
import treasureMask from "@/assets/treasure-mask.jpg";

const COSTS = [
  { name: "Conscience", amount: 10, icon: Eye, color: "var(--benin-green)" },
  { name: "Connaissance", amount: 30, icon: BookOpen, color: "var(--benin-yellow-deep)" },
  { name: "Concordance", amount: 16, icon: Scale, color: "var(--benin-red)" },
  { name: "Confiance", amount: 25, icon: MessageCircle, color: "oklch(0.45 0 0)" },
];

const CURRENT = 222;
const TOTAL = 360;

function CircularRing({ current, total, size = 360 }: { current: number; total: number; size?: number }) {
  const pct = current / total;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90 absolute inset-0">
        <defs>
          <linearGradient id="benin-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--benin-green)" />
            <stop offset="50%" stopColor="var(--benin-yellow)" />
            <stop offset="100%" stopColor="var(--benin-red)" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} stroke="oklch(0.94 0 0)" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="url(#benin-ring)"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - pct) }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

export function Tokens() {
  return (
    <section id="altar" className="relative py-32 px-6 bg-white border-t border-zinc-100 overflow-hidden">
      {/* clean white background */}

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-medium mb-5">
            ✦ L'Autel du Réveil ✦
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-zinc-950 leading-[1.05]">
            La Puissance des <span className="tabular-nums">360</span>.
          </h2>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
            Un trésor ne s'ébranle que lorsque <span className="font-medium text-zinc-900">360 personnes</span> ont
            lancé le même appel. Dépensez vos jetons. Faites entendre votre voix.
          </p>
        </motion.div>

        {/* Altar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center"
        >
          {/* LEFT — Treasure Info */}
          <div className="lg:text-right space-y-6 order-2 lg:order-1">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2">
                Trésor en cours d'appel
              </div>
              <h3 className="font-display text-3xl font-semibold text-zinc-950 tracking-tight">
                Le Masque Royal d'Abomey
              </h3>
              <p className="text-sm text-zinc-500 mt-2">Royaume du Dahomey · XIXᵉ siècle</p>
            </div>
            <p className="text-[15px] text-zinc-600 leading-relaxed font-light italic">
              « Arraché en 1892, ce masque sacré attend sa délivrance par la voix unie du peuple. »
            </p>
            <div className="flex lg:justify-end gap-1.5">
              <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full border border-zinc-200 text-zinc-700">
                Phase III
              </span>
              <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full text-white"
                    style={{ background: "var(--benin-green-deep)" }}>
                Actif
              </span>
            </div>
          </div>

          {/* CENTER — The Altar Ring */}
          <div className="relative order-1 lg:order-2 mx-auto">
            <div className="relative w-[360px] h-[360px] flex items-center justify-center">
              <CircularRing current={CURRENT} total={TOTAL} size={360} />

              {/* 3D Bronze placeholder */}
              <div className="absolute inset-12 rounded-full overflow-hidden border border-zinc-200 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]">
                <img
                  src={treasureMask}
                  alt="Benin Bronze"
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.05) saturate(0.9)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/20" />
              </div>

              {/* Counter overlay */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white border border-zinc-200 rounded-full px-5 py-2 shadow-xl">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-semibold text-zinc-950 tabular-nums">{CURRENT}</span>
                  <span className="text-zinc-400 text-sm tabular-nums">/ {TOTAL}</span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 ml-1">appels</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Costs + CTA */}
          <div className="space-y-6 order-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-4">
                Coût d'un Appel
              </div>
              <div className="space-y-2.5">
                {COSTS.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.name}
                      className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 hover:border-zinc-200 transition-colors bg-white"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: `color-mix(in oklab, ${c.color} 12%, transparent)` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: c.color }} />
                        </div>
                        <span className="text-sm text-zinc-800 font-medium">{c.name}</span>
                      </div>
                      <div className="font-display tabular-nums text-zinc-950 font-semibold">
                        −{c.amount}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <a
              href="#"
              className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-zinc-950 text-white font-medium text-sm tracking-wide transition-all duration-500 hover:scale-[1.01]"
              style={{ boxShadow: "0 20px 60px -15px rgba(0,0,0,0.4)" }}
            >
              <span
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"
                style={{
                  background:
                    "linear-gradient(90deg, var(--benin-green), var(--benin-red))",
                  filter: "blur(12px)",
                }}
              />
              <Sparkles className="w-4 h-4 relative" />
              <span className="relative">Lancer l'Appel</span>
            </a>
            <p className="text-[11px] text-center text-zinc-500 italic">
              Acte sacré · {TOTAL - CURRENT} appels restants avant le Retour.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
