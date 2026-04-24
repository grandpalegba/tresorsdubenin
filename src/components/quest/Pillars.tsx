import { motion } from "framer-motion";
import { Coins, Eye, BookOpen, Scale } from "lucide-react";
import investisseur from "@/assets/role-investisseur.png";
import sage from "@/assets/role-sage.png";
import savant from "@/assets/role-savant.png";
import juge from "@/assets/role-juge.png";

const ROLES = [
  {
    name: "Le Savant",
    subtitle: "Détenteur du Savoir",
    page: "Page des Savoirs",
    token: "Connaissance",
    tokenIcon: BookOpen,
    tokenColor: "var(--gold)",
    sigil: "✦",
    icon: BookOpen,
    image: savant,
    mission:
      "Le joueur incarne un savant et répond à des questions sur le Bénin — son histoire, ses langues, ses traditions. Chaque bonne réponse forge un jeton de Connaissance.",
  },
  {
    name: "La Sage",
    subtitle: "Gardienne de la Vision",
    page: "Page des Sagesses",
    token: "Conscience",
    tokenIcon: Eye,
    tokenColor: "var(--ocher)",
    sigil: "☾",
    icon: Eye,
    image: sage,
    mission:
      "Le joueur donne sa guidance sur des situations de vie soumises par la communauté. Sa parole apaisée et juste lui rapporte des jetons de Conscience.",
  },
  {
    name: "L'Investisseur",
    subtitle: "Le Bâtisseur de Ponts",
    page: "Page des Bâtisseurs",
    token: "Engagement",
    tokenIcon: Coins,
    tokenColor: "var(--ember)",
    sigil: "⚒",
    icon: Coins,
    image: investisseur,
    mission:
      "Le joueur gère un portefeuille de cauris et les attribue aux bâtisseurs les plus méritants. La cote de chaque bâtisseur évolue selon le succès de ses vidéos et services pour le Bénin. Gain ou perte spéculative — chaque action génère des jetons d'Engagement.",
  },
  {
    name: "Le Juge",
    subtitle: "Garant de l'Équité",
    page: "Page des Ambassadeurs",
    token: "Souveraineté",
    tokenIcon: Scale,
    tokenColor: "var(--gold-deep)",
    sigil: "⚖",
    icon: Scale,
    image: juge,
    mission:
      "Le joueur évalue deux talents qui s'opposent en vidéo et tranche en faveur de celui qui incarne le mieux la dignité béninoise. Chaque verdict éclairé décerne un jeton de Souveraineté.",
  },
];

export function Pillars() {
  return (
    <section id="destins" className="relative py-32 px-6 overflow-hidden bg-white">
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
            Quatre rôles. Quatre missions. Quatre jetons sacrés à accumuler pour libérer
            les trésors du Bénin, étape par étape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROLES.map((role, idx) => {
            const Icon = role.icon;
            const TokenIcon = role.tokenIcon;
            return (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-sm border border-[var(--gold)]/20 bg-white shadow-mystic transition-all duration-500 hover:border-[var(--gold)]/60 hover:-translate-y-1 h-full flex flex-col">
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

                    {/* Badge jeton — ancré au portrait */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-3 py-2 rounded-sm bg-[var(--abyss)]/75 backdrop-blur-sm border border-[var(--gold)]/40">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "color-mix(in oklab, " + role.tokenColor + " 25%, transparent)",
                          border: `1px solid ${role.tokenColor}`,
                        }}
                      >
                        <TokenIcon className="w-3.5 h-3.5" style={{ color: role.tokenColor }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[9px] uppercase tracking-[0.25em] text-[var(--gold)]/80 font-display leading-none">
                          Forge le jeton
                        </div>
                        <div className="text-xs font-display text-[var(--parchment)] leading-tight mt-0.5 truncate">
                          {role.token}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80 font-display">
                      {role.subtitle}
                    </div>
                    <h3 className="font-display text-2xl text-ink">{role.name}</h3>
                    <p className="font-body text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                      {role.mission}
                    </p>
                    <div className="pt-3 border-t border-[var(--gold)]/10 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/70 font-display">
                      <span>Source</span>
                      <span className="text-[var(--gold)] truncate ml-2">{role.page}</span>
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
          « Jouez. Accumulez. Méritez. Chaque jeton gagné est une pierre posée sur le chemin du retour. »
        </motion.p>
      </div>
    </section>
  );
}
