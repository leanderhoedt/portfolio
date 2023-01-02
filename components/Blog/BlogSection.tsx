import Link from 'next/link';
import BlogPosts from './BlogPosts';
import {blogItems} from './items';

export interface BlogItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: 'tutorial' | 'article';
}

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="relative pt-24 px-4 lg:px-10"
    >
      <div className="mx-auto max-w-7xl lg:px-8">
        <h1
          className="text-4xl tracking-tight text-center font-extrabold tracking-tight text-slate-50 md:text-5xl ">
          Blog
        </h1>
        <p className="mx-auto mt-5 max-w-prose text-xl text-center text-slate-200">
          As a full-stack developer, I've learned about patterns and topics throughout my career. Check out a
          couple of my latest articles to see what I've been writing. Visit <Link href="/blog"><code
          className="text-cyan-500 underline">my blog</code></Link> for more
          insights and experiences in the world of development.
        </p>
        <div className="mt-12">
          <BlogPosts
            items={blogItems.slice(0, 4) as BlogItem[]}
          />
        </div>
      </div>
    </section>
  )
}

export default BlogSection;
