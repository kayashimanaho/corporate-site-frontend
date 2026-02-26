import { getPostBySlug, formatDate } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';

// TypeScriptのための「型」定義（このページが受け取るデータの設計図）
interface Props {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: Props) {
  // params は Promise として扱われる場合があるため、await します
  const { slug } = await params;

  // WordPressから記事データを取得
  const post = await getPostBySlug(slug);

  // 記事がなければ404を表示
  if (!post) {
    notFound();
  }

  // ここでサニタイズ処理を行う
  // 自分で投稿した記事なので、<iframe> や <p> の style など
  // 必要なタグを消しすぎない設定にすることも可能ですが、まずは標準設定で。
  const sanitizedContent = DOMPurify.sanitize(post.content.rendered);
  const sanitizedTitle = DOMPurify.sanitize(post.title.rendered);

  return (
    <div className="bg-white">
      <article className="mx-auto max-w-3xl px-6 py-32 lg:px-8">
        {/* 戻るリンク */}
        <Link href="/" className="group inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-500">
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
          お知らせ一覧へ戻る
        </Link>

        {/* 記事の見出し部分 */}
        <header className="mt-8">
          <time className="text-sm font-medium text-slate-500">
            {formatDate(post.date)}
          </time>
          <h1 
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            dangerouslySetInnerHTML={{ __html: sanitizedTitle }}//サニタイズ処理を行ったタイトルを表示
          />
        </header>

        {/* 記事の本文 */}
        <div 
          className="mt-10 prose prose-slate max-w-none prose-emerald"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}//サニタイズ処理を行った本文を表示
        />
      </article>
    </div>
  );
}