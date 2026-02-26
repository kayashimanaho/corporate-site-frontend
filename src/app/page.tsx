import Link from 'next/link';
import { getPosts, formatDate, stripHtml } from '@/lib/wordpress';

// サービス一覧
const services = [
  {
    title: 'コンサルティング',
    description: '経営課題を分析し、最適なソリューションをご提案。DX推進から業務改善まで幅広くサポートします。',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: 'システム開発',
    description: 'Webアプリケーションから基幹システムまで、お客様のニーズに合わせた開発を行います。',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'DX支援',
    description: 'デジタル技術を活用した業務変革を支援。クラウド移行、データ活用、AI導入をトータルサポート。',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

// 会社の強み
const features = [
  { number: '15+', label: '年以上の実績' },
  { number: '500+', label: 'プロジェクト完了' },
  { number: '98%', label: '顧客満足度' },
  { number: '50+', label: '専門家チーム' },
];

export default async function Home() {
  // WordPressから最新の投稿を取得
  const posts = await getPosts(3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-emerald-200 to-cyan-200 opacity-30"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              テクノロジーで
              <br />
              <span className="text-emerald-600">ビジネスを加速</span>する
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              私たちは、革新的なデジタルソリューションでお客様のビジネス成長をサポートします。
              戦略立案から実装まで、一貫したサービスを提供します。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-500 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                お問い合わせはこちら
              </Link>
              <Link href="/services" className="group text-sm font-semibold leading-6 text-slate-900">
                サービスを見る
                <span aria-hidden="true" className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.label} className="text-center">
                <div className="text-4xl font-bold text-emerald-400 sm:text-5xl">{feature.number}</div>
                <div className="mt-2 text-sm text-slate-400">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">SERVICES</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              私たちのサービス
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              お客様の課題に合わせた最適なソリューションをご提供します。
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-emerald-200 hover:shadow-md"
                >
                  <div className="mb-6 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-500"
                  >
                    詳しく見る
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-base font-semibold leading-7 text-emerald-600">ABOUT US</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                信頼されるパートナーとして
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                私たちは15年以上にわたり、企業のデジタル変革を支援してきました。
                技術力と経験を活かし、お客様のビジネス課題に真摯に向き合います。
              </p>
              <ul className="mt-8 space-y-4">
                {['最先端技術の活用', '専門家チームによるサポート', '迅速かつ柔軟な対応'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-10 inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md"
              >
                会社概要を見る
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold">15+</div>
                    <div className="mt-2 text-lg">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-base font-semibold leading-7 text-emerald-600">NEWS</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                お知らせ
              </p>
            </div>
            <Link
              href="/news"
              className="hidden items-center text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-500 sm:inline-flex"
            >
              すべて見る
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article
                  key={post.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-emerald-200 hover:shadow-md"
                >
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex-1">
                      <time className="text-xs font-medium text-emerald-600">
                        {formatDate(post.date)}
                      </time>
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 transition-colors group-hover:text-emerald-600">
                        <Link href={`/news/${post.slug}`}>
                          <span className="absolute inset-0" />
                          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              // 投稿がない場合のプレースホルダー
              [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-xs font-medium text-emerald-600">2026年1月{i}日</div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900">
                    サンプルニュース {i}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    WordPressから投稿を取得すると、ここに最新のお知らせが表示されます。
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/news"
              className="inline-flex items-center text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-500"
            >
              すべてのお知らせを見る
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-emerald-600 py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 1024 1024" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ビジネスの課題を<br className="sm:hidden" />
              一緒に解決しませんか？
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-100">
              まずはお気軽にご相談ください。専門スタッフが貴社の課題をヒアリングし、最適なソリューションをご提案いたします。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-emerald-600 shadow-sm transition-all hover:bg-emerald-50 hover:shadow-lg"
              >
                お問い合わせはこちら
              </Link>
              <Link href="tel:03-1234-5678" className="text-sm font-semibold leading-6 text-white">
                <span className="hidden sm:inline">お電話でのお問い合わせ：</span>03-1234-5678
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
