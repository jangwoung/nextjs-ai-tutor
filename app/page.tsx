export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-4 py-12 sm:px-8">
      <header className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Next.js Hands-on
        </p>
        <h1 className="text-2xl font-bold text-gray-900">
          学習メモ共有ミニブログ（ハンズオン用スタート状態）
        </h1>
        <p className="text-sm text-gray-600">
          ここから Server Actions / Prisma / next-auth / ISR / MDX を少しずつ実装していきます。
          チューターの指示に従って、このトップページを本物のミニブログに育ててください。
        </p>
      </header>

      <section className="mt-4 rounded-xl border border-dashed border-gray-200 bg-white p-4 text-sm text-gray-600">
        <p className="mb-1 font-semibold">今の状態:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Next.js 16 / App Router のプロジェクトが起動できる状態です。</li>
          <li>Prisma / next-auth / MDX などのライブラリはインストール済みですが、機能はまだ実装されていません。</li>
          <li>このページは「ハンズオンの出発点」として、あえてシンプルなプレースホルダーになっています。</li>
        </ul>
      </section>
    </main>
  );
}
