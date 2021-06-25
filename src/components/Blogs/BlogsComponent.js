import { useBlogs } from '../../contexts/blog-contexts';
import '../Blogs/Blogs.css';
 export function Blogs() {

    const { blogs } = useBlogs();
    console.log(blogs)

  return (
    <div className="Blogs">
      <div className="blog-list">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
                <h1>{blog.title}</h1> <small>{blog.date}</small>
                <h4>{`Author : ${blog.authorfirstname} ${" "} ${blog.authorlastname}`}</h4>
                <p className="blog-slug">{blog.blog_slug}</p>
                <a 
                href={`/blogs/${blog.title}`}
                className="blog-details-link"
                >
                  <h3>Read More</h3>
                </a>

              
                 
            </div>
          ))}
      </div>
    </div>
  );
}


