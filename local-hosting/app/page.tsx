export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 text-slate-900">
      <div className="mx-auto max-w-5xl p-8">
        {/* Header */}
        <header className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-slate-900" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Dev Router — POC de MFEs (Multi-Zone)
          </h1>
        </header>

        {/* Card explicativo */}
        <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-700">
            Você está no <strong>servidor local</strong> que simula a
            orquestração entre MFEs. Em <strong>desenvolvimento</strong>, este
            app Next redireciona as rotas{' '}
            <code className="rounded bg-black/5 px-1">/mfe-01</code> e{' '}
            <code className="rounded bg-black/5 px-1">/mfe-02</code> para cada
            MFE por meio de <em>rewrites</em>.
            <br />
            Em <strong>produção</strong>, esse papel é feito pelo{' '}
            <strong>Amazon CloudFront</strong> (behaviors por path) apontando
            para cada app hospedado no <strong>AWS Amplify Hosting</strong>.
          </p>

          <ul className="mt-4 list-disc pl-6 text-sm text-gray-700">
            <li>
              <span className="font-medium">CloudFront</span>: roteia{' '}
              <code className="rounded bg-black/5 px-1">/mfe-01</code>,{' '}
              <code className="rounded bg-black/5 px-1">/mfe-02</code> e assets
              para as <em>origins</em> (cada MFE).
            </li>
            <li>
              <span className="font-medium">Amplify Hosting</span>: faz o deploy
              de cada MFE (um repositório por app).
            </li>
          </ul>

          {/* CTA links para a demo */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/mfe-01"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white"
            >
              Ir para MFE-01
            </a>
            <a
              href="/mfe-02"
              className="rounded-lg border px-4 py-2 text-sm hover:bg-black/5"
            >
              Ir para MFE-02
            </a>
            <a
              href="/mfe-01/login"
              className="rounded-lg border px-4 py-2 text-sm hover:bg-black/5"
            >
              Login no MFE-01
            </a>
            <a
              href="/mfe-02/reset"
              className="rounded-lg border px-4 py-2 text-sm hover:bg-black/5"
            >
              Reset no MFE-02
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Demo Multi-Zone • Dev Router em{' '}
          <code className="rounded bg-black/5 px-1">localhost:3000</code>
        </footer>
      </div>
    </div>
  );
}
