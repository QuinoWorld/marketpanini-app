import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  BookOpen,
  CircleDollarSign,
  Clock3,
  Heart,
  HeartHandshake,
  PackagePlus,
  Repeat2,
  SearchX,
  Sparkles,
  Star,
  Store,
  Trophy,
} from "lucide-react";
import AppLayout from "../_components/AppLayout";

export const metadata: Metadata = {
  title: "Dashboard | MarketPanini",
  description: "Panel principal de coleccionistas de MarketPanini.",
};

type StatCard = {
  label: string;
  value: string;
  helper: string;
  icon: LucideIcon;
  tone: "gold" | "emerald" | "blue" | "rose";
};

type QuickAction = {
  label: string;
  description: string;
  icon: LucideIcon;
};

type RecommendedMatch = {
  user: string;
  has: string;
  wants: string;
  accent: string;
};

type RecentActivity = {
  text: string;
  detail: string;
  icon: LucideIcon;
};

const stats: StatCard[] = [
  {
    label: "Legendarias",
    value: "18",
    helper: "Figuritas premium",
    icon: Trophy,
    tone: "gold",
  },
  {
    label: "Repetidas",
    value: "125",
    helper: "Listas para mover",
    icon: Repeat2,
    tone: "emerald",
  },
  {
    label: "Faltantes",
    value: "348",
    helper: "Objetivo actual",
    icon: SearchX,
    tone: "blue",
  },
  {
    label: "En venta",
    value: "26",
    helper: "Publicadas ahora",
    icon: CircleDollarSign,
    tone: "rose",
  },
];

const quickActions: QuickAction[] = [
  {
    label: "Registrar figuritas",
    description: "Añade nuevas piezas a tu colección.",
    icon: PackagePlus,
  },
  {
    label: "Mi álbum",
    description: "Revisa tu progreso por selección.",
    icon: BookOpen,
  },
  {
    label: "Marketplace",
    description: "Explora publicaciones activas.",
    icon: Store,
  },
  {
    label: "Intercambios",
    description: "Encuentra oportunidades de cambio.",
    icon: HeartHandshake,
  },
  {
    label: "Deseadas",
    description: "Prioriza las figuritas que faltan.",
    icon: Heart,
  },
];

const recommendedMatches: RecommendedMatch[] = [
  {
    user: "Carlos",
    has: "ARG 12",
    wants: "BRA 18",
    accent: "from-sky-400 to-emerald-300",
  },
  {
    user: "Diego",
    has: "ESP 09",
    wants: "FRA 11",
    accent: "from-yellow-300 to-emerald-300",
  },
  {
    user: "Lucía",
    has: "MEX 04",
    wants: "ARG 10",
    accent: "from-emerald-300 to-blue-400",
  },
];

const recentActivity: RecentActivity[] = [
  {
    text: "Registraste LAM 19 Legendary",
    detail: "Nueva figurita añadida al álbum.",
    icon: Star,
  },
  {
    text: "Publicaste BRA 18 en Marketplace",
    detail: "Disponible para venta o intercambio.",
    icon: Store,
  },
  {
    text: "Intercambiaste ESP 07 con Diego",
    detail: "Movimiento completado recientemente.",
    icon: HeartHandshake,
  },
];

const toneClasses: Record<StatCard["tone"], string> = {
  gold: "from-yellow-300/20 to-yellow-500/5 text-yellow-200",
  emerald: "from-emerald-300/20 to-emerald-500/5 text-emerald-200",
  blue: "from-blue-300/20 to-blue-500/5 text-blue-200",
  rose: "from-rose-300/20 to-rose-500/5 text-rose-200",
};

