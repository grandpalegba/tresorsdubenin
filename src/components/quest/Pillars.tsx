import { motion } from "framer-motion";
import { Coins, Eye, BookOpen, Scale } from "lucide-react";
import investisseur from "@/assets/role-investisseur.png";
import sage from "@/assets/role-sage.png";
import savant from "@/assets/role-savant.png";
import juge from "@/assets/role-juge.png";

const ROLES = [
  {
    name: "L'Investisseur",
    subtitle: "Le Bâtisseur",
    description: "Celui qui finance et bâtit les ponts. Sa fortune devient la pierre angulaire du retour sacré.",
    icon: Coins,
    image: investisseur,
    sigil: "⚒",
  },
  {
    name: "La Sage",
    subtitle: "Gardienne de la Vision",
    description: "Détentrice de la tempérance. Sa parole calme les eaux troublées et oriente la quête.",
    icon: Eye,
    image: sage,
    sigil: "☾",
  },
  {
    name: "Le Savant",
    subtitle: "Détenteur du Savoir",
    description: "Voix de la mémoire historique et technique. Il déchiffre les codes que le temps a scellés.",
    icon: BookOpen,
    image: savant,
    sigil: "✦",
  },
  {
    name: "Le Juge",
    subtitle: "Garant de l'Équité",
    description: "Sa balance assure la droiture de chaque pas. Sans lui, la quête se perd dans l'ombre.",
    icon: Scale,
    image: juge,
    sigil: "⚖",
  },
];

export function Pillars() {
  return (
    <section id="destins" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mystic opacity-60" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] font-display">
            ✦ Les Quatre Piliers ✦
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-6 mb-6">
            <span className="gradient-gold-text">Choisissez votre Destin</span>
          </h2>
          <p className="font-body text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto italic">
            Quatre rôles. Quatre voies. Accumulez les points sacrés pour gravir les paliers
            et libérer les trésors étape par étape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROLES.map((role, idx) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-sm border border-[var(--gold)]/20 bg-[var(--card)] shadow-mystic transition-all duration-500 hover:border-[var(--gold)]/60 hover:-translate-y-1">
                  {/* Portrait */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={role.image}
                      alt={role.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--abyss)] via-[var(--abyss)]/40 to-transparent" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[var(--gold)]/50 flex items-center justify-center bg-[var(--abyss)]/60 backdrop-blur-sm">
                      <Icon className="w-4 h-4 text-[var(--gold)]" />
                    </div>
                    <div className="absolute top-4 left-4 font-mystic text-3xl text-[var(--gold)]">
                      {role.sigil}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80 font-display">
                      {role.subtitle}
                    </div>
                    <h3 className="font-display text-2xl text-parchment">{role.name}</h3>
                    <p className="font-body text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {role.description}
                    </p>
                    <div className="pt-3 border-t border-[var(--gold)]/10 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/70 font-display">
                      <span>Points requis</span>
                      <span className="text-[var(--gold)]">∞</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 font-body italic text-[var(--muted-foreground)] max-w-2xl mx-auto"
        >
          « Jouez. Accumulez. Méritez. Chaque point gagné est une pierre posée sur le chemin du retour. »
        </motion.p>
      </div>
    </section>
  );
}
