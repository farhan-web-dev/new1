import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  author: string;
  status: 'draft' | 'published' | 'scheduled';
  published_at: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  read_time: number;
  view_count: number;
  created_at: string;
  updated_at: string;
  categories?: BlogCategory[];
  tags?: BlogTag[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export async function getPublishedPosts(limit?: number) {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data: posts, error } = await query;

  if (error) throw error;
  if (!posts) return [];

  const postsWithRelations = await Promise.all(
    posts.map(async (post) => {
      const { data: categoryData } = await supabase
        .from('blog_post_categories')
        .select('category:blog_categories(*)')
        .eq('post_id', post.id);

      const { data: tagData } = await supabase
        .from('blog_post_tags')
        .select('tag:blog_tags(*)')
        .eq('post_id', post.id);

      return {
        ...post,
        categories: categoryData?.map((c: any) => c.category).filter(Boolean) || [],
        tags: tagData?.map((t: any) => t.tag).filter(Boolean) || [],
      };
    })
  );

  return postsWithRelations as BlogPost[];
}

export async function getPostBySlug(slug: string) {
  const { data: post, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle();

  if (error) throw error;
  if (!post) return null;

  await incrementViewCount(post.id);

  const { data: categoryData } = await supabase
    .from('blog_post_categories')
    .select('category:blog_categories(*)')
    .eq('post_id', post.id);

  const { data: tagData } = await supabase
    .from('blog_post_tags')
    .select('tag:blog_tags(*)')
    .eq('post_id', post.id);

  return {
    ...post,
    categories: categoryData?.map((c: any) => c.category).filter(Boolean) || [],
    tags: tagData?.map((t: any) => t.tag).filter(Boolean) || [],
  } as BlogPost;
}

export async function incrementViewCount(postId: string) {
  const { error } = await supabase.rpc('increment_view_count', { post_id: postId }).maybeSingle();

  if (error) {
    const { data: post } = await supabase
      .from('blog_posts')
      .select('view_count')
      .eq('id', postId)
      .maybeSingle();

    if (post) {
      await supabase
        .from('blog_posts')
        .update({ view_count: (post.view_count || 0) + 1 })
        .eq('id', postId);
    }
  }
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('name');

  if (error) throw error;
  return data as BlogCategory[];
}

export async function getPostsByCategory(categorySlug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      blog_post_categories!inner(
        category:blog_categories!inner(slug)
      )
    `)
    .eq('blog_post_categories.category.slug', categorySlug)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data as BlogPost[];
}

export interface Lead {
  id: string;
  email: string;
  journey_type: 'chiropractic' | 'holistic' | 'pediatric';
  name?: string;
  phone?: string;
  created_at: string;
  updated_at: string;
  status: 'new' | 'contacted' | 'converted';
  notes?: string;
}

export async function captureLead(data: {
  email: string;
  journey_type: 'chiropractic' | 'holistic' | 'pediatric';
  name?: string;
  phone?: string;
}) {
  const { data: lead, error } = await supabase
    .from('leads')
    .insert([{
      email: data.email,
      journey_type: data.journey_type,
      name: data.name,
      phone: data.phone,
    }])
    .select()
    .single();

  if (error) throw error;
  return lead as Lead;
}
