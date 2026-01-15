// WordPress REST API との連携用ユーティリティ

const API_URL = process.env.WORDPRESS_API_URL || 'http://corporate-site.local/wp-json/wp/v2';

// 投稿の型定義
export interface Post {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

// 固定ページの型定義
export interface Page {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

// カテゴリの型定義
export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// 投稿一覧を取得
export async function getPosts(perPage: number = 10): Promise<Post[]> {
  try {
    const response = await fetch(
      `${API_URL}/posts?per_page=${perPage}&_embed`,
      { next: { revalidate: 60 } } // 60秒ごとに再検証
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// スラッグで投稿を取得
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(
      `${API_URL}/posts?slug=${slug}&_embed`,
      { next: { revalidate: 60 } }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    
    const posts = await response.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// 固定ページ一覧を取得
export async function getPages(): Promise<Page[]> {
  try {
    const response = await fetch(
      `${API_URL}/pages`,
      { next: { revalidate: 60 } }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch pages');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

// スラッグで固定ページを取得
export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const response = await fetch(
      `${API_URL}/pages?slug=${slug}`,
      { next: { revalidate: 60 } }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch page');
    }
    
    const pages = await response.json();
    return pages[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

// カテゴリ一覧を取得
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(
      `${API_URL}/categories`,
      { next: { revalidate: 60 } }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// 日付をフォーマット
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// HTMLタグを除去してプレーンテキストに変換
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

