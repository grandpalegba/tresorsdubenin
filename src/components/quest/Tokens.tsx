import { motion } from "framer-motion";
import { BookOpen, Eye, Coins, Scale, Sparkles, Lock } from "lucide-react";
import treasureMask from "@/assets/treasure-mask.jpg";
import treasureScepter from "@/assets/treasure-scepter.jpg";
import legbaEmblem from "@/assets/emblem-legba.png";
import guEmblem from "@/assets/emblem-gu.png";
import wataEmblem from "@/assets/emblem-wata.png";
import heviossoEmblem from "@/assets/emblem-heviosso.png";
import sakpataEmblem from "@/assets/emblem-sakpata.png";
import minonaEmblem from "@/assets/emblem-minona.png";
import egg0 from "@/assets/step-0.png";
import egg1 from "@/assets/step-1.png";
import egg2 from "@/assets/step-2.png";
import egg3 from "@/assets/step-3.png";
import egg4 from "@/assets/step-4.png";
import egg5 from "@/assets/step-5.png";
import egg6 from "@/assets/step-6.png";

const EGGS = [egg0, egg1, egg2, egg3, egg4, egg5, egg6];

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

const ACTIVE_TREASURE = {
  name: "Le Masque Royal d'Abomey",
  origin: "Royaume du Dahomey · XIXᵉ siècle",
  status: "En captivité — Phase II : Traversée des Mers",
  story:
    "Arraché à Abomey en 1892, ce masque sacré attend sa délivrance. Chaque appel envoyé par les joueurs rapproche son retour vers la terre des ancêtres.",
  image: treasureMask,
  costPerCall: [
    { token: "Connaissance", amount: 30, icon: BookOpen, color: "var(--gold)" },
    { token: "Conscience", amount: 10, icon: Eye, color: "var(--ocher)" },
    { token: "Engagement", amount: 16, icon: Coins, color: "var(--ember)" },
    { token: "Souveraineté", amount: 25, icon: Scale, color: "var(--gold-deep)" },
  ],
  callsRequiredPerStage: 60,
  callsCurrent: 38,
};

// Nouvel ordre des bénédictions : Legba, Gu, Wata, Heviosso, Sakpata, Minona
const RETURNING_TREASURE = {
  name: "Le Sceptre Sacré du Roi Béhanzin",
  origin: "Royaume du Dahomey · 1890",
  story:
    "Libéré par 360 appels collectifs. Il chemine désormais à travers les six bénédictions divines avant de retrouver sa terre.",
  image: treasureScepter,
  stages: [
    { phase: "I", name: "Ouverture", deity: "GrandPa Legba", emblem: legbaEmblem, calls: 60 },
    { phase: "II", name: "Forge", deity: "Babu Gu", emblem: guEmblem, calls: 60 },
    { phase: "III", name: "Traversée", deity: "Abuela Wata", emblem: wataEmblem, calls: 60 },
    { phase: "IV", name: "Réveil", deity: "Avô Heviosso", emblem: heviossoEmblem, calls: 42 },
    { phase: "V", name: "Enracinement", deity: "Baba Sakpata", emblem: sakpataEmblem, calls: 0 },
    { phase: "VI", name: "Retour", deity: "Nonna Minona", emblem: minonaEmblem, calls: 0 },
  ],
  currentStage: 3,
};

