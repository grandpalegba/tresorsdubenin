import { motion } from "framer-motion";
import { Skull, Anchor, Ship, Scale, Sparkles, Crown } from "lucide-react";

const STAGES = [
  { phase: "I", title: "Le Débarrassement", subtitle: "L'Exil", description: "Le trésor est arraché à la Terre Mère. La blessure ancestrale s'ouvre.", icon: Skull },
  { phase: "II", title: "La Captivité", subtitle: "Les Vitrines Étrangères", description: "Exposé loin des siens, le trésor attend dans le silence des musées lointains.", icon: Anchor },
  { phase: "III", title: "L'Éveil", subtitle: "La Quête Commence", description: "Les joueurs s'organisent. Les divinités sont invoquées. La traque débute.", icon: Sparkles },
  { phase: "IV", title: "La Négociation", subtitle: "Le Pont des Mondes", description: "L'Investisseur bâtit, le Juge arbitre, le Savant prouve, la Sage tempère.", icon: Scale },
  { phase: "V", title: "Le Voyage Sacré", subtitle: "La Traversée", description: "Le trésor remonte le fil de l'océan, escorté par les bénédictions divines.", icon: Ship },
  { phase: "VI", title: "Le Retour", subtitle: "Sur la Terre Mère", description: "Le Bénin accueille ses enfants de pierre, de bronze et d'or. Le cycle se referme.", icon: Crown },
];

export function Journey() {
  return (
    <section id="quest" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--abyss)]" />
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-ember)" }} />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] font-display">
            ✦ Le Cycle Sacré ✦
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-6 mb-6">
            <span className="gradient-gold-text">Le Voyage du Trésor</span>
          </h2>
          <p className="font-body text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto italic">
            De l'exil à la renaissance — six étapes que nul ne peut franchir sans la bénédiction des Gardiens.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical golden thread */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={stage.phase}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className={`relative flex items-center gap-8 md:gap-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Node on the line */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="relative w-4 h-4 rounded-full bg-[var(--gold)] shadow-gold">
                      <div className="absolute inset-0 rounded-full bg-[var(--gold)] animate-ping opacity-30" />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />

                  {/* Content card */}
                  <div className="flex-1 ml-20 md:ml-0">
                    <div className="group p-8 rounded-sm border border-[var(--gold)]/15 bg-[var(--card)]/60 backdrop-blur-sm hover:border-[var(--gold)]/50 transition-all duration-500">
                      <div className="flex items-start gap-5">
                        <div className="shrink-0">
                          <div className="font-mystic text-5xl text-[var(--gold)] leading-none">
                            {stage.phase}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-4 h-4 text-[var(--gold)]" />
                            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80 font-display">
                              {stage.subtitle}
                            </span>
                          </div>
                          <h3 className="font-display text-2xl md:text-3xl text-parchment mb-3">
                            {stage.title}
                          </h3>
                          <p className="font-body text-[var(--muted-foreground)] leading-relaxed">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
