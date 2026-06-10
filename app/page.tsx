import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            ⚽ MarketPanini
          </Link>

          <div className="flex gap-3">
            <Link
              href="/login"
              className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10"
            >
              Iniciar sesión
            </Link>

            <Link
              href="/registro"
              className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Registrarse
            </Link>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-16 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              Plataforma para coleccionistas del Mundial 2030
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Completa tu álbum más rápido.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Registra tus figuritas, publica tus repetidas y encuentra
              coleccionistas para intercambiar, comprar o vender de forma
              sencilla.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/registro"
                className="rounded-full bg-emerald-400 px-8 py-4 text-center font-bold text-slate-950 hover:bg-emerald-300"
              >
                Empezar ahora
              </Link>

              <a
                href="#como-funciona"
                className="rounded-full border border-white/20 px-8 py-4 text-center font-bold hover:bg-white/10"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl">
            <div className="rounded-2xl bg-slate-900 p-6">
              <h2 className="mb-6 text-xl font-bold">Tu álbum inteligente</h2>

              <div className="space-y-4">
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">Progreso del álbum</p>
                  <p className="mt-1 text-3xl font-bold">0%</p>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">Repetidas</p>
                  <p className="mt-1 text-3xl font-bold">0</p>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">Faltantes</p>
                  <p className="mt-1 text-3xl font-bold">0</p>
                </div>

                <div className="rounded-xl bg-emerald-400 p-4 text-slate-950">
                  <p className="font-bold">Match recomendado</p>
                  <p className="text-sm">
                    Aquí aparecerán personas con figuritas que necesitas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="como-funciona" className="py-16">
          <h2 className="text-center text-4xl font-bold">¿Cómo funciona?</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-3xl">📘</p>
              <h3 className="mt-4 text-xl font-bold">Registra tu álbum</h3>
              <p className="mt-3 text-slate-300">
                Marca las figuritas que tienes y controla tu progreso en tiempo
                real.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-3xl">🔁</p>
              <h3 className="mt-4 text-xl font-bold">Publica repetidas</h3>
              <p className="mt-3 text-slate-300">
                Sube tus figuritas repetidas para intercambio o venta.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-3xl">🤝</p>
              <h3 className="mt-4 text-xl font-bold">Encuentra matches</h3>
              <p className="mt-3 text-slate-300">
                El sistema detecta personas que tienen lo que necesitas.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-center text-4xl font-bold">
            Pensado para coleccionistas
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              "Inventario ordenado",
              "Intercambios rápidos",
              "Marketplace especializado",
              "Futura IA de escaneo",
            ].map((beneficio) => (
              <div
                key={beneficio}
                className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-center"
              >
                <p className="font-semibold text-emerald-300">{beneficio}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
          MarketPanini © 2026 — Proyecto en desarrollo para coleccionistas del
          Mundial.
        </footer>
      </section>
    </main>
  );
}