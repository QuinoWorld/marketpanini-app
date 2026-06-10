import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* ESTADIO */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/marketpanini-background-v1.webp')",
          backgroundPosition: "center 10%",
        }}
      />

      <div className="absolute inset-0 bg-slate-950/20" />

      {/* FONDO FUTURISTA */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_35%),linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,1))]" />

        <div className="absolute left-[-10%] top-[20%] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[25%] h-[320px] w-[320px] rounded-full bg-emerald-400/20 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[35%] h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-[120px]" />

        <div className="absolute left-1/2 top-28 h-[220px] w-[520px] -translate-x-1/2 rounded-full border border-blue-400/20 blur-[1px]" />
        <div className="absolute left-1/2 top-36 h-[150px] w-[760px] -translate-x-1/2 rounded-full border border-emerald-400/10 blur-[1px]" />

        <div className="absolute left-1/2 top-24 -translate-x-1/2 text-[180px] font-black leading-none text-blue-400/[0.02]">
          🌎
        </div>

        <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
        <div className="absolute left-[28%] top-[12%] h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
        <div className="absolute right-[22%] top-[18%] h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
        <div className="absolute right-[15%] top-[38%] h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />

        {/* <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-emerald-950/40 to-transparent" /> */}
      </div>
      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
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
          {/* HERO IZQUIERDO */}
          <div>
            <p className="mb-4 inline-block rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              Plataforma para coleccionistas del Mundial 2030
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              EL FUTURO DEL
              <br />
              COLECCIONISMO MUNDIALISTA
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Registra tus figuritas, encuentra intercambios inteligentes,
              compra, vende y completa tu álbum del Mundial 2030 antes que
              nadie.
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

          {/* FIGURITA */}
          <div className="flex items-center justify-center">
            <div className="relative w-[430px] rounded-[32px] border-4 border-yellow-400 bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-10 shadow-[0_0_40px_rgba(250,204,21,0.35)]">
              <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-950">
                LEGENDARY
              </div>

              <div className="mt-6 text-center">
                <div className="mb-4 text-5xl">⭐</div>

                <p className="text-sm text-slate-400">WORLD CUP 2030</p>

                <h2 className="mt-2 text-3xl font-extrabold">ARG 10</h2>

                <h3 className="mt-4 text-4xl font-black text-yellow-300">
                  MESSI
                </h3>

                <div className="mt-6 rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">Rareza</p>
                  <p className="text-xl font-bold text-yellow-300">
                    Legendary
                  </p>
                </div>

                <div className="mt-4 rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">Valor estimado</p>
                  <p className="text-2xl font-bold text-emerald-400">
                    S/150
                  </p>
                </div>

                <div className="mt-4 rounded-xl bg-emerald-400 p-4 text-slate-950">
                  <p className="font-bold">Figurita destacada</p>
                  <p className="text-sm">
                    Ejemplo de carta premium del marketplace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="como-funciona" className="py-16">
          <h2 className="text-center text-4xl font-bold">
            ¿Cómo funciona?
          </h2>

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