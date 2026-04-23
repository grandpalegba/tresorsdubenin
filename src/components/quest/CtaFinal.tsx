import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function CtaFinal() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mystic" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-ember)" }} />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-[var(--gold)]/20 animate-ember" />
        <div className="absolute inset-10 rounded-full border border-[var(--gold)]/15" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <div className="font-mystic text-4xl text-[var(--gold)] mb-6">~ L'heure est venue ~</div>

        <h2 className="font-display text-4xl md:text-6xl font-semibold mb-8 leading-tight">
          <span className="text-ink">Le Bénin</span>
          <span className="block gradient-gold-text mt-2">vous attend.</span>
        </h2>

        <p className="font-body text-lg md:text-xl text-[var(--muted-foreground)] mb-12 italic max-w-xl mx-auto">
          Rejoignez le Mur des Sagesses. Inscrivez votre nom dans le grand livre du retour.
        </p>

        <a
          href="#"
          className="group inline-flex items-center gap-3 px-10 py-5 rounded-sm bg-gradient-gold text-[var(--background)] font-display text-sm uppercase tracking-[0.3em] font-bold shadow-gold hover:shadow-mystic transition-all duration-500 hover:scale-[1.03]"
        >
          <Sparkles className="w-4 h-4" />
          Commencer la Quête
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </a>

        <p className="mt-12 text-xs uppercase tracking-[0.4em] text-[var(--gold)] font-display">
          ✦ Mur des Sagesses ✦
        </p>
      </motion.div>
    </section>
  );
}
