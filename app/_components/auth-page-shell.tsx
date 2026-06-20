import Link from "next/link";
import type { ReactNode } from "react";

type AuthPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footerText: string;
  footerLinkLabel: string;
  footerLinkHref: string;
};

export default function AuthPageShell({
  eyebrow,
  title,
  description,
  children,
  footerText,
  footerLinkLabel,
  footerLinkHref,
}: AuthPageShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/marketpanini-background-v1.webp')",
          backgroundPosition: "center 10%",
        }}
      />

      <div className="absolute inset-0 bg-slate-950/55" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.22),transparent_38%),linear-gradient(to_bottom,rgba(2,6,23,0.16),rgba(2,6,23,0.92))]" />
        <div className="absolute left-[-12%] top-[20%] h-[340px] w-[340px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-[-12%] top-[28%] h-[360px] w-[360px] rounded-full bg-emerald-400/20 blur-[130px]" />
        <div className="absolute bottom-[-12%] left-[35%] h-[300px] w-[300px] rounded-full bg-yellow-400/10 blur-[120px]" />

        <div className="absolute left-1/2 top-24 h-[180px] w-[min(760px,90vw)] -translate-x-1/2 rounded-full border border-blue-300/15" />
        <div className="absolute left-1/2 top-36 h-[120px] w-[min(560px,76vw)] -translate-x-1/2 rounded-full border border-emerald-300/10" />

        <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
        <div className="absolute left-[28%] top-[12%] h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
        <div className="absolute right-[22%] top-[18%] h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
        <div className="absolute right-[15%] top-[38%] h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 sm:py-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight transition-colors hover:text-emerald-300 sm:text-2xl"
          >
            ⚽ MarketPanini
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/15 bg-slate-950/30 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:border-emerald-300/40 hover:bg-white/10 hover:text-white sm:px-5"
          >
            Volver al inicio
          </Link>
        </nav>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1fr_480px] lg:gap-16 lg:py-14">
          <section className="hidden max-w-xl lg:block">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-sm font-bold text-yellow-200">
              <span aria-hidden="true">★</span>
              EXPERIENCIA PREMIUM
            </div>

            <h2 className="text-5xl font-black leading-[1.05] tracking-tight xl:text-6xl">
              TU ÁLBUM.
              <br />
              TU COMUNIDAD.
              <br />
              <span className="text-emerald-300">TU MUNDIAL.</span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              Organiza tu colección, conecta con otros coleccionistas y
              prepárate para completar el álbum del Mundial 2030.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-200">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                Inventario digital
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                Matches inteligentes
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                Marketplace
              </span>
            </div>
          </section>

          <section className="mx-auto w-full max-w-[480px]">
            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-slate-950/75 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.65),0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-xl sm:p-9">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/80 to-transparent" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-black tracking-[0.24em] text-emerald-300">
                  {eyebrow}
                </p>
                <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  {title}
                </h1>
                <p className="mt-3 leading-7 text-slate-300">{description}</p>

                <div className="mt-7">{children}</div>

                <p className="mt-7 text-center text-sm text-slate-400">
                  {footerText}{" "}
                  <Link
                    href={footerLinkHref}
                    className="font-bold text-emerald-300 transition hover:text-emerald-200"
                  >
                    {footerLinkLabel}
                  </Link>
                </p>
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              MarketPanini © 2026 · Coleccionismo mundialista
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
