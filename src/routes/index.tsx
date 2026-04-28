import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/quest/Hero";
import { Pillars } from "@/components/quest/Pillars";
import { Tokens } from "@/components/quest/Tokens";
import { Guardians } from "@/components/quest/Guardians";
import { CtaFinal } from "@/components/quest/CtaFinal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Black To Benin — La Renaissance commence par un Retour" },
      {
        name: "description",
        content:
          "L'Odyssée Black To Benin : 360 voix unies, 4 dimensions sacrées, 6 guides ancestraux pour orchestrer le Retour des trésors royaux exilés.",
      },
      { property: "og:title", content: "Black To Benin — La Renaissance commence par un Retour" },
      {
        property: "og:description",
        content: "Une odyssée de gamification spirituelle pour le Retour des trésors du Bénin.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-white">
      <Hero />
      <Pillars />
      <Tokens />
      <Guardians />
      <CtaFinal />
      <footer className="border-t border-zinc-100 py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--benin-green)" }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--benin-yellow)" }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--benin-red)" }} />
            <span className="ml-2 uppercase tracking-[0.25em] font-medium">Black To Benin</span>
          </div>
          <div className="uppercase tracking-[0.25em]">© L'Odyssée du Retour</div>
        </div>
      </footer>
    </main>
  );
}
