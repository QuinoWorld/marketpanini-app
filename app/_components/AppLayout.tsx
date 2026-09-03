import Link from "next/link";
import type { ReactNode } from "react";
import {
  Bell,
  BookOpen,
  Heart,
  Home,
  Repeat2,
  Search,
  Settings,
  Sparkles,
  Store,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type AppLayoutProps = {
  children: ReactNode;
  activeItem?: string;
};

type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Mi Álbum",
    href: "/dashboard/album",
    icon: BookOpen,
  },
  {
    label: "Marketplace",
    href: "/dashboard/marketplace",
    icon: Store,
  },
  {
    label: "Intercambios",
    href: "/dashboard/intercambios",
    icon: Repeat2,
  },
  {
    label: "Deseadas",
    href: "/dashboard/deseadas",
    icon: Heart,
  },
  {
    label: "Perfil",
    href: "/dashboard/perfil",
    icon: UserRound,
  },
  {
    label: "Configuración",
    href: "/dashboard/configuracion",
    icon: Settings,
  },
];

export default function AppLayout({
  children,
  activeItem = "Dashboard",
}: AppLayoutProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.24),transparent_34%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,23,42,0.92)_45%,rgba(2,6,23,0.98))]" />
        <div className="absolute left-[-8rem] top-28 h-80 w-80 rounded-full bg-emerald-400/15 blur-[120px]" />
        <div className="absolute right-[-10rem] top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-[-10rem] left-[35%] h-96 w-96 rounded-full bg-yellow-300/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <aside className="fixed inset-y-4 left-4 z-30 hidden w-72 flex-col rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:flex">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/50 px-4 py-4"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 via-emerald-500 to-blue-600 text-lg shadow-[0_0_30px_rgba(16,185,129,0.35)]">
            ⚽
          </div>
          <div>
            <p className="text-base font-black tracking-tight">
              MarketPanini
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-200/70">
              Club premium
            </p>
          </div>
        </Link>

        <nav className="mt-6 flex flex-1 flex-col gap-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition ${
                  isActive
                    ? "border border-emerald-300/30 bg-emerald-300/15 text-emerald-100 shadow-[0_0_30px_rgba(16,185,129,0.16)]"
                    : "text-slate-300 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className={`h-5 w-5 ${
                    isActive
                      ? "text-emerald-300"
                      : "text-slate-500 group-hover:text-yellow-200"
                  }`}
                  strokeWidth={2}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="rounded-3xl border border-yellow-300/15 bg-yellow-300/[0.07] p-4">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-300/15 text-yellow-200">
            <Sparkles aria-hidden="true" className="h-5 w-5" />
          </div>
          <p className="text-sm font-black text-yellow-100">
            Base lista para crecer
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            Estructura visual preparada para futuras pantallas privadas.
          </p>
        </div>
      </aside>

      <div className="relative z-10 flex min-h-screen flex-col px-4 py-4 sm:px-6 lg:pl-80">
        <header className="sticky top-4 z-20 rounded-[1.75rem] border border-white/10 bg-slate-950/55 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:px-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4 lg:hidden">
              <Link href="/dashboard" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 via-emerald-500 to-blue-600">
                  ⚽
                </span>
                <span className="font-black tracking-tight">
                  MarketPanini
                </span>
              </Link>

              <button
                type="button"
                aria-label="Notificaciones"
                className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-300"
              >
                <Bell aria-hidden="true" className="h-5 w-5" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-300" />
              </button>
            </div>

            <div className="relative w-full lg:max-w-xl">
              <Search
                aria-hidden="true"
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
              />
              <input
                type="search"
                placeholder="Buscar figuritas, álbumes o coleccionistas..."
                className="w-full rounded-2xl border border-white/10 bg-white/[0.055] py-3 pl-12 pr-4 text-sm font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40 focus:bg-white/[0.08] focus:ring-4 focus:ring-emerald-300/10"
              />
            </div>

            <div className="flex items-center justify-between gap-3 lg:justify-end">
              <nav className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
                {navigationItems.slice(0, 5).map((item) => {
                  const Icon = item.icon;
                  const isActive = item.label === activeItem;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex shrink-0 items-center gap-2 rounded-2xl px-3 py-2 text-xs font-bold ${
                        isActive
                          ? "bg-emerald-300/15 text-emerald-200"
                          : "bg-white/[0.05] text-slate-400"
                      }`}
                    >
                      <Icon aria-hidden="true" className="h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden items-center gap-3 lg:flex">
                <button
                  type="button"
                  aria-label="Notificaciones"
                  className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-300 transition hover:border-emerald-300/30 hover:text-white"
                >
                  <Bell aria-hidden="true" className="h-5 w-5" />
                  <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                </button>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-200 via-emerald-300 to-blue-500 text-sm font-black text-slate-950">
                    MP
                  </div>
                  <div>
                    <p className="text-sm font-bold">Usuario</p>
                    <p className="text-xs text-slate-500">Coleccionista</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 py-6 sm:py-8">{children}</main>
      </div>
    </div>
  );
}
