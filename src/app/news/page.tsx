import Link from 'next/link';
import { getPosts, formatDate } from '@/lib/wordpress';
import DOMPurify from 'isomorphic-dompurify';

export const revalidate = 60; // 1分ごとに更新

export default async function NewsListPage() {
  // 全てのお知らせを取得（件数を多めに設定、あるいは全件取得）
  const posts = await getPosts(100); 

  return (
    <div className="bg-white min-h-screen">
      <main className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            お知らせ一覧
          </h1>
          <p className="mt-2 text-lg leading-8 text-slate-600">
            最新のニュースやプレスリリースをお届けします。
          </p>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => {
              // タイトルをサニタイズ
              const sanitizedTitle = DOMPurify.sanitize(post.title.rendered);

              return (
                <article key={post.id} className="flex flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-slate-500">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <div className="group relative">
                    <h2 className="mt-3 text-xl font-semibold leading-6 text-slate-900 group-hover:text-emerald-600">
                      <Link href={`/news/${post.slug}`}>
                        <span className="absolute inset-0" />
                        <span dangerouslySetInnerHTML={{ __html: sanitizedTitle }} />
                      </Link>
                    </h2>
                    {/* 抜粋を表示（HTMLタグを除去済み） */}
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                      {post.excerpt.rendered.replace(/<[^>]*>/g, '')}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-slate-100 pt-6">
                    <Link
                      href={`/news/${post.slug}`}
                      className="text-sm font-semibold leading-6 text-emerald-600 hover:text-emerald-500"
                    >
                      記事を読む <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}