export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            MarketPanini
          </h1>

          <div className="flex gap-3">
            <button className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10">
              Iniciar sesión
            </button>
            <button className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300">
              Registrarse
            </button>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-16 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              Plataforma para coleccionistas del Mundial
            </p>

            <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Completa tu álbum más rápido.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Registra tus figuritas, publica tus repetidas y encuentra personas
              para intercambiar, comprar o vender de forma sencilla.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-emerald-400 px-8 py-4 font-bold text-slate-950 hover:bg-emerald-300">
                Empezar ahora
              </button>
              <button className="rounded-full border border-white/20 px-8 py-4 font-bold hover:bg-white/10">
                Ver cómo funciona
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-slate-400">Figuritas</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-slate-400">Intercambios</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-slate-400">Usuarios</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl">
            <div className="rounded-2xl bg-slate-900 p-6">
              <h3 className="mb-6 text-xl font-bold">
                Tu álbum inteligente
              </h3>

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
      </section>
    </main>
  );
}