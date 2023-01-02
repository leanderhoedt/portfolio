import BlogCard from "./BlogCard";
import {blogItems} from "./items";

interface BlogItemProps {
  id: string;
  title: string;
  category: 'tutorial' | 'article';
  description: string;
  href: string;
}

interface BlogProps {
  items: BlogItemProps[];
}

const Blog = ({items = []}: BlogProps) => {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {
        items.map(({id, category, title, description, href}) => <BlogCard
          key={id}
          title={title}
          category={category}
          description={description}
          href={href}
        />)
      }
    </div>
  )
}

export default Blog;
