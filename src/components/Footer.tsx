import Link from 'next/link';

const navigation = {
  company: [
    { name: '会社概要', href: '/about' },
    { name: '代表挨拶', href: '/about#message' },
    { name: '沿革', href: '/about#history' },
    { name: 'アクセス', href: '/about#access' },
  ],
  services: [
    { name: 'サービス一覧', href: '/services' },
    { name: 'コンサルティング', href: '/services#consulting' },
    { name: 'システム開発', href: '/services#development' },
    { name: 'DX支援', href: '/services#dx' },
  ],
  support: [
    { name: 'お知らせ', href: '/news' },
    { name: 'お問い合わせ', href: '/contact' },
    { name: 'プライバシーポリシー', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">フッター</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and description */}
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              CORP<span className="text-emerald-400">.</span>
            </Link>
            <p className="text-sm leading-6 text-slate-400">
              革新的なソリューションで<br />
              ビジネスの未来を創造します。
            </p>
            <div className="flex space-x-6">
              {/* Social links */}
              <a href="#" className="text-slate-500 transition-colors hover:text-emerald-400">
                <span className="sr-only">X (Twitter)</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 transition-colors hover:text-emerald-400">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">会社情報</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-slate-400 transition-colors hover:text-emerald-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">サービス</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-slate-400 transition-colors hover:text-emerald-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">サポート</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-slate-400 transition-colors hover:text-emerald-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">お問い合わせ</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm leading-6 text-slate-400">
                    〒100-0001<br />
                    東京都千代田区千代田1-1
                  </li>
                  <li>
                    <a href="tel:03-1234-5678" className="text-sm leading-6 text-slate-400 transition-colors hover:text-emerald-400">
                      TEL: 03-1234-5678
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@corp.example.com" className="text-sm leading-6 text-slate-400 transition-colors hover:text-emerald-400">
                      info@corp.example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-slate-800 pt-8">
          <p className="text-xs leading-5 text-slate-500">
            &copy; {new Date().getFullYear()} CORP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

