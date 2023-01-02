import {blogItems} from '../../components/Blog/items';
import {BlogItem} from '../../components/Blog/BlogSection';
import BlogPosts from '../../components/Blog/BlogPosts';

const Blog = () => {
  return (
    <div className="mx-auto lg:h-screen max-w-7xl lg:px-8 px-4 h-5/6 flex">
      <div>
        <div className="mx-auto mt-5 max-w-prose text-xl text-center text-slate-200">
          <h1 className="text-4xl text-leading pb-10">Welcome to my personal blog! </h1>
          <h4>
            I am a full-stack developer with a passion for learning and staying up-to-date with the latest technologies
            and best practices. On this blog, I plan to share my experiences and insights from my career as a developer,
            including the patterns and topics I have encountered along the way. From software design patterns and
            architectural approaches, to frontend and backend technologies.
          </h4>

        </div>
        <div className="py-24">
          <BlogPosts
            items={blogItems as BlogItem[]}
          />
        </div>
      </div>
    </div>
  )
}

export default Blog;
