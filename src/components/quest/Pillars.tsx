import { motion } from "framer-motion";
import { Eye, BookOpen, Scale, MessageCircle, ArrowUpRight } from "lucide-react";

const DIMENSIONS = [
  {
    code: "01",
    name: "Conscience",
    page: "Page Sagesses",
    icon: Eye,
    accent: "var(--benin-green)",
    accentName: "Green",
    description: "Éveil spirituel et philosophique. Donnez votre guidance sur des situations de vie.",
    balance: "0",
  },
  {
    code: "02",
    name: "Connaissance",
    page: "Page Savoirs",
    icon: BookOpen,
    accent: "var(--benin-yellow-deep)",
    accentName: "Yellow",
    description: "Maîtrise de l'histoire, des langues et des faits culturels du Bénin.",
    balance: "0",
  },
  {
    code: "03",
    name: "Concordance",
    page: "Page Talents",
    icon: Scale,
    accent: "var(--benin-red)",
    accentName: "Red",
    description: "Arbitrage de duels artistiques. Gagnez en alignant votre vote sur l'instinct collectif.",
    balance: "0",
  },
  {
    code: "04",
    name: "Confiance",
    page: "Page Histoires",
    icon: MessageCircle,
    accent: "oklch(0.45 0 0)",
    accentName: "Zinc",
    description: "Validation et partage des récits communautaires qui tissent la mémoire.",
    balance: "0",
  },
];

export function Pillars() {
  return (
    <section id="dimensions" className="relative py-32 px-6 bg-white border-t border-zinc-100">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-medium mb-5">
            La Loi des 4C — Génération d'Énergie
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-zinc-950 leading-[1.05]">
            Quatre dimensions.
            <br />
            <span className="text-zinc-400">Quatre sanctuaires.</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl font-light leading-relaxed">
            Pour lancer un Appel au Trésor, collectez des jetons dans chaque sanctuaire.
            Chaque dimension forge une part essentielle de l'énergie du Retour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 border border-zinc-100 rounded-2xl overflow-hidden">
          {DIMENSIONS.map((d, idx) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-white p-8 hover:bg-zinc-50/50 transition-colors duration-500"
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                  style={{ background: d.accent }}
                />

                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-12 h-12 rounded-xl border border-zinc-200 flex items-center justify-center transition-all duration-500 group-hover:border-transparent"
                    style={{
                      ["--hover-bg" as string]: d.accent,
                    }}
                  >
                    <Icon className="w-5 h-5 text-zinc-700 transition-colors duration-500 group-hover:text-zinc-950"
                          style={{ color: undefined }} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-mono">
                    {d.code}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: d.accent }}
                  />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-medium">
                    Jeton {d.accentName}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-zinc-950 mb-3 tracking-tight">
                  {d.name}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-8 font-light min-h-[60px]">
                  {d.description}
                </p>

                {/* Token balance */}
                <div className="pt-6 border-t border-zinc-100">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-1">
                        Token Balance
                      </div>
                      <div className="font-display text-3xl font-semibold text-zinc-950 tabular-nums">
                        {d.balance}
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-zinc-500 hover:text-zinc-950 transition-colors"
                    >
                      {d.page}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
