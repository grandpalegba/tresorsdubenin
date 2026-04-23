import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Compass } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32">
      {/* Mystic backdrop */}
      <div className="absolute inset-0 bg-gradient-mystic" />
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-ember)" }} />

      {/* Floating sigils */}
      <div className="absolute top-1/4 left-[8%] w-2 h-2 rounded-full bg-[var(--gold)] animate-shimmer" />
      <div className="absolute top-1/3 right-[12%] w-1 h-1 rounded-full bg-[var(--gold)] animate-shimmer" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-[15%] w-1.5 h-1.5 rounded-full bg-[var(--ember)] animate-shimmer" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 right-[20%] w-1 h-1 rounded-full bg-[var(--gold)] animate-shimmer" style={{ animationDelay: "0.5s" }} />

      {/* Concentric mystic circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-[var(--gold)]/15 animate-ember" />
        <div className="absolute inset-12 rounded-full border border-[var(--gold)]/10" />
        <div className="absolute inset-24 rounded-full border border-[var(--ocher)]/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/5 backdrop-blur-sm mb-8">
          <Compass className="w-3.5 h-3.5 text-[var(--gold)]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-display">
            Quête Sacrée du Bénin
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-8">
          <span className="block text-parchment">Libérez les Trésors</span>
          <span className="block gradient-gold-text mt-2">de la Terre Mère</span>
        </h1>

        <p className="font-body text-xl md:text-2xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed mb-4 italic">
          Retrouvez les trésors perdus. Orchestrez leur retour sacré.
        </p>
        <p className="font-body text-base md:text-lg text-[var(--muted-foreground)]/80 max-w-2xl mx-auto leading-relaxed mb-12">
          Une quête mythologique où le cœur battant du Bénin guide chaque pas.
          Chaque joueur, chaque divinité, chaque étape — une bénédiction vers la terre des ancêtres.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#quest"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-gradient-gold text-[var(--abyss)] font-display text-sm uppercase tracking-[0.25em] font-semibold shadow-gold hover:shadow-mystic transition-all duration-500 hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4" />
            Commencer la Quête
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#destins"
            className="inline-flex items-center gap-2 px-6 py-4 text-[var(--gold)] font-display text-sm uppercase tracking-[0.25em] hover:text-[var(--parchment)] transition-colors border-b border-transparent hover:border-[var(--gold)]/40"
          >
            Découvrir les Destins
          </a>
        </div>

        <div className="mt-20 font-mystic text-3xl md:text-4xl text-[var(--gold)]/70">
          ~ Bénin, terre des ancêtres ~
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--gold)]/60">
        <span className="text-[10px] uppercase tracking-[0.4em] font-display">Descendez</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--gold)]/60 to-transparent" />
      </div>
    </section>
  );
}
