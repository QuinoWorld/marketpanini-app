import type { Metadata } from "next";
import Link from "next/link";
import AuthPageShell from "../_components/auth-page-shell";

export const metadata: Metadata = {
  title: "Crear cuenta | MarketPanini",
  description: "Únete a la comunidad de coleccionistas de MarketPanini.",
};

const inputClassName =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60 focus:bg-white/[0.09] focus:ring-4 focus:ring-emerald-400/10";

export default function RegistroPage() {
  return (
    <AuthPageShell
      eyebrow="ÚNETE A LA COMUNIDAD"
      title="Crea tu cuenta"
      description="Empieza a organizar tus figuritas y prepárate para vivir el coleccionismo del Mundial 2030."
      footerText="¿Ya formas parte de MarketPanini?"
      footerLinkLabel="Inicia sesión"
      footerLinkHref="/login"
    >
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold text-slate-200"
          >
            Nombre de coleccionista
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            className={inputClassName}
          />
        </div>

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

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-200"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              className={inputClassName}
            />
          </div>

          <div>
            <label
              htmlFor="password-confirmation"
              className="text-sm font-semibold text-slate-200"
            >
              Confirmar
            </label>
            <input
              id="password-confirmation"
              name="passwordConfirmation"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              className={inputClassName}
            />
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-3 pt-1 text-sm leading-6 text-slate-300">
          <input
            type="checkbox"
            name="terms"
            className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-white/10 accent-emerald-400"
          />
          <span>
            Acepto los{" "}
            <Link
              href="#"
              className="font-semibold text-yellow-300 transition hover:text-yellow-200"
            >
              términos y condiciones
            </Link>{" "}
            de la comunidad.
          </span>
        </label>

        <Link
          href="/dashboard"
          className="flex w-full items-center justify-center rounded-full bg-emerald-400 px-6 py-4 font-black text-slate-950 shadow-[0_0_24px_rgba(52,211,153,0.2)] transition hover:bg-emerald-300 hover:shadow-[0_0_32px_rgba(52,211,153,0.32)]"
        >
          Crear mi colección
        </Link>

        <p className="text-center text-xs leading-5 text-slate-500">
          El registro es una vista previa visual y todavía no almacena datos.
        </p>
      </form>
    </AuthPageShell>
  );
}
