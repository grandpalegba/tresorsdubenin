import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import porteDuRetour from "@/assets/porte-du-retour.png";
import blackEscape from "@/assets/black-escape.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-28 bg-white">
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-white mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-700 font-medium">
              L'Odyssée
            </span>
          </div>

          <h1 className="font-display font-semibold tracking-tight leading-[0.9] text-zinc-950">
            <span className="block text-[16vw] lg:text-[8.5rem] uppercase">
              Black To Benin
            </span>
          </h1>

          <h2 className="mt-8 font-display text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.05] text-zinc-800">
            La Renaissance commence
            <br />
            par la Porte du Retour.
          </h2>

          <p className="mt-8 text-base md:text-lg text-zinc-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            <span className="font-medium text-zinc-900">360 voix unies</span>, quatre dimensions sacrées,
            six guides ancestraux. Orchestrez le retour spirituel et symbolique des trésors royaux exilés.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
            <a
              href="#altar"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-950 text-white text-sm font-medium tracking-wide overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.3)" }}
            >
              <Sparkles className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Lancer un Appel</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#dimensions"
              className="inline-flex items-center gap-2 px-6 py-4 text-zinc-700 text-sm font-medium hover:text-zinc-950 transition-colors"
            >
              Découvrir les 4 Dimensions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stat row */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto lg:mx-0">
            {[
              { v: "360", l: "Voix par trésor" },
              { v: "6", l: "Guides ancestraux" },
              { v: "4", l: "Dimensions sacrées" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="font-display text-3xl md:text-4xl font-semibold text-zinc-950 tabular-nums">
                  {s.v}
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Porte du Retour visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-[0_40px_120px_-30px_rgba(0,0,0,0.35)] border border-zinc-200">
            <img
              src={porteDuRetour}
              alt="La Porte du Retour"
              className="w-full h-full object-cover"
            />
            {/* Floating family — symbol of Black unity returning */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 1, ease: "easeOut" }}
              className="absolute -bottom-8 -left-10 w-[55%]"
            >
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <img src={blackEscape} alt="L'union des peuples noirs" className="w-full h-auto" />
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-600 font-medium pl-1">
                ✦ L'Union · Le Retour
              </div>
            </motion.div>
          </div>
          <div className="mt-8 text-center lg:text-left lg:pl-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Symbole</div>
            <div className="font-display text-lg text-zinc-900 mt-1">La Porte du Retour</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
