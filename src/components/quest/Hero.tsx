import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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

      {/* Floating Benin color glows */}
      <div className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full opacity-20 blur-3xl"
           style={{ background: "var(--benin-green)" }} />
      <div className="absolute bottom-[10%] right-[8%] w-80 h-80 rounded-full opacity-20 blur-3xl"
           style={{ background: "var(--benin-yellow)" }} />
      <div className="absolute top-[45%] right-[35%] w-56 h-56 rounded-full opacity-10 blur-3xl"
           style={{ background: "var(--benin-red)" }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center"
      >
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm mb-10">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--benin-green)" }} />
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--benin-yellow)" }} />
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--benin-red)" }} />
          <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-700 font-medium">
            L'Odyssée Black To Benin
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02] text-zinc-950">
          La Renaissance commence
          <br />
          par un{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Retour.</span>
            <span
              className="absolute bottom-1 md:bottom-2 left-0 right-0 h-3 md:h-4 -z-0 opacity-60"
              style={{
                background:
                  "linear-gradient(90deg, var(--benin-green), var(--benin-yellow), var(--benin-red))",
              }}
            />
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
          <span className="font-medium text-zinc-900">360 voix unies</span>, quatre dimensions sacrées,
          six guides ancestraux. Orchestrez le retour spirituel et symbolique des trésors royaux exilés.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#altar"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-950 text-white text-sm font-medium tracking-wide overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            style={{
              boxShadow: "0 10px 40px -10px rgba(0,0,0,0.3)",
            }}
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(90deg, var(--benin-green), var(--benin-red))",
                padding: "2px",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
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
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { v: "360", l: "Voix par trésor" },
            { v: "6", l: "Guides ancestraux" },
            { v: "4", l: "Dimensions sacrées" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-semibold text-zinc-950 tabular-nums">
                {s.v}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