export default function DashboardPage() {
  return (
    <AppLayout activeItem="Dashboard">
      <div className="space-y-6">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:p-8">
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-yellow-200/80 to-transparent" />
          <div className="absolute right-[-5rem] top-[-5rem] h-72 w-72 rounded-full bg-emerald-300/20 blur-[100px]" />
          <div className="absolute bottom-[-6rem] left-10 h-64 w-64 rounded-full bg-blue-500/15 blur-[110px]" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-100">
                <BadgeCheck aria-hidden="true" className="h-4 w-4" />
                Coleccionista Pro
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Hola, Joaquín 👋
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Así va tu colección rumbo al Mundial 2030.
              </p>
            </div>

            <div className="grid max-w-md grid-cols-2 gap-3 rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-3">
              <div className="rounded-2xl bg-white/[0.06] px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Ranking
                </p>
                <p className="mt-1 text-2xl font-black text-emerald-300">
                  Top 8%
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.06] px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Mundial
                </p>
                <p className="mt-1 text-2xl font-black text-yellow-200">
                  2030
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            <article className="relative overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-gradient-to-br from-emerald-300/[0.12] via-white/[0.055] to-blue-500/[0.08] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8">
              <div className="absolute right-[-3rem] top-8 h-48 w-48 rounded-full bg-emerald-300/20 blur-[80px]" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-200">
                    Progreso del álbum
                  </p>
                  <div className="mt-4 flex items-end gap-3">
                    <span className="text-6xl font-black leading-none tracking-tight text-white sm:text-7xl">
                      68%
                    </span>
                    <span className="pb-2 text-sm font-bold text-slate-400">
                      completado
                    </span>
                  </div>
                  <p className="mt-4 text-lg font-bold text-slate-200">
                    742 de 1090 figuritas registradas
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-4 lg:w-72">
                  <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    <span>Meta actual</span>
                    <span className="text-emerald-300">+348</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">
                    Vas a ritmo de final anticipada. Prioriza tus faltantes
                    antes de abrir nuevos lotes.
                  </p>
                </div>
              </div>

              <div className="relative mt-8">
                <div className="h-4 overflow-hidden rounded-full border border-white/10 bg-slate-950/70">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-300 via-blue-400 to-yellow-200 shadow-[0_0_30px_rgba(52,211,153,0.35)]" />
                </div>
                <div className="mt-3 flex justify-between text-xs font-bold text-slate-500">
                  <span>Inicio</span>
                  <span>Álbum completo</span>
                </div>
              </div>
            </article>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <article
                    key={stat.label}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${toneClasses[stat.tone]}`}
                    >
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-bold text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-4xl font-black tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                      {stat.helper}
                    </p>
                  </article>
                );
              })}
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl sm:p-6">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
                    Acciones rápidas
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    Siguiente movimiento
                  </h2>
                </div>
                <p className="text-sm text-slate-500">
                  Atajos visuales para futuros módulos.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {quickActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <button
                      key={action.label}
                      type="button"
                      className="group rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-4 text-left transition hover:border-emerald-300/30 hover:bg-emerald-300/[0.08]"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.07] text-emerald-300 transition group-hover:bg-emerald-300/15 group-hover:text-emerald-200">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </div>
                      <p className="font-black text-white">{action.label}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {action.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">
                    Matches recomendados
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    Oportunidades hoy
                  </h2>
                </div>
                <BellRing
                  aria-hidden="true"
                  className="h-6 w-6 text-yellow-200"
                />
              </div>

              <div className="space-y-3">
                {recommendedMatches.map((match) => (
                  <article
                    key={match.user}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${match.accent} text-sm font-black text-slate-950`}
                      >
                        {match.user.slice(0, 1)}
                      </div>
                      <div>
                        <p className="font-black">{match.user}</p>
                        <p className="text-xs text-slate-500">
                          Match compatible
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                      <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.08] px-3 py-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
                          Tiene
                        </p>
                        <p className="mt-1 font-black">{match.has}</p>
                      </div>
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 text-slate-500"
                      />
                      <div className="rounded-2xl border border-yellow-300/15 bg-yellow-300/[0.08] px-3 py-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-200">
                          Busca
                        </p>
                        <p className="mt-1 font-black">{match.wants}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200/80">
                    Actividad reciente
                  </p>
                  <h2 className="mt-2 text-2xl font-black">Últimos eventos</h2>
                </div>
                <Clock3
                  aria-hidden="true"
                  className="h-6 w-6 text-slate-500"
                />
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;

                  return (
                    <div key={activity.text} className="flex gap-3">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/45 text-emerald-300">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </div>
                      <div className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                        <p className="text-sm font-bold text-slate-200">
                          {activity.text}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {activity.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="overflow-hidden rounded-[2rem] border border-yellow-300/15 bg-yellow-300/[0.07] p-5 backdrop-blur-2xl sm:p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-300/15 text-yellow-200">
                <Sparkles aria-hidden="true" className="h-6 w-6" />
              </div>
              <p className="text-lg font-black text-yellow-100">
                Consejo del día
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Publica repetidas de alta demanda antes de buscar legendarias:
                aumenta tus chances de match.
              </p>
            </section>
          </aside>
        </section>
      </div>
    </AppLayout>
  );
}
