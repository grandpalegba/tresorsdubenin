import { motion } from "framer-motion";
import { ArrowRight, Mountain, Star, Sun, Bird } from "lucide-react";

const RANKS = [
  { name: "Blackstone", desc: "La fondation", icon: Mountain, treasures: "1+" },
  { name: "Blackstar", desc: "Le guide", icon: Star, treasures: "5+" },
  { name: "Blacksun", desc: "Le rayonnement", icon: Sun, treasures: "12+" },
  { name: "Blackswan", desc: "La métamorphose rare", icon: Bird, treasures: "25+" },
];

export function CtaFinal() {
  return (
    <section className="relative bg-white border-t border-zinc-100">
      {/* CTA */}
      <div className="relative px-6 py-32 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
             style={{ background: "conic-gradient(from 0deg, var(--benin-green), var(--benin-yellow), var(--benin-red), var(--benin-green))" }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-zinc-950 leading-[1.02]">
            Devenez l'une des
            <br />
            <span className="relative">
              <span className="relative z-10 tabular-nums">360 voix</span>
              <span
                className="absolute bottom-2 left-0 right-0 h-3 -z-0 opacity-50"
                style={{
                  background:
                    "linear-gradient(90deg, var(--benin-green), var(--benin-yellow), var(--benin-red))",
                }}
              />
            </span>
            .
          </h2>

          <p className="mt-8 text-lg text-zinc-600 max-w-xl mx-auto font-light">
            La Renaissance des peuples noirs commence par un Retour. Inscrivez votre nom dans le grand livre du voyage.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-zinc-950 text-white font-medium text-sm tracking-wide transition-all duration-500 hover:scale-[1.02]"
              style={{ boxShadow: "0 20px 60px -15px rgba(0,0,0,0.4)" }}
            >
              <span className="relative">Rejoindre l'Odyssée</span>
              <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-5 text-zinc-700 text-sm font-medium hover:text-zinc-950 transition-colors"
            >
              Découvrir le manifeste
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ranks */}
      <div className="border-t border-zinc-100 px-6 py-24 bg-zinc-50/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-14"
          >
            <div className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-medium mb-4">
              La Hiérarchie des Libérateurs
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-zinc-950 leading-[1.05]">
              Votre rang évolue avec chaque Retour.
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RANKS.map((r, idx) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-950 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-1 font-mono">
                    {r.treasures} trésors
                  </div>
                  <div className="font-display text-xl font-semibold text-zinc-950">{r.name}</div>
                  <div className="text-sm text-zinc-500 mt-1">{r.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
