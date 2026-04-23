import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/quest/Hero";
import { Pillars } from "@/components/quest/Pillars";
import { Tokens } from "@/components/quest/Tokens";
import { Guardians } from "@/components/quest/Guardians";
import { CtaFinal } from "@/components/quest/CtaFinal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Libérez les Trésors de la Terre Mère — Quête Sacrée du Bénin" },
      {
        name: "description",
        content:
          "Une quête mythologique afro-futuriste : retrouvez les trésors perdus du Bénin, choisissez votre destin parmi les 4 Piliers et obtenez la bénédiction des 6 Gardiens.",
      },
      { property: "og:title", content: "Libérez les Trésors de la Terre Mère" },
      {
        property: "og:description",
        content: "Une quête mythologique pour orchestrer le retour sacré des trésors béninois.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Hero />
      <Pillars />
      <Tokens />
      <Guardians />
      <CtaFinal />
      <footer className="py-10 text-center text-xs uppercase tracking-[0.4em] text-[var(--gold)]/40 font-display border-t border-[var(--gold)]/10">
        ✦ Quête du Trésor — Terre Mère ✦
      </footer>
    </main>
  );
}
