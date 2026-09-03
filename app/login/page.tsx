import type { Metadata } from "next";
import Link from "next/link";
import AuthPageShell from "../_components/auth-page-shell";

export const metadata: Metadata = {
  title: "Iniciar sesión | MarketPanini",
  description: "Accede a tu colección digital de MarketPanini.",
};

const inputClassName =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60 focus:bg-white/[0.09] focus:ring-4 focus:ring-emerald-400/10";

export default function LoginPage() {
  return (
    <AuthPageShell
      eyebrow="BIENVENIDO DE NUEVO"
      title="Inicia sesión"
      description="Continúa construyendo tu colección y encuentra tus próximos intercambios."
      footerText="¿Aún no tienes cuenta?"
      footerLinkLabel="Regístrate gratis"
      footerLinkHref="/registro"
    >
      <form className="space-y-5">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-slate-200">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="coleccionista@email.com"
            className={inputClassName}
          />
        </div>

        <div>
          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-200"
            >
              Contraseña
            </label>
            <Link
              href="#"
              className="text-xs font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            className={inputClassName}
          />
        </div>

        <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-300">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-white/20 bg-white/10 accent-emerald-400"
          />
          Mantener mi sesión iniciada
        </label>

        <Link
          href="/dashboard"
          className="flex w-full items-center justify-center rounded-full bg-emerald-400 px-6 py-4 font-black text-slate-950 shadow-[0_0_24px_rgba(52,211,153,0.2)] transition hover:bg-emerald-300 hover:shadow-[0_0_32px_rgba(52,211,153,0.32)]"
        >
          Entrar a mi colección
        </Link>

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-bold tracking-wider text-slate-500">
            ACCESO SEGURO
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <p className="text-center text-xs leading-5 text-slate-500">
          Tus datos estarán protegidos cuando habilitemos el acceso oficial.
        </p>
      </form>
    </AuthPageShell>
  );
}
