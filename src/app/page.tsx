import Link from "next/link";

export default function RootHomePage() {
  return (
    <html lang="zh" className="h-full">
      <head>
        <meta httpEquiv="refresh" content="0; url=/zh" />
      </head>
      <body className="flex min-h-full items-center justify-center bg-primary px-6 text-white">
        <main className="max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded bg-accent font-serif text-2xl font-bold">
            鼎
          </div>
          <h1 className="font-serif text-3xl font-bold">北京鼎泰安采矿山水害防治研究院</h1>
          <p className="mt-4 text-sm leading-7 text-white/68">
            正在进入中文首页。如果页面没有自动跳转，请点击下方链接。
          </p>
          <Link
            href="/zh"
            className="mt-8 inline-flex rounded bg-accent px-6 py-3 text-sm font-semibold text-white"
          >
            进入首页
          </Link>
        </main>
      </body>
    </html>
  );
}
