import { useBlogs } from '../../contexts/blog-contexts';
import '../Blogs/Blogs.css';

export function Blogs() {

    const { blogs } = useBlogs();
    console.log(blogs)

  return (
    <div className="App">
        Blogs Com
      <div className="blog-list">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
                <h1>{blog.title}</h1> <small>{blog.date}</small>
                <p>{blog.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}


