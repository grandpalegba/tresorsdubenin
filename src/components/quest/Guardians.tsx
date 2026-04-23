import { motion } from "framer-motion";
import legbaPortrait from "@/assets/deity-legba.jpg";
import wataPortrait from "@/assets/deity-wata.jpg";
import heviossoPortrait from "@/assets/deity-heviosso.jpg";
import sakpataPortrait from "@/assets/deity-sakpata.jpg";
import guPortrait from "@/assets/deity-gu.jpg";
import minonaPortrait from "@/assets/deity-minona.jpg";
import legbaEmblem from "@/assets/emblem-legba.png";
import wataEmblem from "@/assets/emblem-wata.png";
import heviossoEmblem from "@/assets/emblem-heviosso.png";
import sakpataEmblem from "@/assets/emblem-sakpata.png";
import guEmblem from "@/assets/emblem-gu.png";
import minonaEmblem from "@/assets/emblem-minona.png";

const DEITIES = [
  {
    name: "GrandPa Legba",
    domain: "Gardien des Seuils",
    phase: "Phase I — Ouverture des Voies",
    blessing: "Sans sa clé, aucune porte ne s'ouvre. Il bénit le commencement.",
    portrait: legbaPortrait,
    emblem: legbaEmblem,
  },
  {
    name: "Abuela Wata",
    domain: "Souveraine des Eaux",
    phase: "Phase II — Traversée des Mers",
    blessing: "Elle apaise l'océan et guide le trésor à travers les marées du temps.",
    portrait: wataPortrait,
    emblem: wataEmblem,
  },
  {
    name: "Avô Heviosso",
    domain: "Maître du Tonnerre",
    phase: "Phase III — Force du Réveil",
    blessing: "Sa foudre frappe l'injustice et électrifie la quête d'une énergie sacrée.",
    portrait: heviossoPortrait,
    emblem: heviossoEmblem,
  },
  {
    name: "Baba Sakpata",
    domain: "Gardien de la Terre",
    phase: "Phase IV — Enracinement",
    blessing: "Il ancre la négociation. Sa lance protège ce qui appartient au sol.",
    portrait: sakpataPortrait,
    emblem: sakpataEmblem,
  },
  {
    name: "Babu Gu",
    domain: "Forgeron du Destin",
    phase: "Phase V — Forge du Voyage",
    blessing: "Son marteau scelle le pacte. Le métal du trésor reconnaît sa flamme.",
    portrait: guPortrait,
    emblem: guEmblem,
  },
  {
    name: "Nonna Minona",
    domain: "Mère Protectrice",
    phase: "Phase VI — Retour & Bénédiction",
    blessing: "Elle accueille le trésor à la maison. Son cœur referme le cycle sacré.",
    portrait: minonaPortrait,
    emblem: minonaEmblem,
  },
];

export function Guardians() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mystic" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] font-display">
            ✦ La Validation Sacrée ✦
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-6 mb-6">
            <span className="gradient-gold-text">Les Six Entités Gardiennes</span>
          </h2>
          <p className="font-body text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto italic leading-relaxed">
            À chaque étape du voyage, une divinité tutélaire doit valider le passage.
            <span className="text-[var(--gold)] not-italic"> Sans leur bénédiction, le trésor ne peut avancer.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEITIES.map((deity, idx) => (
            <motion.article
              key={deity.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-sm border border-[var(--gold)]/20 bg-[var(--card)] shadow-mystic transition-all duration-500 hover:border-[var(--gold)]/60 hover:-translate-y-1">
                {/* Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={deity.portrait}
                    alt={deity.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--abyss)] via-[var(--abyss)]/30 to-transparent" />

                  {/* Floating emblem */}
                  <div className="absolute top-5 right-5 w-16 h-16 rounded-full bg-[var(--abyss)]/70 backdrop-blur-sm border border-[var(--gold)]/40 p-2 animate-float">
                    <img src={deity.emblem} alt="" className="w-full h-full object-contain" />
                  </div>

                  {/* Phase ribbon */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-display bg-[var(--abyss)]/70 backdrop-blur-sm border border-[var(--gold)]/30 px-3 py-1.5 inline-block">
                      {deity.phase}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display text-2xl text-parchment">{deity.name}</h3>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold)]/80 font-display">
                    {deity.domain}
                  </div>
                  <p className="font-body text-sm italic text-[var(--muted-foreground)] leading-relaxed pt-2 border-t border-[var(--gold)]/10">
                    « {deity.blessing} »
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
