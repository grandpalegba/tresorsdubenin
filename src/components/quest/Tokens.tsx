import { motion } from "framer-motion";
import { BookOpen, Eye, Coins, Scale, Lock, Sparkles } from "lucide-react";

const TOKENS = [
  {
    name: "Connaissance",
    role: "Le Savant",
    page: "Page des Savoirs",
    icon: BookOpen,
    sigil: "✦",
    description: "Acquise en explorant les savoirs du Bénin — histoire, langues, traditions.",
    color: "var(--gold)",
  },
  {
    name: "Conscience",
    role: "La Sage",
    page: "Page des Sagesses",
    icon: Eye,
    sigil: "☾",
    description: "Cultivée par la méditation des sagesses ancestrales et leur transmission.",
    color: "var(--ocher)",
  },
  {
    name: "Engagement",
    role: "L'Investisseur",
    page: "Page des Bâtisseurs",
    icon: Coins,
    sigil: "⚒",
    description: "Manifesté par le soutien concret aux bâtisseurs et porteurs de projets.",
    color: "var(--ember)",
  },
  {
    name: "Souveraineté",
    role: "Le Juge",
    page: "Page des Ambassadeurs",
    icon: Scale,
    sigil: "⚖",
    description: "Décernée en reconnaissant les ambassadeurs qui incarnent la dignité béninoise.",
    color: "var(--gold-deep)",
  },
];

const FEATURED_TREASURE = {
  name: "Le Trône Royal d'Abomey",
  origin: "Royaume du Dahomey · XIXᵉ siècle",
  status: "En captivité — Musée du Quai Branly, Paris",
  story:
    "Symbole vivant du pouvoir royal, ce trône fut arraché à Abomey lors du sac de 1892. Pour libérer son retour sacré, il faut accumuler les jetons des quatre dimensions.",
  requirements: [
    { token: "Connaissance", required: 320, current: 184, icon: BookOpen },
    { token: "Conscience", required: 280, current: 142, icon: Eye },
    { token: "Engagement", required: 450, current: 196, icon: Coins },
    { token: "Souveraineté", required: 220, current: 88, icon: Scale },
  ],
};

export function Tokens() {
  return (
    <section id="quest" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--abyss)]" />
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-ember)" }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] font-display">
            ✦ Les Quatre Jetons Sacrés ✦
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-6 mb-6">
            <span className="gradient-gold-text">Accumulez. Incarnez. Libérez.</span>
          </h2>
          <p className="font-body text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto italic leading-relaxed">
            Chaque trésor du Bénin attend sa libération. Pour orchestrer son retour, le joueur doit
            incarner successivement les quatre rôles et accumuler les jetons des quatre dimensions.
          </p>
        </motion.div>

        {/* The 4 tokens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {TOKENS.map((token, idx) => {
            const Icon = token.icon;
            return (
              <motion.div
                key={token.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-7 rounded-sm border border-[var(--gold)]/20 bg-[var(--card)]/70 backdrop-blur-sm hover:border-[var(--gold)]/60 transition-all duration-500 hover:-translate-y-1">
                  {/* Sigil */}
                  <div
                    className="absolute -top-4 -right-2 font-mystic text-6xl leading-none opacity-80"
                    style={{ color: token.color }}
                  >
                    {token.sigil}
                  </div>

                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-full border flex items-center justify-center mb-5"
                      style={{
                        borderColor: token.color,
                        backgroundColor: "color-mix(in oklab, " + token.color + " 10%, transparent)",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: token.color }} />
                    </div>

                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/70 font-display mb-2">
                      Jeton de
                    </div>
                    <h3 className="font-display text-2xl text-parchment mb-3">{token.name}</h3>
                    <p className="font-body text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
                      {token.description}
                    </p>

                    <div className="pt-4 border-t border-[var(--gold)]/15 space-y-2">
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] font-display">
                        <span className="text-[var(--gold)]/60">Rôle</span>
                        <span className="text-[var(--gold)]">{token.role}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] font-display">
                        <span className="text-[var(--gold)]/60">Source</span>
                        <span className="text-[var(--parchment)]/80">{token.page}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Treasure */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] font-display">
              ✦ Trésor en Quête de Retour ✦
            </span>
            <h3 className="font-display text-3xl md:text-5xl font-semibold mt-5">
              <span className="gradient-gold-text">{FEATURED_TREASURE.name}</span>
            </h3>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-[var(--gold)]/30 bg-gradient-to-b from-[var(--card)]/80 to-[var(--abyss)]/80 backdrop-blur-sm shadow-mystic">
            {/* Decorative top border */}
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left : story */}
              <div className="lg:col-span-2 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[var(--gold)]/15">
                <div className="flex items-center gap-3 mb-5">
                  <Lock className="w-4 h-4 text-[var(--ember)]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--ember)] font-display">
                    {FEATURED_TREASURE.status}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/60 font-display mb-3">
                  {FEATURED_TREASURE.origin}
                </p>
                <p className="font-body text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed italic">
                  « {FEATURED_TREASURE.story} »
                </p>

                <div className="mt-8 font-mystic text-3xl text-[var(--gold)]/70">
                  ~ Sa libération vous attend ~
                </div>
              </div>

              {/* Right : token requirements */}
              <div className="lg:col-span-3 p-8 md:p-10 space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display text-xl text-parchment">Jetons requis pour la libération</h4>
                  <Sparkles className="w-4 h-4 text-[var(--gold)]" />
                </div>

                {FEATURED_TREASURE.requirements.map((req) => {
                  const Icon = req.icon;
                  const pct = Math.min(100, Math.round((req.current / req.required) * 100));
                  return (
                    <div key={req.token} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full border border-[var(--gold)]/40 flex items-center justify-center">
                            <Icon className="w-3.5 h-3.5 text-[var(--gold)]" />
                          </div>
                          <span className="font-display text-sm text-parchment">{req.token}</span>
                        </div>
                        <div className="font-display text-sm">
                          <span className="text-[var(--gold)]">{req.current}</span>
                          <span className="text-[var(--muted-foreground)]/60"> / {req.required}</span>
                        </div>
                      </div>
                      <div className="relative h-1.5 rounded-full bg-[var(--abyss)] overflow-hidden border border-[var(--gold)]/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)]"
                          style={{ boxShadow: "0 0 12px var(--gold)" }}
                        />
                      </div>
                    </div>
                  );
                })}

                <div className="pt-4 mt-2 border-t border-[var(--gold)]/15 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/60 font-display">
                    Progression globale
                  </span>
                  <span className="font-display text-[var(--gold)]">42%</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
          </div>

          <p className="text-center mt-10 font-body italic text-[var(--muted-foreground)] max-w-2xl mx-auto">
            « Chaque jeton est une pierre posée sur le chemin du retour. Quatre dimensions, une seule destinée. »
          </p>
        </motion.div>
      </div>
    </section>
  );
}