function CallArc({ current, required, size = 220 }: { current: number; required: number; size?: number }) {
  const pct = Math.min(100, Math.round((current / required) * 100));
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (pct / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="arc-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--gold)" />
            <stop offset="100%" stopColor="var(--ember)" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--gold)"
          strokeOpacity="0.15"
          strokeWidth={stroke}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#arc-gold)"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: `0 ${circumference}` }}
          whileInView={{ strokeDasharray: `${dash} ${circumference}` }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
          style={{ filter: "drop-shadow(0 0 6px var(--gold))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Sparkles className="w-4 h-4 text-[var(--gold)] mb-2" />
        <div className="font-display text-4xl text-ink">
          {current}
          <span className="text-[var(--muted-foreground)]/70 text-2xl"> / {required}</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80 font-display mt-1">
          Appels envoyés
        </div>
        <div className="text-xs text-[var(--muted-foreground)] mt-1 italic">{pct}% de l'étape</div>
      </div>
    </div>
  );
}

export function Tokens() {
  const totalCalls = RETURNING_TREASURE.stages.reduce((s, st) => s + st.calls, 0);
  // Nombre d'étapes complètes -> détermine l'œuf à afficher (0..6)
  const completedStages = RETURNING_TREASURE.stages.filter((s) => s.calls >= 60).length;

  return (
    <section id="quest" className="relative py-32 px-6 overflow-hidden bg-white">
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
            <span className="gradient-gold-text">Accumulez. Dépensez. Libérez.</span>
          </h2>
          <p className="font-body text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto italic leading-relaxed">
            Chaque trésor du Bénin attend sa libération. Pour orchestrer son retour, dépensez vos jetons
            en <span className="text-[var(--gold)] not-italic font-semibold">appels sacrés</span>.
            Soixante appels libèrent une étape ; six étapes ramènent le trésor.
          </p>
        </motion.div>

        {/* The 4 tokens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
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
                <div className="relative h-full p-7 rounded-sm border border-[var(--gold)]/30 bg-white hover:border-[var(--gold)]/70 transition-all duration-500 hover:-translate-y-1 shadow-mystic">
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
                        backgroundColor: "color-mix(in oklab, " + token.color + " 12%, transparent)",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: token.color }} />
                    </div>

                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80 font-display mb-2">
                      Jeton de
                    </div>
                    <h3 className="font-display text-2xl text-ink mb-3">{token.name}</h3>
                    <p className="font-body text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
                      {token.description}
                    </p>

                    <div className="pt-4 border-t border-[var(--gold)]/20 space-y-2">
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] font-display">
                        <span className="text-[var(--muted-foreground)]">Rôle</span>
                        <span className="text-[var(--gold)]">{token.role}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] font-display">
                        <span className="text-[var(--muted-foreground)]">Source</span>
                        <span className="text-ink/80">{token.page}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TRÉSOR EN COURS DE LIBÉRATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative mb-28"
        >
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.4em] text-[var(--ember)] font-display">
              ✦ Trésor en cours de libération ✦
            </span>
            <h3 className="font-display text-3xl md:text-5xl font-semibold mt-5">
              <span className="gradient-gold-text">{ACTIVE_TREASURE.name}</span>
            </h3>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-[var(--gold)]/40 bg-white shadow-mystic">
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-4 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[var(--gold)]/20">
                <img
                  src={ACTIVE_TREASURE.image}
                  alt={ACTIVE_TREASURE.name}
                  loading="lazy"
                  width={896}
                  height={1024}
                  className="w-full h-full object-cover min-h-[320px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--abyss)]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[var(--ember)]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--parchment)] font-display">
                    {ACTIVE_TREASURE.status}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[var(--gold)]/20">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/70 font-display mb-3">
                  {ACTIVE_TREASURE.origin}
                </p>
                <p className="font-body text-base text-[var(--muted-foreground)] leading-relaxed italic mb-6">
                  « {ACTIVE_TREASURE.story} »
                </p>

                <div className="pt-5 border-t border-[var(--gold)]/20">
                  <h4 className="font-display text-sm uppercase tracking-[0.3em] text-ink mb-4">
                    Coût d'un appel sacré
                  </h4>
                  <div className="space-y-3">
                    {ACTIVE_TREASURE.costPerCall.map((c) => {
                      const Icon = c.icon;
                      return (
                        <div key={c.token} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                              style={{
                                borderColor: c.color,
                                backgroundColor: "color-mix(in oklab, " + c.color + " 10%, transparent)",
                              }}
                            >
                              <Icon className="w-3.5 h-3.5" style={{ color: c.color }} />
                            </div>
                            <span className="font-body text-sm text-ink">{c.token}</span>
                          </div>
                          <div className="font-display text-sm">
                            <span style={{ color: c.color }}>−{c.amount}</span>
                            <span className="text-[var(--muted-foreground)]/70 text-xs ml-1">jetons</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-5 text-[11px] italic text-[var(--muted-foreground)] leading-relaxed">
                    Chaque joueur peut « appeler » le trésor en dépensant ses jetons.
                    60 appels collectifs libèrent l'étape en cours.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 p-8 md:p-10 flex flex-col items-center justify-center">
                <CallArc current={ACTIVE_TREASURE.callsCurrent} required={ACTIVE_TREASURE.callsRequiredPerStage} />
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-gradient-gold text-white font-display text-xs uppercase tracking-[0.3em] font-semibold shadow-gold hover:shadow-mystic transition-all duration-500 hover:scale-[1.02]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Envoyer un appel
                </a>
                <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[var(--muted-foreground)] font-display">
                  {ACTIVE_TREASURE.callsRequiredPerStage - ACTIVE_TREASURE.callsCurrent} appels restants
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
          </div>
        </motion.div>

        {/* TRÉSOR EN COURS DE RETOUR — FRISE 6 ÉTAPES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] font-display">
              ✦ Trésor libéré · En chemin vers le Bénin ✦
            </span>
            <h3 className="font-display text-3xl md:text-5xl font-semibold mt-5">
              <span className="gradient-gold-text">{RETURNING_TREASURE.name}</span>
            </h3>
            <p className="mt-4 font-body text-[var(--muted-foreground)] italic max-w-2xl mx-auto">
              « {RETURNING_TREASURE.story} »
            </p>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-[var(--gold)]/40 bg-white shadow-mystic">
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-3 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[var(--gold)]/20">
                <img
                  src={RETURNING_TREASURE.image}
                  alt={RETURNING_TREASURE.name}
                  loading="lazy"
                  width={896}
                  height={1024}
                  className="w-full h-full object-cover min-h-[280px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--abyss)]/40 via-transparent to-transparent" />
              </div>

              {/* Frise */}
              <div className="lg:col-span-9 p-8 md:p-10">
                <div className="flex items-center justify-between mb-8 gap-6 flex-wrap">
                  <div>
                    <h4 className="font-display text-xl text-ink">Frise des six bénédictions</h4>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                      60 appels par étape · 360 appels pour le retour complet
                    </p>
                  </div>
                  {/* Œuf de progression */}
                  <div className="flex items-center gap-4">
                    <img
                      src={EGGS[completedStages]}
                      alt={`Œuf — ${completedStages} étapes complétées`}
                      className="w-16 h-16 object-contain drop-shadow-md"
                    />
                    <div>
                      <div className="font-display text-2xl text-[var(--gold)]">
                        {totalCalls}
                        <span className="text-[var(--muted-foreground)]/70 text-base"> / 360</span>
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/70 font-display">
                        Appels totaux · Œuf {completedStages}/6
                      </div>
                    </div>
                  </div>
                </div>

                {/* Frise horizontale */}
                <div className="relative">
                  <div className="absolute top-7 left-7 right-7 h-px bg-[var(--gold)]/20" />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: totalCalls / 360 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
                    style={{ transformOrigin: "left" }}
                    className="absolute top-7 left-7 right-7 h-px bg-gradient-to-r from-[var(--gold)] to-[var(--ember)]"
                  />

                  <div className="grid grid-cols-6 gap-2 relative">
                    {RETURNING_TREASURE.stages.map((stage, idx) => {
                      const pct = Math.min(100, Math.round((stage.calls / 60) * 100));
                      const isComplete = stage.calls >= 60;
                      const isCurrent = idx === RETURNING_TREASURE.currentStage;
                      return (
                        <motion.div
                          key={stage.phase}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.12 }}
                          className="flex flex-col items-center text-center"
                        >
                          {/* Pastille — icône divinité, fond noir si validé, blanc sinon */}
                          <div
                            className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all relative z-10 p-2 ${
                              isComplete
                                ? "bg-[var(--abyss)] border-[var(--gold)] shadow-gold"
                                : isCurrent
                                ? "bg-white border-[var(--ember)] animate-ember"
                                : "bg-white border-[var(--gold)]/40"
                            }`}
                          >
                            <img
                              src={stage.emblem}
                              alt={stage.deity}
                              className={`w-full h-full object-contain transition-all ${
                                isComplete ? "" : "opacity-70"
                              }`}
                              style={
                                isComplete
                                  ? { filter: "brightness(0) saturate(100%) invert(72%) sepia(45%) saturate(550%) hue-rotate(2deg) brightness(95%) contrast(92%)" }
                                  : undefined
                              }
                            />
                          </div>

                          {/* Mini progress bar */}
                          <div className="mt-3 w-full h-1 rounded-full bg-[var(--gold)]/10 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: 0.4 + idx * 0.1, ease: "easeOut" }}
                              className={`h-full ${
                                isComplete
                                  ? "bg-[var(--gold)]"
                                  : isCurrent
                                  ? "bg-[var(--ember)]"
                                  : "bg-[var(--gold)]/40"
                              }`}
                            />
                          </div>

                          <div className="mt-2 text-[9px] uppercase tracking-[0.2em] font-display text-[var(--gold)]">
                            Phase {stage.phase}
                          </div>
                          <div className="text-xs font-display text-ink mt-0.5">{stage.name}</div>
                          <div className="text-[10px] text-[var(--muted-foreground)] italic mt-1 leading-tight">
                            {stage.deity}
                          </div>
                          <div className="mt-1 text-[10px] font-display">
                            <span
                              className={
                                isComplete
                                  ? "text-[var(--gold)]"
                                  : isCurrent
                                  ? "text-[var(--ember)]"
                                  : "text-[var(--muted-foreground)]/70"
                              }
                            >
                              {stage.calls}
                            </span>
                            <span className="text-[var(--muted-foreground)]/60">/60</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Légende œuf — 7 stades */}
                <div className="mt-10 pt-6 border-t border-[var(--gold)]/20">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80 font-display text-center mb-4">
                    ✦ L'œuf sacré se remplit étape après étape ✦
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    {EGGS.map((src, i) => (
                      <div key={i} className="flex flex-col items-center flex-1">
                        <img
                          src={src}
                          alt={`Œuf stade ${i}`}
                          className={`w-10 h-10 md:w-12 md:h-12 object-contain transition-all ${
                            i <= completedStages ? "opacity-100" : "opacity-30 grayscale"
                          }`}
                        />
                        <span
                          className={`mt-1 text-[9px] font-display uppercase tracking-[0.2em] ${
                            i === completedStages
                              ? "text-[var(--ember)]"
                              : i < completedStages
                              ? "text-[var(--gold)]"
                              : "text-[var(--muted-foreground)]/50"
                          }`}
                        >
                          {i}/6
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
          </div>

          <p className="text-center mt-10 font-body italic text-[var(--muted-foreground)] max-w-2xl mx-auto">
            « Six bénédictions, soixante appels chacune. Trois cent soixante voix unies pour ramener
            la lumière au foyer ancestral. »
          </p>
        </motion.div>
      </div>
    </section>
  );
}
